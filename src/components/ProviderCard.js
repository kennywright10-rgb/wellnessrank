// ─────────────────────────────────────────────────────────────
// ProviderCard — premium wellness redesign
// SVG stars, warm forest/gold palette, clean visual hierarchy
// ─────────────────────────────────────────────────────────────

function StarIcon({ filled }) {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill={filled ? '#D97706' : '#E5E0D8'} aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
    </svg>
  );
}

function StarRating({ rating, count }) {
  const rounded = Math.round(rating);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ display: 'flex', gap: '2px' }}>
        {[1, 2, 3, 4, 5].map(i => <StarIcon key={i} filled={i <= rounded} />)}
      </div>
      <span style={{ fontWeight: 700, fontSize: '0.88rem', color: '#1C1917' }}>{rating}</span>
      <span style={{ fontSize: '0.76rem', color: '#A8A29E' }}>({count.toLocaleString()} reviews)</span>
    </div>
  );
}

function SponsoredBadge({ tier }) {
  const configs = {
    platinum: {
      bg: 'linear-gradient(135deg, #1A3829, #2A7A52)',
      color: '#fff',
      border: 'none',
      label: '✦ Featured Partner',
    },
    gold: {
      bg: 'linear-gradient(135deg, #92400E, #D97706)',
      color: '#fff',
      border: 'none',
      label: '✦ Featured',
    },
    silver: {
      bg: '#F5F1EB',
      color: '#78716C',
      border: '1px solid #E7E3DC',
      label: 'Promoted',
    },
  };
  const c = configs[tier] || configs.silver;
  return (
    <span style={{
      background: c.bg,
      color: c.color,
      border: c.border,
      padding: '3px 11px',
      borderRadius: '999px',
      fontSize: '0.69rem',
      fontWeight: 700,
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap',
    }}>
      {c.label}
    </span>
  );
}

export default function ProviderCard({ provider, rank }) {
  const {
    name, address, description, specialty, priceRange,
    rating, reviewCount, website, sponsored, sponsorTier,
  } = provider;

  const isSponsored = !!sponsored;

  return (
    <div
      className="provider-card rounded-xl"
      style={{
        background: isSponsored
          ? 'linear-gradient(150deg, #ffffff 60%, #f3faf7 100%)'
          : '#ffffff',
        border: isSponsored
          ? '1.5px solid #2A7A52'
          : '1px solid #E7E3DC',
        padding: isSponsored ? '1.625rem 1.75rem 1.5rem' : '1.5rem 1.75rem',
        position: 'relative',
      }}
    >
      {/* Sponsored gradient top bar */}
      {isSponsored && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, #1A3829 0%, #2A7A52 50%, #6ECA9B 100%)',
          borderRadius: '12px 12px 0 0',
        }} />
      )}

      {/* ── Header row ── */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '10px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          {/* Rank */}
          <span style={{
            fontWeight: 700,
            fontSize: '0.72rem',
            width: '28px',
            height: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '7px',
            flexShrink: 0,
            background: isSponsored ? '#D6EDE3' : '#F5F1EB',
            color: isSponsored ? '#1A3829' : '#A8A29E',
          }}>
            #{rank}
          </span>

          {/* Name */}
          <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#1C1917', margin: 0 }}>{name}</h3>

          {/* Badge */}
          {isSponsored && <SponsoredBadge tier={sponsorTier} />}
        </div>

        {/* Price */}
        <span style={{
          fontWeight: 700,
          fontSize: '0.76rem',
          color: '#1A3829',
          background: '#D6EDE3',
          padding: '4px 10px',
          borderRadius: '6px',
          flexShrink: 0,
        }}>
          {priceRange}
        </span>
      </div>

      {/* ── Stars ── */}
      <StarRating rating={rating} count={reviewCount} />

      {/* ── Description ── */}
      <p style={{
        fontSize: '0.86rem',
        color: '#78716C',
        lineHeight: 1.65,
        margin: '12px 0',
      }}>
        {description}
      </p>

      {/* ── Footer: address + tags + CTA ── */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '8px',
        paddingTop: '6px',
        borderTop: '1px solid #F0EDE8',
      }}>
        <span style={{ fontSize: '0.76rem', color: '#A8A29E' }}>{address}</span>

        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{
            fontSize: '0.74rem',
            fontWeight: 600,
            color: '#1A3829',
            background: '#D6EDE3',
            padding: '4px 12px',
            borderRadius: '999px',
          }}>
            {specialty.split(',')[0].trim()}
          </span>

          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#fff',
                background: '#1A3829',
                padding: '6px 14px',
                borderRadius: '8px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              Visit Site →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
