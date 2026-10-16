import { Link } from 'react-router-dom';
import { BUSINESS, getPhoneLink, getWhatsAppLink, getEmailLink } from '../../data/business';
import { wallpaperCategories } from '../../data/wallpapers';
import { wallPanelCategories } from '../../data/wallPanels';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__col footer__col--brand">
            <Link to="/" className="footer__logo">
              Create<span className="footer__logo-accent">You</span>Wallpapers
            </Link>
            <p className="footer__brand-text">
              Premium wallpaper, wall panel, and interior surface solutions for homes and commercial spaces in Hyderabad.
            </p>
            <div className="footer__social">
              {BUSINESS.social.instagram !== '#' && <a href={BUSINESS.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer__social-link">IG</a>}
              {BUSINESS.social.facebook !== '#' && <a href={BUSINESS.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="footer__social-link">FB</a>}
              {BUSINESS.social.youtube !== '#' && <a href={BUSINESS.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="footer__social-link">YT</a>}
            </div>
          </div>

          {/* Wallpapers */}
          <div className="footer__col">
            <h4 className="footer__heading">Wallpapers</h4>
            <ul className="footer__links">
              {wallpaperCategories.slice(0, 6).map(w => (
                <li key={w.id}><Link to={w.url}>{w.name}</Link></li>
              ))}
              <li><Link to="/wallpapers" className="footer__see-all">View All →</Link></li>
            </ul>
          </div>

          {/* Wall Panels */}
          <div className="footer__col">
            <h4 className="footer__heading">Wall Panels</h4>
            <ul className="footer__links">
              {wallPanelCategories.slice(0, 6).map(p => (
                <li key={p.id}><Link to={p.url}>{p.name}</Link></li>
              ))}
              <li><Link to="/wall-panels" className="footer__see-all">View All →</Link></li>
            </ul>
          </div>

          {/* Quick Links & Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/get-quote">Get Quote</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__heading">Contact</h4>
            <div className="footer__contact">
              <a href={getPhoneLink()} className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                {BUSINESS.phone}
              </a>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                WhatsApp Us
              </a>
              <a href={getEmailLink()} className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                {BUSINESS.email}
              </a>
              <p className="footer__contact-item footer__contact-item--address">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {BUSINESS.address.full}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {CURRENT_YEAR} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms & Conditions</Link>
            <Link to="/refund-cancellation">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
