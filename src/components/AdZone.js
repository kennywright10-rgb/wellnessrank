'use client';

import { adConfig } from '@/data/sites';

// ═══════════════════════════════════════════════════════════
// AdZone — Drop-in AdSense placement component
//
// Usage: <AdZone slot="leaderboardTop" format="leaderboard" />
//
// When you get your AdSense approval, replace the placeholder
// div with the actual Google ad unit code. The slot names map
// to adConfig.slots in data/sites.js.
// ═══════════════════════════════════════════════════════════

export default function AdZone({ slot, format = 'horizontal', className = '' }) {
  const slotId = adConfig.slots[slot] || slot;

  // Uncomment this block and remove the placeholder below once AdSense is approved:
  /*
  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adConfig.publisherId}
        data-ad-slot={slotId}
        data-ad-format={format === 'sidebar' ? 'rectangle' : format === 'leaderboard' ? 'horizontal' : 'auto'}
        data-full-width-responsive="true"
      />
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </div>
  );
  */

  // Placeholder until AdSense is approved:
  const heightMap = {
    sidebar: 'min-h-[250px]',
    leaderboard: 'min-h-[90px]',
    horizontal: 'min-h-[90px]',
    'in-article': 'min-h-[90px]',
  };

  return (
    <div className={`ad-zone ${heightMap[format] || 'min-h-[90px]'} p-5 ${className}`}>
      <div className="font-mono text-[0.7rem] text-slate-400 uppercase tracking-widest">Advertisement</div>
      <div className="text-xs text-slate-400 mt-1">{slotId} · {format}</div>
    </div>
  );
}
