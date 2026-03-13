import Link from 'next/link';
import { cities, providers } from '@/data/sites';
import AdZone from '@/components/AdZone';

export const metadata = {
  title: 'IV Ranker — Find the Best IV Therapy Near You | North Atlanta',
  description: 'Compare IV therapy providers across Alpharetta, Roswell, Johns Creek, Sandy Springs & 8 more North Atlanta cities. Reviews, prices, and treatment options.',
  alternates: { canonical: 'https://ivranker.com' },
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <header className="bg-gradient-to-br from-iv-navy via-slate-800 to-iv-teal-dark py-24 px-6 text-white text-center relative overflow-hidden">
        <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(13,148,136,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="relative">
          <div className="font-mono text-[0.72rem] text-teal-300 uppercase tracking-[3px] mb-4">
            North Atlanta&apos;s #1 IV Therapy Directory
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 tracking-tight">
            Find the Best <span className="text-teal-300">IV Therapy</span><br />Near You
          </h1>
          <p className="text-lg text-white/60 max-w-[560px] mx-auto mb-10 leading-relaxed">
            Compare {providers.length}+ verified providers across {cities.length} North Atlanta cities. Reviews, prices, and booking.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            {cities.slice(0, 6).map(c => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="px-6 py-3 bg-white/[0.08] border border-white/15 rounded-xl text-white text-sm font-semibold no-underline hover:bg-white/15 transition-colors backdrop-blur-sm"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-6 py-14">
        <AdZone slot="homeLeaderboard" format="leaderboard" />

        {/* ── CITY GRID ── */}
        <section className="mt-12 text-center">
          <div className="font-mono text-[0.72rem] text-iv-teal uppercase tracking-widest mb-2">BROWSE BY CITY</div>
          <h2 className="text-3xl font-extrabold text-iv-navy mb-9">IV Therapy Across North Atlanta</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            {cities.map(c => {
              const count = providers.filter(p => p.city === c.slug).length;
              return (
                <Link key={c.slug} href={`/${c.slug}`} className="city-card bg-white border border-slate-200 rounded-xl p-6 no-underline block">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-iv-navy mb-1">{c.name}, {c.state}</h3>
                      <div className="text-xs text-iv-gray">{c.county} · Pop. {c.population}</div>
                    </div>
                    <span className="font-mono text-sm font-bold text-iv-teal bg-iv-teal-light px-2.5 py-1 rounded-md">{count}</span>
                  </div>
                  <p className="text-sm text-slate-400 mt-2.5 leading-relaxed">{c.tagline}</p>
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
