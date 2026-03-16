import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cities, getCityBySlug, getProvidersByCity, getCityFaqs, ivTypes } from '@/data/sites';
import ProviderCard from '@/components/ProviderCard';
import AdZone from '@/components/AdZone';
import FaqAccordion from '@/components/FaqAccordion';

// ─────────────────────────────────────────────────────────────
// STATIC GENERATION — builds all city pages at deploy time
// Add a new city to data/sites.js → redeploy → new page live
// ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return cities.map(c => ({ city: c.slug }));
}

export async function generateMetadata({ params }) {
  const city = getCityBySlug(params.city);
  if (!city) return {};

  const providerCount = getProvidersByCity(city.slug).length;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: getCityFaqs(city.name).map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ivranker.com' },
      { '@type': 'ListItem', position: 2, name: 'Georgia', item: 'https://ivranker.com/georgia' },
      { '@type': 'ListItem', position: 3, name: `${city.name} IV Therapy`, item: `https://ivranker.com/${city.slug}` },
    ],
  };

  return {
    title: city.metaTitle || `Best IV Therapy in ${city.name}, ${city.state} (2026) | IV Ranker`,
    description: city.metaDescription || `Compare ${providerCount}+ IV therapy providers in ${city.name}, ${city.state}. Prices, reviews, and treatments.`,
    alternates: { canonical: `https://ivranker.com/${city.slug}` },
    openGraph: {
      title: `Best IV Therapy in ${city.name}, ${city.state} | IV Ranker`,
      description: `Compare ${providerCount}+ IV therapy providers in ${city.name}. Reviews, prices, treatments.`,
      url: `https://ivranker.com/${city.slug}`,
    },
    other: {
      'script:ld+json:faq': JSON.stringify(faqSchema),
      'script:ld+json:breadcrumb': JSON.stringify(breadcrumbSchema),
    },
  };
}

