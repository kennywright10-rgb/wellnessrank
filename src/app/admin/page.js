'use client';

import { useState, useEffect } from 'react';
import { cities, providers as defaultProviders, adConfig } from '@/data/sites';

// ═══════════════════════════════════════════════════════════
// ADMIN PANEL
// Password-protected CRUD for providers, sponsor management,
// and AdSense configuration. Data persists in localStorage
// until you connect Supabase.
// ═══════════════════════════════════════════════════════════

const ADMIN_PASSWORD = 'ivranker2026';

function SponsorBadge({ tier }) {
  const styles = { platinum: 'bg-gradient-to-r from-teal-600 to-teal-700 text-white', gold: 'bg-gradient-to-r from-amber-400 to-amber-600 text-white', silver: 'bg-slate-200 text-slate-600' };
  const labels = { platinum: '⭐ Featured Partner', gold: 'Featured', silver: 'Promoted' };
  return <span className={`${styles[tier] || styles.silver} px-2.5 py-0.5 rounded-full text-[0.7rem] font-bold`}>{labels[tier] || 'Promoted'}</span>;
}

export default function AdminPage() {
  const [isAuth, setIsAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [providers, setProviders] = useState([]);
  const [filter, setFilter] = useState('all');
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({});
  const [showAdd, setShowAdd] = useState(false);

  // Load providers from localStorage or defaults
  useEffect(() => {
    const saved = null; // localStorage disabled in artifacts — will use Supabase in production
    setProviders(saved ? JSON.parse(saved) : defaultProviders);
    // Check if already authenticated this session
    if (typeof window !== 'undefined' && sessionStorage.getItem('ivr-admin') === 'true') {
      setIsAuth(true);
    }
  }, []);

  // Save providers when changed
  useEffect(() => {
    if (providers.length > 0 && typeof window !== 'undefined') {
      try { /* localStorage.setItem('ivr-providers', JSON.stringify(providers)); */ } catch(e) {}
    }
  }, [providers]);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuth(true);
      setLoginError(false);
      if (typeof window !== 'undefined') sessionStorage.setItem('ivr-admin', 'true');
    } else {
      setLoginError(true);
    }
  };

  // ── LOGIN SCREEN ──
  if (!isAuth) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="bg-white rounded-2xl p-9 w-full max-w-sm shadow-lg border border-slate-200">
          <h1 className="text-2xl font-extrabold text-iv-navy mb-2">Admin Login</h1>
          <p className="text-sm text-iv-gray mb-6">Enter your password to manage providers and settings.</p>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => { setPassword(e.target.value); setLoginError(false); }}
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            className={`w-full px-4 py-3 border rounded-lg text-sm font-sans outline-none ${loginError ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-slate-50'}`}
            autoFocus
          />
          {loginError && <p className="text-red-500 text-xs mt-2">Incorrect password</p>}
          <button onClick={handleLogin} className="w-full mt-4 bg-iv-teal text-white py-3 rounded-lg font-bold text-sm cursor-pointer border-none hover:bg-iv-teal-dark transition-colors">
            Login
          </button>
        </div>
      </div>
    );
  }

  // ── HELPERS ──
  const filtered = filter === 'all' ? providers : providers.filter(p => p.city === filter);
  const startEdit = (p) => { setEditId(p.id); setFormData({ ...p }); setShowAdd(false); };
  const cancelEdit = () => { setEditId(null); setFormData({}); };

  const saveEdit = () => {
    setProviders(prev => prev.map(p => p.id === editId ? {
      ...p, ...formData,
      rating: parseFloat(formData.rating) || p.rating,
      reviewCount: parseInt(formData.reviewCount) || p.reviewCount,
      sortOrder: parseInt(formData.sortOrder) || 0,
      sponsored: !!formData.sponsored,
      featured: !!formData.featured,
    } : p));
    cancelEdit();
  };

  const deleteProvider = (id) => {
    if (confirm('Delete this provider permanently?')) {
      setProviders(prev => prev.filter(p => p.id !== id));
    }
  };

  const addNew = () => {
    const newId = Math.max(0, ...providers.map(p => p.id)) + 1;
    setProviders(prev => [...prev, {
      id: newId,
      name: formData.name || 'New Provider',
      slug: (formData.name || 'new-provider').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      city: formData.city || 'alpharetta',
      address: formData.address || '',
      phone: formData.phone || '',
      website: formData.website || '',
      specialty: formData.specialty || '',
      priceRange: formData.priceRange || '$$',
      rating: parseFloat(formData.rating) || 4.0,
      reviewCount: parseInt(formData.reviewCount) || 0,
      description: formData.description || '',
      featured: !!formData.featured,
      sponsored: !!formData.sponsored,
      sponsorTier: formData.sponsorTier || null,
      sortOrder: parseInt(formData.sortOrder) || 100,
    }]);
    setShowAdd(false);
    setFormData({});
  };

  // ── EDIT/ADD FORM ──
  const EditForm = ({ onSave, onCancel, isNew }) => (
    <div className="bg-teal-50 border border-iv-teal rounded-xl p-6 mb-4">
      <h3 className="font-bold text-iv-navy mb-4">{isNew ? 'Add New Provider' : `Editing: ${formData.name}`}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {[
          ['name', 'Business Name', 'text'],
          ['address', 'Address', 'text'],
          ['phone', 'Phone', 'text'],
          ['website', 'Website URL', 'text'],
          ['specialty', 'Specialty', 'text'],
          ['priceRange', 'Price Range', 'text'],
          ['rating', 'Rating (1-5)', 'number'],
          ['reviewCount', 'Review Count', 'number'],
          ['sortOrder', 'Sort Order (lower=higher)', 'number'],
        ].map(([key, label, type]) => (
          <div key={key}>
            <label className="text-xs font-semibold text-iv-gray block mb-1">{label}</label>
            <input
              type={type}
              className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm bg-slate-50 font-sans outline-none"
              value={formData[key] || ''}
              onChange={e => setFormData(f => ({ ...f, [key]: e.target.value }))}
            />
          </div>
        ))}
        <div>
          <label className="text-xs font-semibold text-iv-gray block mb-1">City</label>
          <select
            className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm bg-slate-50 font-sans"
            value={formData.city || 'alpharetta'}
            onChange={e => setFormData(f => ({ ...f, city: e.target.value }))}
          >
            {cities.map(c => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-iv-gray block mb-1">Sponsor Tier</label>
          <select
            className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm bg-slate-50 font-sans"
            value={formData.sponsorTier || ''}
            onChange={e => setFormData(f => ({ ...f, sponsorTier: e.target.value || null, sponsored: !!e.target.value }))}
          >
            <option value="">None (Organic)</option>
            <option value="platinum">Platinum — Featured Partner ($200/mo)</option>
            <option value="gold">Gold — Featured ($100/mo)</option>
            <option value="silver">Silver — Promoted ($50/mo)</option>
          </select>
        </div>
        <div className="flex gap-5 items-end">
          <label className="flex items-center gap-1.5 text-sm cursor-pointer">
            <input type="checkbox" checked={!!formData.featured} onChange={e => setFormData(f => ({ ...f, featured: e.target.checked }))} />
            Featured
          </label>
          <label className="flex items-center gap-1.5 text-sm cursor-pointer">
            <input type="checkbox" checked={!!formData.sponsored} onChange={e => setFormData(f => ({ ...f, sponsored: e.target.checked }))} />
            Sponsored
          </label>
        </div>
      </div>
      <div className="mt-3">
        <label className="text-xs font-semibold text-iv-gray block mb-1">Description</label>
        <textarea
          className="w-full px-3 py-2 border border-slate-200 rounded-md text-sm bg-slate-50 font-sans min-h-[80px] resize-y outline-none"
          value={formData.description || ''}
          onChange={e => setFormData(f => ({ ...f, description: e.target.value }))}
        />
      </div>
      <div className="flex gap-2.5 mt-4">
        <button onClick={onSave} className="bg-iv-teal text-white px-6 py-2 rounded-lg font-semibold text-sm border-none cursor-pointer">{isNew ? 'Add Provider' : 'Save Changes'}</button>
        <button onClick={onCancel} className="bg-slate-200 text-iv-slate px-6 py-2 rounded-lg font-semibold text-sm border-none cursor-pointer">Cancel</button>
      </div>
    </div>
  );

  // ── ADMIN DASHBOARD ──
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-8">
      <div className="flex justify-between items-center mb-8 flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-extrabold text-iv-navy">Admin Dashboard</h1>
          <p className="text-sm text-iv-gray">Manage providers, sponsors, and ad placements</p>
        </div>
        <div className="flex gap-2.5">
          <button
            onClick={() => { setShowAdd(true); setEditId(null); setFormData({ city: 'alpharetta', sortOrder: 100 }); }}
            className="bg-iv-teal text-white px-5 py-2.5 rounded-lg font-semibold text-sm border-none cursor-pointer"
          >+ Add Provider</button>
          <button
            onClick={() => { setIsAuth(false); sessionStorage.removeItem('ivr-admin'); }}
            className="bg-slate-100 text-iv-slate px-5 py-2.5 rounded-lg font-semibold text-sm border border-slate-200 cursor-pointer"
          >Logout</button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          ['Total Providers', providers.length, 'text-iv-navy'],
          ['Sponsored', providers.filter(p => p.sponsored).length, 'text-iv-teal'],
          ['Cities', [...new Set(providers.map(p => p.city))].length, 'text-amber-500'],
          ['Avg Rating', (providers.reduce((s, p) => s + p.rating, 0) / providers.length).toFixed(1), 'text-emerald-500'],
        ].map(([label, val, color]) => (
          <div key={label} className="bg-white border border-slate-200 rounded-xl p-5">
            <div className={`font-mono text-2xl font-bold ${color}`}>{val}</div>
            <div className="text-[0.72rem] text-slate-400 uppercase tracking-wider">{label}</div>
          </div>
        ))}
      </div>

      {/* City Filter */}
      <div className="flex gap-2 mb-5 flex-wrap">
        <button onClick={() => setFilter('all')} className={`px-4 py-1.5 rounded-md text-xs font-semibold border cursor-pointer ${filter === 'all' ? 'bg-iv-navy text-white border-iv-navy' : 'bg-white text-iv-slate border-slate-200'}`}>All</button>
        {cities.map(c => (
          <button key={c.slug} onClick={() => setFilter(c.slug)} className={`px-4 py-1.5 rounded-md text-xs font-semibold border cursor-pointer ${filter === c.slug ? 'bg-iv-navy text-white border-iv-navy' : 'bg-white text-iv-slate border-slate-200'}`}>{c.name}</button>
        ))}
      </div>

      {/* Add Form */}
      {showAdd && <EditForm onSave={addNew} onCancel={() => { setShowAdd(false); setFormData({}); }} isNew />}

      {/* Provider List */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        {filtered.sort((a, b) => a.sortOrder - b.sortOrder).map(p => (
          <div key={p.id}>
            {editId === p.id ? (
              <div className="p-4"><EditForm onSave={saveEdit} onCancel={cancelEdit} /></div>
            ) : (
              <div className={`flex items-center justify-between px-5 py-3.5 border-b border-slate-100 gap-3 flex-wrap ${p.sponsored ? 'bg-teal-50' : ''}`}>
                <div className="flex items-center gap-3 flex-1 min-w-[200px]">
                  <span className="font-mono text-[0.7rem] font-bold text-slate-400 bg-slate-100 w-7 h-7 flex items-center justify-center rounded-md flex-shrink-0">{p.sortOrder}</span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-sm text-iv-navy">{p.name}</span>
                      {p.sponsored && <SponsorBadge tier={p.sponsorTier} />}
                    </div>
                    <div className="text-[0.72rem] text-slate-400">{cities.find(c => c.slug === p.city)?.name} · {p.priceRange} · ★{p.rating}</div>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <button onClick={() => startEdit(p)} className="px-3.5 py-1.5 rounded-md border border-slate-200 bg-slate-50 text-[0.72rem] font-semibold cursor-pointer">Edit</button>
                  <button onClick={() => deleteProvider(p.id)} className="px-3.5 py-1.5 rounded-md border border-red-200 bg-red-50 text-red-600 text-[0.72rem] font-semibold cursor-pointer">Delete</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* AdSense Config */}
      <div className="mt-10 bg-white border border-slate-200 rounded-xl p-7">
        <h3 className="text-lg font-bold text-iv-navy mb-4">AdSense Configuration</h3>
        <p className="text-sm text-iv-gray mb-5">Ad zones are pre-wired throughout the site. Add your publisher ID to <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">src/data/sites.js</code> and uncomment the AdSense block in <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs">src/components/AdZone.js</code>.</p>
        <div className="font-mono text-xs bg-iv-navy text-teal-300 p-5 rounded-lg leading-loose overflow-x-auto whitespace-pre">{`Ad Zone Slots:\n─────────────────────────────────────\n• leaderboardTop     → 728×90 top of city pages\n• midListing         → in-article between cards\n• midPage            → 728×90 mid-page\n• sidebar            → 300×250 city sidebar\n• bottomLeaderboard  → 728×90 above footer\n• homeLeaderboard    → 728×90 homepage\n• homeBottom         → 728×90 homepage bottom\n• blogSidebar        → 300×600 blog pages\n• blogInArticle      → in-article in blog posts`}</div>
      </div>

      {/* Sponsor Tiers */}
      <div className="mt-6 bg-white border border-slate-200 rounded-xl p-7">
        <h3 className="text-lg font-bold text-iv-navy mb-4">Sponsored Listing Tiers</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { tier: 'platinum', name: 'Platinum Partner', price: '$200/mo', perks: 'Always #1, featured badge, teal highlight, expanded card, website link' },
            { tier: 'gold', name: 'Gold Featured', price: '$100/mo', perks: 'Top 3 placement, featured badge, highlighted card, website link' },
            { tier: 'silver', name: 'Silver Promoted', price: '$50/mo', perks: 'Above organic results, promoted badge, standard card' },
          ].map(t => (
            <div key={t.tier} className="border border-slate-200 rounded-xl p-5">
              <SponsorBadge tier={t.tier} />
              <div className="font-bold text-iv-navy mt-3">{t.name}</div>
              <div className="font-mono text-xl font-bold text-iv-teal my-1">{t.price}</div>
              <div className="text-xs text-iv-gray leading-relaxed">{t.perks}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
