'use client';

import { useState } from 'react';

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-[780px]">
      {faqs.map((f, i) => (
        <div key={i} className={`faq-item border-b border-slate-200 py-4 ${openIndex === i ? 'active' : ''}`}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex justify-between items-center gap-3 text-left bg-transparent border-none cursor-pointer p-0"
          >
            <span className="font-bold text-iv-navy text-base">{f.q}</span>
            <span className="font-mono text-iv-teal text-xl flex-shrink-0">
              {openIndex === i ? '−' : '+'}
            </span>
          </button>
          <div className="faq-answer">
            <p className="text-sm text-iv-gray leading-relaxed">{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
