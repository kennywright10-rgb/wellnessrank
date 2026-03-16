import Link from 'next/link';
import { faqCategories, getAllFaqQuestions, getTotalQuestionCount } from '@/data/faq';
import AdZone from '@/components/AdZone';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata = {
  title: 'IV Therapy FAQ — Answers to 50+ Common Questions | IV Ranker',
  description: 'Get answers to 50+ frequently asked questions about IV therapy — costs, safety, treatments, side effects, and finding providers in North Atlanta.',
  alternates: { canonical: 'https://ivranker.com/faq' },
};

export default function FaqPage() {
  const totalQuestions = getTotalQuestionCount();
  const allQuestions = getAllFaqQuestions();

  // FAQPage schema for all questions
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allQuestions.map(q => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: { '@type': 'Answer', text: q.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* HERO */}
      <header style={{ background: 'linear-gradient(135deg, #1A3829 0%, #1F4A34 55%, #2A5A3F 100%)', padding: '3.5rem 1.5rem', color: '#fff' }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 6px', opacity: 0.3 }}>›</span>FAQ
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '8px' }}>
            <span style={{ display: 'inline-block', width: '16px', height: '2px', background: '#6ECA9B', borderRadius: '2px' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6ECA9B' }}>
              Frequently Asked Questions
            </span>
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: '0.75rem', color: '#fff' }}>
            IV Therapy FAQ
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.58)', maxWidth: '520px', lineHeight: 1.65, fontSize: '0.95rem' }}>
            Answers to {totalQuestions}+ of the most common questions about IV therapy — from costs and safety to treatments and finding providers in North Atlanta.
          </p>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* CATEGORY NAV */}
        <div className="flex flex-wrap gap-3 mb-10">
          {faqCategories.map(cat => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-iv-navy no-underline hover:border-iv-teal hover:text-iv-teal transition-colors"
            >
              <span>{cat.icon}</span>
              {cat.name}
              <span className="text-xs text-slate-400 font-mono">({cat.questions.length})</span>
            </a>
          ))}
        </div>

        <AdZone slot="leaderboardTop" format="leaderboard" className="mb-10" />

        {/* FAQ CATEGORIES */}
        {faqCategories.map((cat, catIndex) => (
          <section key={cat.slug} id={cat.slug} className="mb-14 scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="text-xl font-extrabold text-iv-navy">{cat.name}</h2>
              <span className="font-mono text-xs text-slate-400 bg-slate-100 px-2 py-0.5 rounded">{cat.questions.length} questions</span>
            </div>
            <p className="text-sm text-iv-gray mb-6">{cat.description}</p>

            <FaqAccordion faqs={cat.questions.map(q => ({ q: q.q, a: q.a }))} />

            {/* Ad after 2nd and 5th category */}
            {(catIndex === 1 || catIndex === 4) && (
              <div className="mt-8"><AdZone slot="midPage" format="in-article" /></div>
            )}
          </section>
        ))}

        {/* BOTTOM AD */}
        <AdZone slot="bottomLeaderboard" format="leaderboard" className="mt-8 mb-10" />

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #1A3829, #2A5A3F)', borderRadius: '14px', padding: '2.5rem 2rem', textAlign: 'center', color: '#fff' }}>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.6rem', fontWeight: 400, marginBottom: '0.5rem' }}>Still Have Questions?</h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '1.5rem', fontSize: '0.9rem', maxWidth: '460px', margin: '0 auto 1.5rem', lineHeight: 1.65 }}>
            Browse our provider directory to find a clinic near you. Most offer free consultations.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/alpharetta" style={{ display: 'inline-block', background: '#fff', color: '#1A3829', padding: '10px 24px', borderRadius: '9px', fontWeight: 700, fontSize: '0.86rem', textDecoration: 'none' }}>
              Find Providers →
            </Link>
            <Link href="/blog" style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', padding: '10px 24px', borderRadius: '9px', fontWeight: 700, fontSize: '0.86rem', textDecoration: 'none' }}>
              Read Our Blog
            </Link>
          </div>
        </div>

        {/* RELATED CITY LINKS */}
        <div className="mt-12">
          <h3 className="text-lg font-extrabold text-iv-navy mb-4">Browse IV Therapy by City</h3>
          <div className="flex flex-wrap gap-2.5">
            {['alpharetta', 'roswell', 'johns-creek', 'sandy-springs', 'cumming', 'dunwoody', 'milton', 'suwanee', 'marietta', 'woodstock', 'peachtree-corners', 'duluth'].map(slug => {
              const names = { alpharetta: 'Alpharetta', roswell: 'Roswell', 'johns-creek': 'Johns Creek', 'sandy-springs': 'Sandy Springs', cumming: 'Cumming', dunwoody: 'Dunwoody', milton: 'Milton', suwanee: 'Suwanee', marietta: 'Marietta', woodstock: 'Woodstock', 'peachtree-corners': 'Peachtree Corners', duluth: 'Duluth' };
              return (
                <Link
                  key={slug}
                  href={`/${slug}`}
                  className="nearby-btn px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-iv-navy no-underline"
                >
                  {names[slug]} →
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
