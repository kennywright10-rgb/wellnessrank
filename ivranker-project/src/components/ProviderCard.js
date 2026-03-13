// ═══════════════════════════════════════════════════════════
// ProviderCard — displays a single provider listing
// Handles sponsored/platinum/gold/silver tiers with visual
// differentiation. Links to provider website.
// ═══════════════════════════════════════════════════════════

function SponsorBadge({ tier }) {
  const styles = {
    platinum: 'bg-gradient-to-r from-iv-teal to-iv-teal-dark text-white',
    gold: 'bg-gradient-to-r from-amber-400 to-amber-600 text-white',
    silver: 'bg-slate-200 text-slate-600',
  };
  const labels = {
    platinum: '⭐ Featured Partner',
    gold: 'Featured',
    silver: 'Promoted',
  };
  return (
    <span className={`${styles[tier] || styles.silver} px-3 py-1 rounded-full text-[0.72rem] font-bold tracking-wide whitespace-nowrap`}>
      {labels[tier] || 'Promoted'}
    </span>
  );
}

function Stars({ rating, count }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-1.5">
      <span className="text-amber-400 text-sm tracking-wider">
        {'★'.repeat(full)}{half ? '½' : ''}
      </span>
      <span className="text-sm font-bold text-iv-navy">{rating}</span>
      <span className="text-xs text-slate-400">({count} reviews)</span>
    </div>
  );
}

export default function ProviderCard({ provider, rank }) {
  const { name, address, description, specialty, priceRange, rating, reviewCount, website, sponsored, sponsorTier } = provider;

  return (
    <div className={`provider-card rounded-xl p-7 relative ${
      sponsored
        ? 'bg-gradient-to-br from-teal-50 to-emerald-50 border-2 border-iv-teal'
        : 'bg-white border border-slate-200'
    }`}>
      {/* Platinum top accent bar */}
      {sponsored && (
        <div className="absolute top-[-1px] left-[-1px] right-[-1px] h-1 bg-gradient-to-r from-iv-teal via-teal-400 to-iv-teal rounded-t-xl" />
      )}

      {/* Header: rank, name, sponsor badge, price */}
      <div className="flex justify-between items-start mb-2.5 flex-wrap gap-2">
        <div className="flex items-center gap-2.5 flex-wrap">
          <span className={`font-mono text-xs font-bold w-8 h-8 flex items-center justify-center rounded-lg ${
            sponsored ? 'bg-iv-teal-light text-iv-teal' : 'bg-slate-100 text-slate-400'
          }`}>#{rank}</span>
          <h3 className="text-lg font-bold text-iv-navy m-0">{name}</h3>
          {sponsored && <SponsorBadge tier={sponsorTier} />}
        </div>
        <span className="font-mono text-xs text-iv-teal bg-iv-teal-light px-2.5 py-1 rounded-md">{priceRange}</span>
      </div>

      {/* Stars */}
      <Stars rating={rating} count={reviewCount} />

      {/* Description */}
      <p className="text-sm text-iv-gray my-3 leading-relaxed">{description}</p>

      {/* Footer: address + tags */}
      <div className="flex justify-between items-center flex-wrap gap-2 mt-3">
        <span className="text-xs text-slate-400">{address}</span>
        <div className="flex gap-2 flex-wrap">
          <span className="text-xs font-semibold text-iv-teal-dark bg-iv-teal-light px-3 py-1 rounded-full">
            {specialty.split(',')[0].trim()}
          </span>
          {website && (
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-white bg-iv-teal px-3.5 py-1 rounded-full no-underline hover:bg-iv-teal-dark transition-colors"
            >
              Visit Site →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
