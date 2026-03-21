'use client';

import { useState } from 'react';
import ProviderCard from './ProviderCard';
import AdZone from './AdZone';

const FILTERS = [
  { label: 'All',           key: 'all',       match: [] },
  { label: 'Hydration',     key: 'hydration', match: ['hydration', 'hydrate'] },
  { label: 'NAD+',          key: 'nad',       match: ['nad+', 'nad'] },
  { label: "Myers' Cocktail", key: 'myers',   match: ['myers', 'cocktail'] },
  { label: 'Mobile IV',     key: 'mobile',    match: ['mobile'] },
  { label: 'Anti-Aging',    key: 'antiaging', match: ['aging', 'aesthetic', 'glow', 'anti-aging', 'esthetic'] },
  { label: 'Athletic',      key: 'athletic',  match: ['athletic', 'recovery', 'performance', 'sport', 'peak'] },
];

function matchesFilter(provider, filterKey) {
  if (filterKey === 'all') return true;
  const filter = FILTERS.find(f => f.key === filterKey);
  if (!filter) return true;
  const text = (provider.specialty + ' ' + provider.description).toLowerCase();
  return filter.match.some(m => text.includes(m));
}

export default function ProviderGrid({ providers, cityName }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = providers.filter(p => matchesFilter(p, activeFilter));

  // Re-rank within filtered results
  let rank = 0;

  return (
    <div>
      {/* ── Filter tabs ── */}
      <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap',
        marginBottom: '2rem',
        paddingBottom: '1rem',
        borderBottom: '1px solid #EDE9E3',
      }}>
        {FILTERS.map(f => {
          const isActive = activeFilter === f.key;
          const count = f.key === 'all'
            ? providers.length
            : providers.filter(p => matchesFilter(p, f.key)).length;
          if (count === 0 && f.key !== 'all') return null;
          return (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              style={{
                padding: '7px 16px',
                borderRadius: '999px',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: isActive ? '1.5px solid #1A3829' : '1.5px solid #E7E3DC',
                background: isActive ? '#1A3829' : '#fff',
                color: isActive ? '#fff' : '#78716C',
                transition: 'all 0.15s',
              }}
            >
              {f.label}
              <span style={{
                marginLeft: '6px',
                fontSize: '0.72rem',
                opacity: isActive ? 0.75 : 0.6,
                fontWeight: 500,
              }}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ── Provider grid ── */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem 0', color: '#A8A29E' }}>
          No providers found for this filter in {cityName}.
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}>
          {filtered.map((p, i) => {
            rank++;
            const card = <ProviderCard key={p.id} provider={p} rank={rank} />;
            if (i === 2) {
              return (
                <div key={p.id} style={{ display: 'contents' }}>
                  {card}
                </div>
              );
            }
            return card;
          })}
        </div>
      )}

      {/* Mid-listing ad */}
      {filtered.length > 3 && (
        <div style={{ marginTop: '2rem' }}>
          <AdZone slot="midListing" format="in-article" />
        </div>
      )}
    </div>
  );
}
