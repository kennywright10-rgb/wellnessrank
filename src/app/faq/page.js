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
      <header className="bg-gradient-to-br from-iv-navy via-slate-800 to-iv-teal-dark py-16 px-6 text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-sm text-white/45 mb-3">
            <Link href="/" className="text-white/60 hover:text-white/90 no-underline">Home</Link>
            {' → '}FAQ
          </div>
          <div className="font-mono text-[0.72rem] text-teal-300 uppercase tracking-[3px] mb-3">FREQUENTLY ASKED QUESTIONS</div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">IV Therapy FAQ</h1>
          <p className="text-white/60 max-w-[560px] leading-relaxed">
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
        <div className="bg-gradient-to-r from-iv-teal to-iv-teal-dark rounded-xl p-8 text-white text-center">
          <h2 className="text-xl font-extrabold mb-2">Still Have Questions?</h2>
          <p className="text-white/80 mb-5 text-sm max-w-[480px] mx-auto">
            Browse our provider directory to find a clinic near you. Most offer free consultations where you can ask questions specific to your health needs.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/alpharetta" className="inline-block bg-white text-iv-teal-dark px-6 py-2.5 rounded-lg font-bold text-sm no-underline hover:shadow-lg transition-shadow">
              Find Providers →
            </Link>
            <Link href="/blog" className="inline-block bg-white/15 text-white border border-white/30 px-6 py-2.5 rounded-lg font-bold text-sm no-underline hover:bg-white/25 transition-colors">
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
