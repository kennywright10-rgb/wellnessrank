import Link from 'next/link';
import { notFound } from 'next/navigation';
import { cities, getCityBySlug, getProvidersByCity, getCityFaqs, ivTypes } from '@/data/sites';
import ProviderCard from '@/components/ProviderCard';
import AdZone from '@/components/AdZone';
import FaqAccordion from '@/components/FaqAccordion';

// ═══════════════════════════════════════════════════════════
// STATIC GENERATION — builds all city pages at deploy time
// Add a new city to data/sites.js → redeploy → new page live
// ═══════════════════════════════════════════════════════════
export async function generateStaticParams() {
  return cities.map(c => ({ city: c.slug }));
}

export async function generateMetadata({ params }) {
  const city = getCityBySlug(params.city);
  if (!city) return {};

  const providerCount = getProvidersByCity(city.slug).length;

  // FAQPage schema
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: getCityFaqs(city.name).map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  // BreadcrumbList schema
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
      <header className="bg-gradient-to-br from-iv-navy via-slate-800 to-iv-teal-dark py-20 px-6 text-white relative overflow-hidden">
        <div className="absolute top-[-50%] right-[-15%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(13,148,136,0.18)_0%,transparent_70%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative">
          <div className="text-sm text-white/45 mb-4">
            <Link href="/" className="text-white/60 hover:text-white/90 no-underline">Home</Link>
            {' → '}
            <span className="text-white/60">Georgia</span>
            {' → '}{city.name}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 tracking-tight">
            Best IV Therapy in <span className="text-teal-300">{city.name}</span>, {city.state}
          </h1>
          <p className="text-lg text-white/65 max-w-[600px] mb-7 leading-relaxed">
            Compare {cityProviders.length}+ vetted IV therapy providers in {city.name}. Find the right treatment at the right price.
          </p>
          <div className="flex gap-9 flex-wrap">
            {[
              [cityProviders.length + '+', 'Providers'],
              ['6', 'Treatments'],
              ['$100+', 'Starting'],
              [city.zipCodes.length, 'ZIP Codes'],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-mono text-2xl font-bold text-teal-300">{num}</div>
                <div className="text-[0.72rem] text-white/40 uppercase tracking-wider">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Ad: Leaderboard Top */}
        <AdZone slot="leaderboardTop" format="leaderboard" />

        {/* ── PROVIDERS ── */}
        <section className="mt-12" id="providers">
          <div className="font-mono text-[0.72rem] text-iv-teal uppercase tracking-widest mb-1.5">PROVIDERS</div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-iv-navy mb-2.5 tracking-tight">IV Therapy Clinics in {city.name}</h2>
          <p className="text-iv-gray max-w-[680px] mb-8">
            Verified providers ranked by rating, services, and patient reviews. Sponsored listings support IV Ranker and appear first.
          </p>
          <div className="flex flex-col gap-4">
            {cityProviders.map((p, i) => (
              <div key={p.id}>
                <ProviderCard provider={p} rank={i + 1} />
                {/* Ad after 3rd listing */}
                {i === 2 && <div className="mt-4"><AdZone slot="midListing" format="in-article" /></div>}
              </div>
            ))}
          </div>
        </section>

        {/* Ad: Mid-page */}
        <div className="my-12"><AdZone slot="midPage" format="horizontal" /></div>

        {/* ── IV TYPES ── */}
        <section>
          <div className="font-mono text-[0.72rem] text-iv-teal uppercase tracking-widest mb-1.5">TREATMENTS</div>
          <h2 className="text-2xl font-extrabold text-iv-navy mb-2.5">IV Therapy Options in {city.name}</h2>
          <p className="text-iv-gray max-w-[680px] mb-8">Popular treatments available from {city.name} providers.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ivTypes.map(t => (
              <div key={t.slug} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                <span className="text-3xl block mb-2">{t.icon}</span>
                <div className="font-bold text-iv-navy mb-1.5">{t.name}</div>
                <div className="text-sm text-iv-gray leading-relaxed">{t.description.slice(0, 160)}...</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ABOUT + SIDEBAR ── */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 mt-14">
          <div>
            <div className="font-mono text-[0.72rem] text-iv-teal uppercase tracking-widest mb-1.5">LOCAL GUIDE</div>
            <h2 className="text-xl font-extrabold text-iv-navy mb-4">IV Therapy in {city.name}: What You Need to Know</h2>
            <p className="text-iv-slate leading-relaxed mb-3.5">{city.description}</p>
            <p className="text-iv-slate leading-relaxed mb-3.5">{city.whyIV}</p>
            <p className="text-iv-slate leading-relaxed">
              IV therapy in {city.name} is available through both brick-and-mortar clinics and mobile services.
              Pricing starts around $100 for basic hydration and ranges to $500+ for premium NAD+ treatments.
              Most sessions take 30-60 minutes and are administered by licensed nurses under physician supervision.
            </p>
          </div>
          <div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 mb-5">
              {[
                ['City', `${city.name}, ${city.state}`],
                ['County', city.county],
                ['Population', city.population],
                ['Known As', city.tagline],
                ['ZIP Codes', city.zipCodes.join(', ')],
                ['Avg. Price', '$100 – $350'],
              ].map(([label, val]) => (
                <div key={label} className="flex justify-between py-2.5 border-b border-slate-200 last:border-0 text-sm">
                  <span className="text-iv-gray">{label}</span>
                  <span className="font-bold text-iv-navy text-right">{val}</span>
                </div>
              ))}
            </div>
            <AdZone slot="sidebar" format="sidebar" />
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="mt-14">
          <div className="font-mono text-[0.72rem] text-iv-teal uppercase tracking-widest mb-1.5">FAQ</div>
          <h2 className="text-xl font-extrabold text-iv-navy mb-2.5">Frequently Asked Questions About IV Therapy in {city.name}</h2>
          <p className="text-iv-gray max-w-[680px] mb-7">Everything you need to know before booking your session.</p>
          <FaqAccordion faqs={cityFaqs} />
        </section>

        {/* Ad: Bottom */}
        <div className="mt-12"><AdZone slot="bottomLeaderboard" format="leaderboard" /></div>

        {/* ── NEARBY CITIES ── */}
        <section className="mt-12">
          <div className="font-mono text-[0.72rem] text-iv-teal uppercase tracking-widest mb-1.5">EXPLORE NEARBY</div>
          <h2 className="text-lg font-extrabold text-iv-navy mb-4">IV Therapy in Other North Atlanta Cities</h2>
          <div className="flex flex-wrap gap-2.5">
            {nearbyCities.map(c => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="nearby-btn px-5 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-iv-navy no-underline"
              >
                {c.name} →
              </Link>
            ))}
          </div>
        </section>
      </div>

      {/* ── CTA BANNER ── */}
      <section className="bg-gradient-to-r from-iv-teal to-iv-teal-dark py-12 px-6 text-center text-white mt-12">
        <h2 className="text-2xl font-extrabold mb-2.5">Own an IV Therapy Clinic in {city.name}?</h2>
        <p className="opacity-85 max-w-[500px] mx-auto mb-6">Get listed on IV Ranker and reach thousands searching for IV therapy.</p>
        <Link href="/list-your-business" className="inline-block bg-white text-iv-teal-dark px-8 py-3 rounded-xl font-bold no-underline hover:shadow-lg transition-shadow">
          List Your Business — Free
        </Link>
      </section>
    </>
  );
}
