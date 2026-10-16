import { useState } from 'react';
import './FAQ.css';

export default function FAQ({ items, title = 'Frequently Asked Questions' }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  return (
    <section className="faq-section">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">FAQ</span>
          <h2>{title}</h2>
        </div>
        <div className="faq-list">
          {items.map((item, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'faq-item--open' : ''}`}>
              <button className="faq-item__q" onClick={() => toggle(i)} aria-expanded={openIndex === i}>
                <span>{item.q}</span>
                <span className="faq-item__icon">{openIndex === i ? '−' : '+'}</span>
              </button>
              <div className="faq-item__a" role="region">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
