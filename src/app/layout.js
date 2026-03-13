import '../styles/globals.css';
import Link from 'next/link';
import { cities } from '@/data/sites';

export const metadata = {
  title: {
    default: 'IV Ranker — Best IV Therapy in North Atlanta | Compare Providers',
    template: '%s | IV Ranker',
  },
  description: 'Find and compare the best IV therapy providers across North Atlanta. Compare prices, read reviews, and book your session in Alpharetta, Roswell, Johns Creek, Sandy Springs & more.',
  metadataBase: new URL('https://ivranker.com'),
  openGraph: {
    siteName: 'IV Ranker',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense — replace ca-pub-XXXXXXXXXXXXXXXX with your publisher ID */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script> */}
      </head>
      <body>
        {/* ── NAV ── */}
        <nav className="bg-white/92 border-b border-slate-200 px-6 py-3.5 sticky top-0 z-50 backdrop-blur-md">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">
            <Link href="/" className="font-mono font-bold text-xl text-iv-navy tracking-tight no-underline">
              IV<span className="text-iv-teal">Ranker</span>
            </Link>
            <div className="flex items-center gap-5 text-sm">
              {cities.slice(0, 4).map(c => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="hidden md:inline text-iv-gray hover:text-iv-teal font-medium no-underline transition-colors"
                >
                  {c.name}
                </Link>
              ))}
              <Link href="/blog" className="hidden md:inline text-iv-gray hover:text-iv-teal font-medium no-underline transition-colors">Blog</Link>
              <Link href="/faq" className="hidden md:inline text-iv-gray hover:text-iv-teal font-medium no-underline transition-colors">FAQ</Link>
              <Link
                href="/admin"
                className="text-slate-400 hover:text-iv-teal text-xs no-underline transition-colors"
              >
                Admin
              </Link>
            </div>
          </div>
        </nav>

        {/* ── CONTENT ── */}
        <main>{children}</main>

        {/* ── FOOTER ── */}
        <footer className="bg-iv-navy text-white/50 py-12 px-6 text-sm">
          <div className="max-w-[1200px] mx-auto flex justify-between flex-wrap gap-8">
            <div>
              <div className="font-mono text-lg text-white font-bold mb-2">
                IV<span className="text-iv-teal">Ranker</span>
              </div>
              <p className="max-w-[260px] leading-relaxed">
                North Atlanta&apos;s most comprehensive IV therapy directory. Compare, review, and book.
              </p>
            </div>
            <div className="flex gap-10 flex-wrap">
              <div>
                <h4 className="text-white/80 text-xs uppercase tracking-wider mb-2.5 font-semibold">Top Cities</h4>
                {cities.slice(0, 6).map(c => (
                  <Link key={c.slug} href={`/${c.slug}`} className="block text-white/40 hover:text-iv-teal no-underline mb-1.5 text-sm transition-colors">
                    {c.name}
                  </Link>
                ))}
              </div>
              <div>
                <h4 className="text-white/80 text-xs uppercase tracking-wider mb-2.5 font-semibold">Treatments</h4>
                <span className="block text-white/40 mb-1.5">Myers&apos; Cocktail</span>
                <span className="block text-white/40 mb-1.5">NAD+ Therapy</span>
                <span className="block text-white/40 mb-1.5">Immune Boost</span>
                <span className="block text-white/40 mb-1.5">Hydration</span>
                <span className="block text-white/40 mb-1.5">Athletic Recovery</span>
              </div>
              <div>
                <h4 className="text-white/80 text-xs uppercase tracking-wider mb-2.5 font-semibold">Resources</h4>
                <Link href="/blog" className="block text-white/40 hover:text-iv-teal no-underline mb-1.5 transition-colors">Blog</Link>
                <Link href="/faq" className="block text-white/40 hover:text-iv-teal no-underline mb-1.5 transition-colors">FAQ</Link>
                <span className="block text-white/40 mb-1.5">List Your Business</span>
                <span className="block text-white/40 mb-1.5">About</span>
              </div>
            </div>
          </div>
          <div className="max-w-[1200px] mx-auto mt-7 pt-5 border-t border-white/5 text-center text-xs">
            © 2026 IV Ranker. All rights reserved. Informational directory only — not medical advice.
          </div>
        </footer>
      </body>
    </html>
  );
}
