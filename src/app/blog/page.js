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
      <header style={{ background: 'linear-gradient(135deg, #1A3829 0%, #1F4A34 55%, #2A5A3F 100%)', padding: '3.5rem 1.5rem', color: '#fff' }}>
        <div className="max-w-[1200px] mx-auto">
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '8px' }}>
            <span style={{ display: 'inline-block', width: '16px', height: '2px', background: '#6ECA9B', borderRadius: '2px' }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6ECA9B' }}>Journal</span>
          </div>
          <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 400, letterSpacing: '-0.02em', marginBottom: '0.75rem', color: '#fff' }}>
            IV Therapy Insights &amp; Guides
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.58)', maxWidth: '520px', lineHeight: 1.65, fontSize: '0.95rem' }}>
            Expert articles on treatments, costs, provider selection, and local tips for North Atlanta&apos;s IV therapy scene.
          </p>
        </div>
      </header>

      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`} className="blog-card block no-underline rounded-xl p-8 mb-8"
          style={{ background: '#fff', border: '1px solid #E7E3DC' }}>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1A3829', background: '#D6EDE3', padding: '3px 10px', borderRadius: '999px' }}>{featured.category}</span>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.6rem', fontWeight: 400, color: '#1A3829', marginTop: '0.85rem', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{featured.title}</h2>
          <p style={{ color: '#78716C', lineHeight: 1.65, marginBottom: '0.85rem', fontSize: '0.92rem' }}>{featured.excerpt}</p>
          <div style={{ fontSize: '0.76rem', color: '#A8A29E' }}>{featured.date} · {featured.readTime}</div>
        </Link>

        <AdZone slot="homeLeaderboard" format="leaderboard" className="mb-8" />

        {/* Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((post, i) => (
            <div key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="blog-card block no-underline rounded-xl p-6 h-full"
                style={{ background: '#fff', border: '1px solid #E7E3DC' }}>
                <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#1A3829', background: '#D6EDE3', padding: '2px 9px', borderRadius: '999px' }}>{post.category}</span>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#1C1917', marginTop: '0.65rem', marginBottom: '0.4rem', lineHeight: 1.35 }}>{post.title}</h3>
                <p style={{ fontSize: '0.84rem', color: '#78716C', lineHeight: 1.6, marginBottom: '0.75rem' }} className="line-clamp-3">{post.excerpt}</p>
                <div style={{ fontSize: '0.74rem', color: '#A8A29E' }}>{post.date} · {post.readTime}</div>
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