// Section heading helper — replaces the mono eyebrow label pattern
function SectionHead({ label, title }) {
  return (
    <div style={{ marginBottom: '1.75rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '6px' }}>
        <span style={{ display: 'inline-block', width: '18px', height: '2px', background: '#2A7A52', borderRadius: '2px' }} />
        <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#2A7A52' }}>
          {label}
        </span>
      </div>
      <h2 style={{
        fontFamily: "'DM Serif Display', Georgia, serif",
        fontSize: 'clamp(1.4rem, 2.8vw, 2rem)',
        color: '#1A3829',
        fontWeight: 400,
        letterSpacing: '-0.01em',
        margin: 0,
      }}>
        {title}
      </h2>
    </div>
  );
}

export default function CityPage({ params }) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  const cityProviders = getProvidersByCity(city.slug);
  const cityFaqs = getCityFaqs(city.name);
  const nearbyCities = city.nearbyAreas
    .map(slug => cities.find(c => c.slug === slug))
    .filter(Boolean);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: cityFaqs.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://ivranker.com' },
              { '@type': 'ListItem', position: 2, name: 'Georgia', item: 'https://ivranker.com/georgia' },
              { '@type': 'ListItem', position: 3, name: `${city.name} IV Therapy`, item: `https://ivranker.com/${city.slug}` },
            ],
          }),
        }}
      />

      {/* ── HERO ── */}
      <header
        style={{
          background: 'linear-gradient(135deg, #1A3829 0%, #1F4A34 55%, #2A5A3F 100%)',
          position: 'relative',
          overflow: 'hidden',
          padding: '4rem 1.5rem 3.5rem',
          color: '#fff',
        }}
      >
        {/* Amber glow */}
        <div style={{
          position: 'absolute', bottom: '-60px', right: '10%',
          width: '400px', height: '300px',
          background: 'radial-gradient(ellipse, rgba(180,83,9,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          {/* Breadcrumb */}
          <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1.25rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 6px', opacity: 0.3 }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>Georgia</span>
            <span style={{ margin: '0 6px', opacity: 0.3 }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{city.name}</span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: 'clamp(2rem, 5vw, 3.2rem)',
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
            color: '#fff',
          }}>
            Best IV Therapy in{' '}
            <span style={{ color: '#6ECA9B', fontStyle: 'italic' }}>{city.name}</span>
            {', '}{city.state}
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', maxWidth: '560px', marginBottom: '2rem', lineHeight: 1.65 }}>
            Compare {cityProviders.length}+ vetted IV therapy providers in {city.name}. Real reviews, honest pricing.
          </p>

          {/* Stats — clean, no mono font */}
          <div style={{ display: 'flex', gap: '0', flexWrap: 'wrap' }}>
            {[
              { num: cityProviders.length + '+', label: 'Providers' },
              { num: '6',                         label: 'Treatments' },
              { num: '$100+',                     label: 'Starting price' },
              { num: city.zipCodes.length,        label: 'ZIP codes' },
            ].map(({ num, label }, i) => (
              <div key={label} style={{
                paddingLeft: i === 0 ? 0 : '1.75rem',
                marginLeft: i === 0 ? 0 : '1.75rem',
                borderLeft: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.12)',
              }}>
                <div style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: '1.75rem',
                  color: '#6ECA9B',
                  lineHeight: 1,
                  marginBottom: '4px',
                }}>
                  {num}
                </div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: 500, letterSpacing: '0.03em' }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <AdZone slot="leaderboardTop" format="leaderboard" />

        {/* ── PROVIDERS ── */}
        <section className="mt-12" id="providers">
          <SectionHead label="Providers" title={`IV Therapy Clinics in ${city.name}`} />
          <p style={{ color: '#78716C', maxWidth: '660px', marginBottom: '2rem', fontSize: '0.92rem', lineHeight: 1.65, marginTop: '-0.75rem' }}>
            Verified providers ranked by rating, services, and patient reviews. Sponsored listings appear first.
          </p>
          <div className="flex flex-col gap-4">
            {cityProviders.map((p, i) => (
              <div key={p.id}>
                <ProviderCard provider={p} rank={i + 1} />
                {i === 2 && <div className="mt-4"><AdZone slot="midListing" format="in-article" /></div>}
              </div>
            ))}
          </div>
        </section>

        <div className="my-12"><AdZone slot="midPage" format="horizontal" /></div>

        {/* ── IV TYPES ── */}
        <section>
          <SectionHead label="Treatments" title={`IV Therapy Options in ${city.name}`} />
          <p style={{ color: '#78716C', maxWidth: '660px', marginBottom: '2rem', fontSize: '0.92rem', lineHeight: 1.65, marginTop: '-0.75rem' }}>
            Popular treatments available from {city.name} providers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ivTypes.map(t => (
              <div key={t.slug} style={{
                background: '#fff',
                border: '1px solid #E7E3DC',
                borderRadius: '12px',
                padding: '1.4rem 1.5rem',
                transition: 'box-shadow 0.2s, transform 0.15s',
              }}
                className="hover:shadow-md"
              >
                <span style={{ fontSize: '1.8rem', display: 'block', marginBottom: '10px' }}>{t.icon}</span>
                <div style={{ fontWeight: 700, color: '#1A3829', marginBottom: '6px', fontSize: '0.95rem' }}>{t.name}</div>
                <div style={{ fontSize: '0.82rem', color: '#78716C', lineHeight: 1.6 }}>{t.description.slice(0, 160)}…</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ABOUT + SIDEBAR ── */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 mt-14">
          <div>
            <SectionHead label="Local Guide" title={`IV Therapy in ${city.name}: What You Need to Know`} />
            <p style={{ color: '#44403C', lineHeight: 1.75, marginBottom: '1rem', fontSize: '0.93rem' }}>{city.description}</p>
            <p style={{ color: '#44403C', lineHeight: 1.75, marginBottom: '1rem', fontSize: '0.93rem' }}>{city.whyIV}</p>
            <p style={{ color: '#44403C', lineHeight: 1.75, fontSize: '0.93rem' }}>
              IV therapy in {city.name} is available through both brick-and-mortar clinics and mobile services.
              Pricing starts around $100 for basic hydration and ranges to $500+ for premium NAD+ treatments.
              Most sessions take 30–60 minutes and are administered by licensed nurses under physician supervision.
            </p>
          </div>

          <div>
            {/* Quick facts card */}
            <div style={{
              background: '#fff',
              border: '1px solid #E7E3DC',
              borderRadius: '14px',
              padding: '1.5rem',
              marginBottom: '1.25rem',
            }}>
              <div style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: '1rem',
                color: '#1A3829',
                marginBottom: '1rem',
                fontWeight: 400,
              }}>
                {city.name} at a Glance
              </div>
              {[
                ['City', `${city.name}, ${city.state}`],
                ['County', city.county],
                ['Population', city.population],
                ['Known As', city.tagline],
                ['ZIP Codes', city.zipCodes.join(', ')],
                ['Avg. IV Price', '$100 – $350'],
              ].map(([label, val]) => (
                <div key={label} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  padding: '9px 0',
                  borderBottom: '1px solid #F0EDE8',
                  fontSize: '0.84rem',
                  gap: '12px',
                }}>
                  <span style={{ color: '#78716C', flexShrink: 0 }}>{label}</span>
                  <span style={{ fontWeight: 700, color: '#1C1917', textAlign: 'right' }}>{val}</span>
                </div>
              ))}
            </div>
            <AdZone slot="sidebar" format="sidebar" />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mt-14">
          <SectionHead
            label="FAQ"
            title={`Questions About IV Therapy in ${city.name}`}
          />
          <p style={{ color: '#78716C', maxWidth: '660px', marginBottom: '2rem', fontSize: '0.92rem', lineHeight: 1.65, marginTop: '-0.75rem' }}>
            Everything you need to know before booking your session.
          </p>
          <FaqAccordion faqs={cityFaqs} />
        </section>

        <div className="mt-12"><AdZone slot="bottomLeaderboard" format="leaderboard" /></div>

        {/* ── NEARBY CITIES ── */}
        <section className="mt-12">
          <h3 style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: '1.2rem',
            color: '#1A3829',
            fontWeight: 400,
            marginBottom: '1rem',
          }}>
            IV Therapy in Other North Atlanta Cities
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {nearbyCities.map(c => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="nearby-btn no-underline"
                style={{
                  padding: '8px 18px',
                  background: '#fff',
                  border: '1px solid #E7E3DC',
                  borderRadius: '9px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: '#1A3829',
                }}
              >
                {c.name} →
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ── CTA BANNER ── */}
      <section style={{
        background: 'linear-gradient(135deg, #1A3829 0%, #2A5A3F 100%)',
        padding: '4rem 1.5rem',
        textAlign: 'center',
        marginTop: '3rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: '-40px', left: '50%', transform: 'translateX(-50%)',
          width: '500px', height: '200px',
          background: 'radial-gradient(ellipse, rgba(180,83,9,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <h2 style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: 'clamp(1.4rem, 3vw, 2rem)',
          color: '#fff',
          fontWeight: 400,
          marginBottom: '0.75rem',
        }}>
          Own an IV Therapy Clinic in {city.name}?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '0 auto 2rem', lineHeight: 1.65, fontSize: '0.95rem' }}>
          Get listed on IV Ranker and reach thousands of people searching for IV therapy in {city.name}.
        </p>
        <Link href="/list-your-business" style={{
          display: 'inline-block',
          background: '#fff',
          color: '#1A3829',
          padding: '12px 32px',
          borderRadius: '10px',
          fontWeight: 700,
          textDecoration: 'none',
          fontSize: '0.9rem',
        }}>
          List Your Business — Free
        </Link>
      </section>
    </>
  );
}
