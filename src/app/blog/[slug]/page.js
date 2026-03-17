import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPost, getRecentPosts } from '@/data/blog';
import AdZone from '@/components/AdZone';

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `https://ivranker.com/blog/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://ivranker.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default function BlogPost({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const recent = getRecentPosts(4).filter(p => p.slug !== post.slug).slice(0, 3);

  // Convert markdown-style ## headings and paragraphs to HTML
  const renderContent = (content) => {
    return content.split('\n\n').map((block, i) => {
      const trimmed = block.trim();
      if (trimmed.startsWith('## ')) {
        return <h2 key={i} className="text-xl font-extrabold text-iv-navy mt-10 mb-4">{trimmed.replace('## ', '')}</h2>;
      }
      return <p key={i} className="text-iv-slate leading-[1.85] mb-4">{trimmed}</p>;
    });
  };

  // Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    author: { '@type': 'Organization', name: 'IV Ranker', url: 'https://ivranker.com' },
    publisher: { '@type': 'Organization', name: 'IV Ranker', url: 'https://ivranker.com' },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: `https://ivranker.com/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <header style={{ background: 'linear-gradient(135deg, #1A3829 0%, #1F4A34 55%, #2A5A3F 100%)', padding: '3.5rem 1.5rem', color: '#fff' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)', marginBottom: '1rem' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 6px', opacity: 0.3 }}>›</span>
            <Link href="/blog" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Blog</Link>
            <span style={{ margin: '0 6px', opacity: 0.3 }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.45)' }}>{post.category}</span>
          </div>
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6ECA9B', background: 'rgba(110,202,155,0.15)', padding: '3px 10px', borderRadius: '999px', border: '1px solid rgba(110,202,155,0.25)' }}>{post.category}</span>
          <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.02em', marginTop: '0.85rem', marginBottom: '0.85rem', color: '#fff' }}>{post.title}</h1>
          <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)' }}>{post.author} · {post.date} · {post.readTime}</div>
        </div>
      </header>

      <div className="max-w-[800px] mx-auto px-6 py-12">
        {/* Article Content */}
        <article className="text-base">
          {renderContent(post.content)}
        </article>

        {/* Ad: Bottom of article */}
        <div className="mt-10 mb-10">
          <AdZone slot="blogInArticle" format="in-article" />
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #1A3829, #2A5A3F)', borderRadius: '14px', padding: '2.25rem 2rem', textAlign: 'center', color: '#fff', margin: '2.5rem 0' }}>
          <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.45rem', fontWeight: 400, marginBottom: '0.5rem' }}>Find IV Therapy Near You</h3>
          <p style={{ color: 'rgba(255,255,255,0.62)', marginBottom: '1.25rem', fontSize: '0.88rem', lineHeight: 1.65 }}>
            Compare providers across 12 North Atlanta cities. Reviews, prices, and treatment options.
          </p>
          <Link href="/alpharetta" style={{ display: 'inline-block', background: '#fff', color: '#1A3829', padding: '10px 24px', borderRadius: '9px', fontWeight: 700, fontSize: '0.86rem', textDecoration: 'none' }}>
            Browse Providers →
          </Link>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.25rem', fontWeight: 400, color: '#1A3829', marginBottom: '1.25rem' }}>More from IV Ranker</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recent.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="blog-card block no-underline rounded-xl p-5"
                style={{ background: '#fff', border: '1px solid #E7E3DC' }}>
                <span style={{ fontSize: '0.67rem', fontWeight: 700, color: '#1A3829', background: '#D6EDE3', padding: '2px 8px', borderRadius: '999px' }}>{p.category}</span>
                <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#1C1917', marginTop: '0.6rem', lineHeight: 1.35 }}>{p.title}</h4>
                <div style={{ fontSize: '0.73rem', color: '#A8A29E', marginTop: '0.5rem' }}>{p.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
