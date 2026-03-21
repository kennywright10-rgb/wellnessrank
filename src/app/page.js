import Link from 'next/link';
import { cities, providers } from '@/data/sites';
import AdZone from '@/components/AdZone';

export const metadata = {
  title: 'IV Ranker — Find the Best IV Therapy Near You | North Atlanta',
  description: 'Compare IV therapy providers across Alpharetta, Roswell, Johns Creek, Sandy Springs & 8 more North Atlanta cities. Reviews, prices, and treatment options.',
  alternates: { canonical: 'https://ivranker.com' },
};

// Subtle geometric decor for hero
function HeroDecor() {
  return (
    <svg
      viewBox="0 0 320 320" fill="none" aria-hidden="true"
      style={{ position: 'absolute', right: '-20px', top: '-30px', width: '340px', height: '340px', opacity: 0.1, pointerEvents: 'none' }}
    >
      <circle cx="160" cy="160" r="140" stroke="white" strokeWidth="1"/>
      <circle cx="160" cy="160" r="100" stroke="white" strokeWidth="0.5"/>
      <path d="M160 20 C160 20 130 80 130 160 C130 240 160 300 160 300" stroke="white" strokeWidth="1" strokeDasharray="4 6"/>
      <path d="M20 160 C20 160 80 130 160 130 C240 130 300 160 300 160" stroke="white" strokeWidth="1" strokeDasharray="4 6"/>
      <path d="M57 57 C57 57 100 110 160 160 C220 210 263 263 263 263" stroke="white" strokeWidth="0.5" strokeDasharray="3 8"/>
      <path d="M263 57 C263 57 210 110 160 160 C110 210 57 263 57 263" stroke="white" strokeWidth="0.5" strokeDasharray="3 8"/>
      <circle cx="160" cy="160" r="5" fill="white" fillOpacity="0.4"/>
      <circle cx="160" cy="60" r="3" fill="white" fillOpacity="0.3"/>
      <circle cx="260" cy="160" r="3" fill="white" fillOpacity="0.3"/>
      <circle cx="160" cy="260" r="3" fill="white" fillOpacity="0.3"/>
      <circle cx="60" cy="160" r="3" fill="white" fillOpacity="0.3"/>
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <header
        style={{ position: 'relative', overflow: 'hidden' }}
        className="py-28 px-6 text-white text-center"
      >
        {/* Background photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1800&h=700&fit=crop&auto=format&q=75"
          alt=""
          aria-hidden="true"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Forest overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(26,56,41,0.93) 0%, rgba(31,74,52,0.88) 55%, rgba(42,90,63,0.84) 100%)',
        }} />
        {/* Warm amber radial glow at bottom */}
        <div style={{
          position: 'absolute', bottom: '-80px', left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '320px',
          background: 'radial-gradient(ellipse, rgba(180,83,9,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <HeroDecor />

        <div style={{ position: 'relative' }}>
          {/* Badge — not an all-caps mono eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span style={{
              background: 'rgba(255,255,255,0.09)',
              border: '1px solid rgba(255,255,255,0.18)',
              borderRadius: '999px',
              padding: '5px 16px',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'rgba(255,255,255,0.75)',
              letterSpacing: '0.02em',
            }}>
              North Atlanta&apos;s IV Therapy Directory
            </span>
          </div>

          <h1 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(2.6rem, 6vw, 4rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
            color: '#fff',
          }}>
            Find the Best{' '}
            <span style={{ color: '#6ECA9B', fontStyle: 'italic' }}>IV Therapy</span>
            <br />Near You
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.58)', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto 2.75rem', lineHeight: 1.7 }}>
            Compare {providers.length}+ verified providers across {cities.length} North Atlanta cities.
            Real reviews, transparent pricing.
          </p>

          {/* City quick links */}
          <div className="flex gap-2 justify-center flex-wrap">
            {cities.slice(0, 6).map(c => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="no-underline"
                style={{
                  padding: '8px 18px',
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.13)',
                  borderRadius: '9px',
                  color: 'rgba(255,255,255,0.82)',
                  fontSize: '0.84rem',
                  fontWeight: 600,
                  backdropFilter: 'blur(4px)',
                  transition: 'background 0.2s',
                }}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <AdZone slot="homeLeaderboard" format="leaderboard" />

        {/* ── TRUST BAR ── */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { num: `${providers.length}+`, label: 'Verified Providers' },
            { num: `${cities.length}`, label: 'Cities Covered' },
            { num: '6', label: 'Treatment Types' },
            { num: 'Free', label: 'Always Free to Use' },
          ].map(({ num, label }) => (
            <div
              key={label}
              className="text-center py-5 px-4 rounded-xl"
              style={{ background: '#fff', border: '1px solid #E7E3DC' }}
            >
              <div style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: '1.8rem',
                color: '#1A3829',
                lineHeight: 1,
                marginBottom: '5px',
              }}>
                {num}
              </div>
              <div style={{ fontSize: '0.76rem', color: '#78716C', fontWeight: 500 }}>{label}</div>
            </div>
          ))}
        </div>

        {/* ── CITY GRID ── */}
        <section className="mt-14">
          <div className="mb-7">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span style={{ display: 'inline-block', width: '20px', height: '2px', background: '#2A7A52', borderRadius: '2px' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#2A7A52' }}>
                Browse by City
              </span>
            </div>
            <h2 style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              color: '#1A3829',
              fontWeight: 400,
              letterSpacing: '-0.01em',
              margin: 0,
            }}>
              IV Therapy Across North Atlanta
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((c, idx) => {
              const count = providers.filter(p => p.city === c.slug).length;
              // Rotate through a few warm wellness images for city cards
              const cityImages = [
                'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=220&fit=crop&auto=format&q=75',
                'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=600&h=220&fit=crop&auto=format&q=75',
                'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=220&fit=crop&auto=format&q=75',
                'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=220&fit=crop&auto=format&q=75',
                'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=220&fit=crop&auto=format&q=75',
                'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=220&fit=crop&auto=format&q=75',
              ];
              const img = cityImages[idx % cityImages.length];
              return (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="no-underline block rounded-xl overflow-hidden"
                  style={{ border: '1px solid #E7E3DC', transition: 'transform 0.15s, box-shadow 0.2s' }}
                >
                  {/* Image top */}
                  <div style={{ position: 'relative', height: '140px' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt=""
                      aria-hidden="true"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                      loading="lazy"
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to bottom, rgba(26,56,41,0.1), rgba(26,56,41,0.55))',
                    }} />
                    <div style={{
                      position: 'absolute', bottom: '10px', left: '12px', right: '12px',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                    }}>
                      <span style={{
                        fontFamily: "'DM Serif Display', Georgia, serif",
                        color: '#fff', fontSize: '1.05rem', fontWeight: 400,
                        textShadow: '0 1px 3px rgba(0,0,0,0.4)',
                      }}>
                        {c.name}
                      </span>
                      <span style={{
                        fontSize: '0.7rem', fontWeight: 700,
                        color: count > 0 ? '#1A3829' : '#78716C',
                        background: count > 0 ? 'rgba(214,237,227,0.95)' : 'rgba(245,241,235,0.9)',
                        padding: '3px 9px', borderRadius: '999px',
                        backdropFilter: 'blur(4px)',
                      }}>
                        {count} {count === 1 ? 'listing' : 'listings'}
                      </span>
                    </div>
                  </div>
                  {/* Text below */}
                  <div style={{ padding: '0.85rem 1rem', background: '#fff' }}>
                    <div style={{ fontSize: '0.72rem', color: '#A8A29E', marginBottom: '3px' }}>
                      {c.county}
                    </div>
                    <p style={{ fontSize: '0.8rem', color: '#78716C', lineHeight: 1.5, margin: 0 }}>{c.tagline}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <div className="mt-12">
          <AdZone slot="homeBottom" format="horizontal" />
        </div>
      </div>
    </>
  );
}
