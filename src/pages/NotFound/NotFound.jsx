import { Link } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import '../Wallpapers/Wallpapers.css';

export default function NotFound() {
  useSEO({ title: 'Page Not Found | CreateYouWallpapers', noindex: true });
  return (
    <main className="page-top"><section className="section" style={{ textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center' }}><div className="container" style={{ maxWidth: '600px' }}>
      <div style={{ fontSize: '6rem', fontFamily: 'var(--font-display)', color: 'var(--color-gold)', lineHeight: 1, marginBottom: 'var(--space-md)' }}>404</div>
      <h1 style={{ marginBottom: 'var(--space-md)' }}>Page Not Found</h1>
      <p style={{ color: 'var(--color-text-light)', fontSize: 'var(--font-size-md)', marginBottom: 'var(--space-2xl)' }}>The page you're looking for doesn't exist or has been moved.</p>
      <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn--primary">Go Home</Link>
        <Link to="/wallpapers" className="btn btn--secondary">Wallpapers</Link>
        <Link to="/wall-panels" className="btn btn--secondary">Wall Panels</Link>
        <Link to="/contact" className="btn btn--secondary">Contact</Link>
      </div>
    </div></section></main>
  );
}
