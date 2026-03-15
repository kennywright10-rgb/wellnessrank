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

      <header className="bg-gradient-to-br from-iv-navy via-slate-800 to-iv-teal-dark py-16 px-6 text-white">
        <div className="max-w-[800px] mx-auto">
          <div className="text-sm text-white/45 mb-4">
            <Link href="/" className="text-white/60 hover:text-white/90 no-underline">Home</Link>
            {' → '}
            <Link href="/blog" className="text-white/60 hover:text-white/90 no-underline">Blog</Link>
            {' → '}<span className="text-white/40">{post.category}</span>
          </div>
          <span className="text-xs font-semibold text-teal-300 bg-teal-900/40 px-3 py-1 rounded-full">{post.category}</span>
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight mt-4 mb-4 tracking-tight">{post.title}</h1>
          <div className="text-sm text-white/50">{post.author} · {post.date} · {post.readTime}</div>
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
        <div className="bg-gradient-to-r from-iv-teal to-iv-teal-dark rounded-xl p-8 text-white text-center my-10">
          <h3 className="text-xl font-extrabold mb-2">Find IV Therapy Near You</h3>
          <p className="text-white/80 mb-5 text-sm">Compare providers across 12 North Atlanta cities. Reviews, prices, and treatment options.</p>
          <Link href="/alpharetta" className="inline-block bg-white text-iv-teal-dark px-6 py-2.5 rounded-lg font-bold text-sm no-underline hover:shadow-lg transition-shadow">
            Browse Providers →
          </Link>
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h3 className="text-lg font-extrabold text-iv-navy mb-5">More from IV Ranker</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recent.map(p => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="block bg-white border border-slate-200 rounded-xl p-5 no-underline hover:shadow-md hover:border-iv-teal transition-all">
                <span className="text-[0.65rem] font-semibold text-iv-teal bg-iv-teal-light px-2 py-0.5 rounded-full">{p.category}</span>
                <h4 className="text-sm font-bold text-iv-navy mt-2 leading-snug">{p.title}</h4>
                <div className="text-xs text-slate-400 mt-2">{p.readTime}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
