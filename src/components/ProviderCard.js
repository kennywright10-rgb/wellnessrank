// ─────────────────────────────────────────────────────────────
// ProviderCard — roaminghunger-style image card
// Photo header with overlay, warm wellness palette
// ─────────────────────────────────────────────────────────────

// Curated Unsplash images by specialty
const SPECIALTY_IMAGES = {
  nad:        'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=300&fit=crop&auto=format&q=80',
  myers:      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=700&h=300&fit=crop&auto=format&q=80',
  hydration:  'https://images.unsplash.com/photo-1550572017-edd951b55104?w=700&h=300&fit=crop&auto=format&q=80',
  hormone:    'https://images.unsplash.com/photo-1576671081837-49000212a74a?w=700&h=300&fit=crop&auto=format&q=80',
  mobile:     'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&h=300&fit=crop&auto=format&q=80',
  athletic:   'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&h=300&fit=crop&auto=format&q=80',
  aesthetic:  'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=700&h=300&fit=crop&auto=format&q=80',
  functional: 'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=700&h=300&fit=crop&auto=format&q=80',
  immune:     'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=700&h=300&fit=crop&auto=format&q=80',
  general:    'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=700&h=300&fit=crop&auto=format&q=80',
};

const FALLBACK_IMAGES = Object.values(SPECIALTY_IMAGES);

function getImage(specialty, id) {
  const s = (specialty || '').toLowerCase();
  if (s.includes('nad')) return SPECIALTY_IMAGES.nad;
  if (s.includes('myers') || s.includes('cocktail')) return SPECIALTY_IMAGES.myers;
  if (s.includes('hormone') || s.includes('hrt') || s.includes('peptide')) return SPECIALTY_IMAGES.hormone;
  if (s.includes('mobile')) return SPECIALTY_IMAGES.mobile;
  if (s.includes('athletic') || s.includes('recovery') || s.includes('performance') || s.includes('sport')) return SPECIALTY_IMAGES.athletic;
  if (s.includes('aesthetic') || s.includes('anti-aging') || s.includes('glow') || s.includes('esthetic')) return SPECIALTY_IMAGES.aesthetic;
  if (s.includes('functional') || s.includes('integrative') || s.includes('internal medicine')) return SPECIALTY_IMAGES.functional;
  if (s.includes('immune') || s.includes('vitamin c')) return SPECIALTY_IMAGES.immune;
  if (s.includes('hydration') || s.includes('hydrate')) return SPECIALTY_IMAGES.hydration;
  return FALLBACK_IMAGES[id % FALLBACK_IMAGES.length];
}

function StarIcon({ filled }) {
  return (
    <svg width="13" height="13" viewBox="0 0 20 20" fill={filled ? '#D97706' : '#E5E0D8'} aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  );
}

function StarRating({ rating, count }) {
  const rounded = Math.round(rating);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
      <div style={{ display: 'flex', gap: '2px' }}>
        {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} filled={i <= rounded} />)}
      </div>
      <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#1C1917' }}>{rating}</span>
      <span style={{ fontSize: '0.75rem', color: '#A8A29E' }}>({count.toLocaleString()})</span>
    </div>
  );
}

export default function ProviderCard({ provider, rank }) {
  const {
    id, name, address, description, specialty, priceRange,
    rating, reviewCount, website, sponsored, sponsorTier,
  } = provider;

  const imageUrl = getImage(specialty, id);
  const isSponsored = !!sponsored;
  const isFeatured = sponsorTier === 'platinum' || sponsorTier === 'gold';

  return (
    <div
      className="provider-card"
      style={{
        borderRadius: '14px',
        overflow: 'hidden',
        background: '#fff',
        border: isSponsored ? '1.5px solid #2A7A52' : '1px solid #E7E3DC',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── Image header ── */}
      <div style={{ position: 'relative', height: '200px', flexShrink: 0 }}>
        {/* Photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={`${name} — IV therapy`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          loading="lazy"
        />

        {/* Dark gradient overlay — stronger at bottom */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(10,30,20,0.72) 100%)',
        }} />

        {/* Sponsored top accent */}
        {isSponsored && (
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
            background: 'linear-gradient(90deg, #1A3829, #2A7A52, #6ECA9B)',
          }} />
        )}

        {/* Price badge — top right */}
        <div style={{
          position: 'absolute', top: '12px', right: '12px',
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(4px)',
          color: '#1A3829',
          fontWeight: 700,
          fontSize: '0.72rem',
          padding: '4px 10px',
          borderRadius: '999px',
        }}>
          {priceRange}
        </div>

        {/* Featured badge — top left */}
        {isFeatured && (
          <div style={{
            position: 'absolute', top: '12px', left: '12px',
            background: 'linear-gradient(135deg, #92400E, #D97706)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '0.67rem',
            padding: '4px 10px',
            borderRadius: '999px',
            letterSpacing: '0.02em',
          }}>
            ✦ Featured
          </div>
        )}

        {/* Name + rank overlaid at bottom of image */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '0.85rem 1rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              background: 'rgba(255,255,255,0.18)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '6px',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.68rem',
              padding: '2px 7px',
              backdropFilter: 'blur(4px)',
              flexShrink: 0,
            }}>
              #{rank}
            </span>
            <h3 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: '1.05rem',
              fontWeight: 400,
              color: '#fff',
              margin: 0,
              lineHeight: 1.2,
              textShadow: '0 1px 4px rgba(0,0,0,0.4)',
            }}>
              {name}
            </h3>
          </div>
        </div>
      </div>

      {/* ── Info section ── */}
      <div style={{ padding: '1rem 1.1rem 1.1rem', display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        <StarRating rating={rating} count={reviewCount} />

        <p style={{
          fontSize: '0.82rem',
          color: '#78716C',
          lineHeight: 1.6,
          margin: 0,
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {description}
        </p>

        {/* Footer */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '8px',
          borderTop: '1px solid #F0EDE8',
          gap: '8px',
          flexWrap: 'wrap',
        }}>
          <span style={{
            fontSize: '0.71rem',
            fontWeight: 600,
            color: '#1A3829',
            background: '#D6EDE3',
            padding: '3px 10px',
            borderRadius: '999px',
            whiteSpace: 'nowrap',
          }}>
            {specialty.split(',')[0].trim()}
          </span>

          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.76rem',
                fontWeight: 700,
                color: '#fff',
                background: '#1A3829',
                padding: '6px 14px',
                borderRadius: '8px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              Visit Site →
            </a>
          )}
        </div>

        {address && address !== `${name.split(' ')[0]}, GA` && (
          <div style={{ fontSize: '0.72rem', color: '#A8A29E', marginTop: '-2px' }}>{address}</div>
        )}
      </div>
    </div>
  );
}
