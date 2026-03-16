'use client';

import { useState } from 'react';

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ maxWidth: '760px' }}>
      {faqs.map((f, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`faq-item ${isOpen ? 'active' : ''}`}
            style={{ borderBottom: '1px solid #EDE9E3' }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                textAlign: 'left',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '1.1rem 0',
              }}
            >
              <span style={{
                fontWeight: 600,
                fontSize: '0.94rem',
                color: isOpen ? '#1A3829' : '#1C1917',
                lineHeight: 1.45,
                transition: 'color 0.2s',
              }}>
                {f.q}
              </span>

              {/* Clean icon pill */}
              <span style={{
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: isOpen ? '#D6EDE3' : '#F5F1EB',
                color: isOpen ? '#1A3829' : '#A8A29E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.1rem',
                lineHeight: 1,
                flexShrink: 0,
                transition: 'background 0.2s, color 0.2s',
              }}>
                {isOpen ? '−' : '+'}
              </span>
            </button>

            <div className="faq-answer">
              <p style={{
                fontSize: '0.88rem',
                color: '#78716C',
                lineHeight: 1.72,
                paddingBottom: '1rem',
                margin: 0,
              }}>
                {f.a}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
