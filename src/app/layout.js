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

// Leaf/wellness SVG mark for logo
function LogoMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path
        d="M11 2C6.5 2 3 6 3 10.5c0 2.8 1.4 5.3 3.5 6.8C7.8 18.4 9.3 19 11 19s3.2-.6 4.5-1.7C17.6 15.8 19 13.3 19 10.5 19 6 15.5 2 11 2z"
        fill="#2A7A52"
        fillOpacity="0.15"
      />
      <path
        d="M11 3.5c0 0 1 4.5-2 7.5s-5 3-5 3 .5-5 3-7.5 4-3 4-3z"
        fill="#2A7A52"
      />
      <path
        d="M11 3.5c0 0-1 4.5 2 7.5s5 3 5 3-.5-5-3-7.5-4-3-4-3z"
        fill="#1A3829"
        fillOpacity="0.6"
      />
      <line x1="11" y1="11" x2="11" y2="19" stroke="#2A7A52" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense */}
        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossOrigin="anonymous"></script> */}
      </head>
      <body>

        {/* ── NAV ── */}
        <nav style={{ background: 'rgba(250,248,245,0.95)', borderBottom: '1px solid #E7E3DC' }}
          className="px-6 py-4 sticky top-0 z-50 backdrop-blur-sm">
          <div className="max-w-[1200px] mx-auto flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 no-underline group">
              <LogoMark />
              <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.2rem', color: '#1A3829', letterSpacing: '-0.01em' }}>
                IV<span style={{ color: '#2A7A52' }}>Ranker</span>
              </span>
            </Link>

            {/* Nav links */}
            <div className="flex items-center gap-1">
              {cities.slice(0, 4).map(c => (
                <Link
                  key={c.slug}
                  href={`/${c.slug}`}
                  className="hidden md:inline-block px-3 py-1.5 text-sm font-medium no-underline rounded-lg transition-colors hover:bg-[#F0EDE8] hover:text-[#1A3829]"
                  style={{ color: '#78716C' }}
                >
                  {c.name}
                </Link>
              ))}
              <Link href="/blog"
                className="hidden md:inline-block px-3 py-1.5 text-sm font-medium no-underline rounded-lg transition-colors"
                style={{ color: '#78716C' }}>
                Blog
              </Link>
              <Link href="/faq"
                className="hidden md:inline-block px-3 py-1.5 text-sm font-medium no-underline rounded-lg transition-colors"
                style={{ color: '#78716C' }}>
                FAQ
              </Link>

              {/* CTA */}
              <Link
                href="/list-your-business"
                className="hidden md:inline-block ml-2 px-4 py-2 text-sm font-semibold rounded-lg no-underline transition-colors"
                style={{ background: '#1A3829', color: '#fff' }}>
                List Your Clinic
              </Link>
            </div>
          </div>
        </nav>

        {/* ── CONTENT ── */}
        <main>{children}</main>

        {/* ── FOOTER ── */}
        <footer style={{ background: '#1A3829' }} className="text-white py-14 px-6">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex justify-between flex-wrap gap-10 pb-10" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

              {/* Brand */}
              <div className="max-w-[280px]">
                <div className="flex items-center gap-2 mb-3">
                  <LogoMark />
                  <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: '1.15rem', color: '#fff' }}>
                    IV<span style={{ color: '#6ECA9B' }}>Ranker</span>
                  </span>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  North Atlanta&apos;s most comprehensive IV therapy directory. Compare providers, read real reviews, and book your session.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="inline-block px-2.5 py-1 rounded text-xs font-medium" style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)' }}>
                    Not medical advice
                  </span>
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-12 flex-wrap">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>Top Cities</h4>
                  {cities.slice(0, 6).map(c => (
                    <Link key={c.slug} href={`/${c.slug}`}
                      className="block text-sm no-underline mb-2 transition-colors"
                      style={{ color: 'rgba(255,255,255,0.45)' }}>
                      {c.name}
                    </Link>
                  ))}
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>Treatments</h4>
                  {["Myers' Cocktail", 'NAD+ Therapy', 'Immune Boost', 'Hydration IV', 'Athletic Recovery'].map(t => (
                    <span key={t} className="block text-sm mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>{t}</span>
                  ))}
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>Resources</h4>
                  <Link href="/blog" className="block text-sm no-underline mb-2 transition-colors" style={{ color: 'rgba(255,255,255,0.45)' }}>Blog</Link>
                  <Link href="/faq" className="block text-sm no-underline mb-2 transition-colors" style={{ color: 'rgba(255,255,255,0.45)' }}>FAQ</Link>
                  <Link href="/list-your-business" className="block text-sm no-underline mb-2 transition-colors" style={{ color: 'rgba(255,255,255,0.45)' }}>List Your Business</Link>
                  <Link href="/admin" className="block text-sm no-underline mb-2 transition-colors" style={{ color: 'rgba(255,255,255,0.2)' }}>Admin</Link>
                </div>
              </div>
            </div>

            <div className="pt-6 flex flex-wrap justify-between items-center gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              <span>© 2026 IV Ranker. All rights reserved.</span>
              <span>Informational directory only — not medical advice.</span>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
