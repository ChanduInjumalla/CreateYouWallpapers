import './MarqueeStrip.css';
import { trustValues } from '../../data/siteData';

export default function MarqueeStrip() {
  const items = [...trustValues, ...trustValues];
  return (
    <section className="marquee" aria-label="Value highlights">
      <div className="marquee__track">
        {items.map((v, i) => (
          <span key={i} className="marquee__item">
            <span className="marquee__diamond">◆</span> {v}
          </span>
        ))}
      </div>
    </section>
  );
}
