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
        style={{
          background: 'linear-gradient(135deg, #1A3829 0%, #1F4A34 55%, #2A5A3F 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="py-28 px-6 text-white text-center"
      >
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
            {cities.map(c => {
              const count = providers.filter(p => p.city === c.slug).length;
              return (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="city-card no-underline block rounded-xl p-6"
                  style={{ background: '#fff', border: '1px solid #E7E3DC' }}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 style={{ fontSize: '0.97rem', fontWeight: 700, color: '#1C1917', marginBottom: '3px', margin: 0 }}>
                        {c.name}, {c.state}
                      </h3>
                      <div style={{ fontSize: '0.73rem', color: '#A8A29E', marginTop: '3px' }}>{c.county} · Pop. {c.population}</div>
                    </div>
                    <span style={{
                      fontWeight: 700,
                      fontSize: '0.77rem',
                      color: count > 0 ? '#1A3829' : '#A8A29E',
                      background: count > 0 ? '#D6EDE3' : '#F5F1EB',
                      padding: '3px 9px',
                      borderRadius: '6px',
                      flexShrink: 0,
                      marginLeft: '10px',
                    }}>
                      {count} {count === 1 ? 'listing' : 'listings'}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#78716C', lineHeight: 1.55, margin: 0 }}>{c.tagline}</p>
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
