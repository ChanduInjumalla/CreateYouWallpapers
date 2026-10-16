import { processSteps } from '../../data/siteData';
import './ProcessSection.css';

export default function ProcessSection() {
  return (
    <section className="process section section--cream">
      <div className="container">
        <div className="section-header">
          <span className="section-eyebrow">How It Works</span>
          <h2>Our Process</h2>
          <p>From consultation to installation — a simple, transparent journey.</p>
        </div>
        <div className="process__grid">
          {processSteps.map((s) => (
            <div key={s.step} className="process__step">
              <div className="process__number">{String(s.step).padStart(2, '0')}</div>
              <h3 className="process__title">{s.title}</h3>
              <p className="process__desc">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
