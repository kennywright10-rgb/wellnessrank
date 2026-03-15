import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import AdZone from '@/components/AdZone';

export const metadata = {
  title: 'IV Therapy Blog — Expert Guides, Treatment Reviews & Local Tips | IV Ranker',
  description: 'Expert articles on IV therapy — from treatment guides and cost breakdowns to local provider tips for North Atlanta. Updated weekly.',
  alternates: { canonical: 'https://ivranker.com/blog' },
};

export default function BlogIndex() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <>
      <header className="bg-gradient-to-br from-iv-navy via-slate-800 to-iv-teal-dark py-16 px-6 text-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="font-mono text-[0.72rem] text-teal-300 uppercase tracking-[3px] mb-3">IV RANKER BLOG</div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">IV Therapy Insights & Guides</h1>
          <p className="text-white/60 max-w-[560px] leading-relaxed">Expert articles on treatments, costs, provider selection, and local tips for North Atlanta&apos;s IV therapy scene.</p>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`} className="block bg-white border border-slate-200 rounded-xl p-8 mb-8 no-underline hover:shadow-lg transition-shadow">
          <span className="text-xs font-semibold text-iv-teal bg-iv-teal-light px-3 py-1 rounded-full">{featured.category}</span>
          <h2 className="text-2xl font-extrabold text-iv-navy mt-3 mb-2">{featured.title}</h2>
          <p className="text-iv-gray leading-relaxed mb-3">{featured.excerpt}</p>
          <div className="text-xs text-slate-400">{featured.date} · {featured.readTime}</div>
        </Link>

        <AdZone slot="homeLeaderboard" format="leaderboard" className="mb-8" />

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post, i) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="block bg-white border border-slate-200 rounded-xl p-6 no-underline hover:shadow-md hover:border-iv-teal transition-all h-full">
                <span className="text-[0.7rem] font-semibold text-iv-teal bg-iv-teal-light px-2.5 py-0.5 rounded-full">{post.category}</span>
                <h3 className="text-base font-bold text-iv-navy mt-2.5 mb-2 leading-snug">{post.title}</h3>
                <p className="text-sm text-iv-gray leading-relaxed mb-3 line-clamp-3">{post.excerpt}</p>
                <div className="text-xs text-slate-400">{post.date} · {post.readTime}</div>
              </Link>
              {/* Ad after 3rd post */}
              {i === 2 && <div className="mt-5 col-span-full"><AdZone slot="blogInArticle" format="in-article" /></div>}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
