import { Link } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import { getWhatsAppLink } from '../../data/business';
import '../Wallpapers/Wallpapers.css';

export default function ThankYou() {
  useSEO({ title: 'Thank You | CreateYouWallpapers', noindex: true });
  return (
    <main className="page-top"><section className="section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center' }}><div className="container" style={{ maxWidth: '600px' }}>
      <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'var(--color-success)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto var(--space-xl)' }}>✓</div>
      <h1 style={{ marginBottom: 'var(--space-md)' }}>Thank You!</h1>
      <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-light)', marginBottom: 'var(--space-2xl)' }}>We have received your enquiry and will contact you shortly to discuss your project.</p>
      <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/wallpapers" className="btn btn--primary">Explore Wallpapers</Link>
        <Link to="/wall-panels" className="btn btn--secondary">View Wall Panels</Link>
        <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn btn--secondary" style={{ background: '#25D366', color: '#fff', borderColor: '#25D366' }}>WhatsApp Us</a>
      </div>
    </div></section></main>
  );
}