import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import Hero from '../../components/Hero/Hero';
import LeadForm from '../../components/LeadForm/LeadForm';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import ProcessSection from '../../components/ProcessSection/ProcessSection';
import FAQ from '../../components/FAQ/FAQ';
import { wallpaperCategories } from '../../data/wallpapers';
import { wallPanelCategories } from '../../data/wallPanels';
import { rooms, faqs } from '../../data/siteData';
import { BUSINESS, getWhatsAppLink, getPhoneLink } from '../../data/business';
import './Home.css';

export default function Home() {
  useSEO({
    title: 'Wallpaper and Wall Panel Designs in Hyderabad | CreateYouWallpapers',
    description: 'Premium wallpaper, 3D wall panels, and interior surface solutions for homes and commercial spaces in Hyderabad. Explore designs and get a free consultation.',
  });

  const [showLead, setShowLead] = useState(false);
  const lastClosedRef = useRef(Date.now());

  // Initial popup on page load after 3 seconds
  useEffect(() => {
    try {
      if (sessionStorage.getItem('cyw_lead_submitted')) return;
    } catch {}

    const timer = setTimeout(() => {
      try {
        if (!sessionStorage.getItem('cyw_lead_submitted')) {
          setShowLead(true);
        }
      } catch {
        setShowLead(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Recurring popup every 15 seconds while browsing or scrolling when closed
  useEffect(() => {
    if (showLead) return;

    try {
      if (sessionStorage.getItem('cyw_lead_submitted')) return;
    } catch {}

    // Time-based trigger: shows every 15 seconds after being closed
    const intervalTimer = setTimeout(() => {
      try {
        if (!sessionStorage.getItem('cyw_lead_submitted')) {
          setShowLead(true);
        }
      } catch {
        setShowLead(true);
      }
    }, 15000);

    // Scroll-based trigger: while user is scrolling, re-trigger if 15s have elapsed
    const handleScroll = () => {
      if (Date.now() - lastClosedRef.current >= 15000) {
        try {
          if (!sessionStorage.getItem('cyw_lead_submitted')) {
            setShowLead(true);
          }
        } catch {
          setShowLead(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(intervalTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showLead]);

  const openLead = () => setShowLead(true);
  const closeLead = () => {
    lastClosedRef.current = Date.now();
    setShowLead(false);
  };

  return (
    <main>
      {/* 1. Hero Carousel (Livspace-style 3-slide photography slider) */}
      <Hero onOpenConsultation={openLead} />

      {/* Pop-up consultation modal with low-opacity transparent black overlay */}
      {showLead && <LeadForm onClose={closeLead} />}

      {/* 2. Introduction / Choose Your Wall Style */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Discover</span>
            <h2>Choose Your Wall Style</h2>
            <p>Whether you're looking for wallpaper, 3D wall panels, or surface finishes — explore our curated collections designed for every space.</p>
          </div>
          <div className="home-discover__grid">
            <Link to="/wallpapers" className="home-discover__card">
              <div className="home-discover__img">
                <img src="/gallery/tropical-leaf-wallpaper-green.jpeg" alt="Wallpapers collection" loading="lazy" />
              </div>
              <div className="home-discover__info">
                <h3>Wallpapers</h3>
                <p>11 curated styles from floral to 3D, for every room and aesthetic.</p>
                <span className="card__link">View Collection →</span>
              </div>
            </Link>
            <Link to="/wall-panels" className="home-discover__card">
              <div className="home-discover__img">
                <img src="/gallery/luxury-fluted-panel-foyer.jpeg" alt="3D Wall Panels collection" loading="lazy" />
              </div>
              <div className="home-discover__info">
                <h3>3D Wall Panels</h3>
                <p>UV marble, fluted, charcoal, PVC, and more premium surface panels.</p>
                <span className="card__link">View Collection →</span>
              </div>
            </Link>
            <Link to="/wooden-flooring" className="home-discover__card">
              <div className="home-discover__img">
                <img src="/gallery/wpc-fluted-panel-wood-colors.jpeg" alt="Surfaces and Flooring solutions" loading="lazy" />
              </div>
              <div className="home-discover__info">
                <h3>Surface & Flooring Solutions</h3>
                <p>Wooden flooring, WPC/PVC options, artificial grass, and more.</p>
                <span className="card__link">View Collection →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Wallpaper Categories */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Wallpapers</span>
            <h2>Wallpaper Styles</h2>
            <p>Patterns and textures that change the visual character of a room. Explore our complete wallpaper collection.</p>
          </div>
          <div className="grid grid--4">
            {wallpaperCategories.slice(0, 8).map((w, i) => (
              <CategoryCard key={w.id} {...w} index={i} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-2xl)' }}>
            <Link to="/wallpapers" className="btn btn--secondary">View All Wallpaper Designs</Link>
          </div>
        </div>
      </section>

      {/* 5. Wall Panels */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Wall Panels</span>
            <h2>3D Wall Panels & Surface Solutions</h2>
            <p>Engineered panels and decorative surfaces that create depth, texture, and architectural character.</p>
          </div>
          <div className="home-panels__editorial">
            <div className="home-panels__feature">
              <Link to="/uv-marble-sheets" className="home-panels__feature-card">
                <div style={{ aspectRatio: '16/10', overflow: 'hidden', borderRadius: 'var(--border-radius-md)' }}>
                  <img src="/gallery/luxury-marble-fluted-panel-living-room.jpeg" alt="UV Marble Sheets Feature Wall" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div className="home-panels__feature-info">
                  <h3>UV Marble Sheets</h3>
                  <p>High-gloss marble-look panels for luxury interiors.</p>
                  <span className="card__link">Explore →</span>
                </div>
              </Link>
            </div>
            <div className="home-panels__side">
              {wallPanelCategories.slice(1, 5).map(p => (
                <Link key={p.id} to={p.url} className="home-panels__side-card">
                  <div style={{ aspectRatio: '3/2', overflow: 'hidden', borderRadius: 'var(--border-radius-sm)' }}>
                    <img src={p.image} alt={p.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <h4>{p.name}</h4>
                  <span className="card__link">Explore →</span>
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-2xl)' }}>
            <Link to="/wall-panels" className="btn btn--secondary">Explore All Wall Panels</Link>
          </div>
        </div>
      </section>

      {/* 6. Rooms */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">By Room</span>
            <h2>Designed for Every Room</h2>
            <p>See how wallpapers and wall panels transform living rooms, bedrooms, kitchens, and more.</p>
          </div>
          <div className="grid grid--4">
            {rooms.slice(0, 8).map((r, i) => (
              <CategoryCard key={r.id} {...r} index={i} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-2xl)' }}>
            <Link to="/rooms" className="btn btn--secondary">Browse Room Ideas</Link>
          </div>
        </div>
      </section>

      {/* 7. Projects / Gallery Preview */}
      <section className="section section--dark">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow" style={{ color: 'var(--color-gold)' }}>Gallery</span>
            <h2>Recent Wall Transformations</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)' }}>Explore installations and design projects from our portfolio.</p>
          </div>
          <div className="home-gallery__grid">
            {[
              { img: '/gallery/luxury-marble-fluted-panel-living-room.jpeg', label: 'Living Room Feature Wall' },
              { img: '/gallery/3d-wave-panel-bedroom-design.jpeg', label: 'Bedroom 3D Wave Panel' },
              { img: '/gallery/marble-fluted-panel-tv-wall.jpeg', label: 'Marble & Fluted TV Unit' },
              { img: '/gallery/luxury-fluted-panel-foyer.jpeg', label: 'Luxury Foyer Wall' },
              { img: '/gallery/3d-diamond-panel-installation.jpeg', label: '3D Diamond Panel Installation' },
              { img: '/gallery/tropical-leaf-wallpaper-green.jpeg', label: 'Tropical Wallpaper Accent' },
            ].map((item, i) => (
              <Link key={i} to="/gallery" className="home-gallery__item" aria-label={`View ${item.label} in gallery`}>
                <img src={item.img} alt={item.label} loading="lazy" />
                <div className="home-gallery__overlay">
                  <span>{item.label}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-2xl)' }}>
            <Link to="/gallery" className="btn btn--white">View Gallery</Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* 10. CTA Section */}
      <section className="section home-cta">
        <div className="home-cta__bg img-placeholder img-placeholder--dark">
          <div className="hero__overlay" />
        </div>
        <div className="container home-cta__content">
          <h2>Ready to Transform Your Walls?</h2>
          <p>Get a free consultation and expert advice on the best wallpaper or wall panel for your space.</p>
          <div className="home-cta__buttons">
            <Link to="/get-quote" className="btn btn--primary btn--lg">Get a Quote</Link>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn btn--white btn--lg">WhatsApp Us</a>
            <a href={getPhoneLink()} className="btn btn--white btn--lg">Call Now</a>
          </div>
        </div>
      </section>

      {/* 11. Contact Form Section */}
      <section className="section" id="home-contact">
        <div className="container">
          <div className="home-contact__split">
            <div className="home-contact__info">
              <span className="section-eyebrow">Contact</span>
              <h2>Tell Us About Your Wall</h2>
              <p>Share your room details, preferred style, and project requirements. Our team will get back to you with personalised recommendations and a quote.</p>
              <div className="home-contact__details">
                <a href={getPhoneLink()} className="home-contact__detail-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                  {BUSINESS.phone}
                </a>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="home-contact__detail-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="home-contact__form">
              <HomeQuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ */}
      <FAQ items={faqs.slice(0, 6)} title="Common Questions" />
    </main>
  );
}

function HomeQuoteForm() {
  const [form, setForm] = useState({ name: '', phone: '', location: '', room: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Required';
    if (!form.phone.trim() || form.phone.trim().length < 10) e.phone = 'Valid phone required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    console.log('Home quote form:', form);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="home-form-success">
        <div className="lead-form__success-icon">✓</div>
        <h3>Thank You!</h3>
        <p>We've received your enquiry and will contact you soon.</p>
        <Link to="/wallpapers" className="btn btn--primary btn--sm">Explore Designs</Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="home-quote-form">
      <h3>Request a Quote</h3>
      <div className="form-group">
        <input type="text" className={`form-input ${errors.name ? 'error' : ''}`} placeholder="Your Name *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} aria-label="Name" />
      </div>
      <div className="form-group">
        <input type="tel" className={`form-input ${errors.phone ? 'error' : ''}`} placeholder="Phone / WhatsApp *" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} aria-label="Phone" />
      </div>
      <div className="home-quote-form__row">
        <div className="form-group">
          <input type="text" className="form-input" placeholder="Location" value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} aria-label="Location" />
        </div>
        <div className="form-group">
          <select className="form-select" value={form.room} onChange={e => setForm({ ...form, room: e.target.value })} aria-label="Room type">
            <option value="">Room Type</option>
            <option>Living Room</option>
            <option>Bedroom</option>
            <option>Kids Room</option>
            <option>Kitchen</option>
            <option>TV Wall</option>
            <option>Office</option>
            <option>Commercial</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className="form-group">
        <select className="form-select" value={form.product} onChange={e => setForm({ ...form, product: e.target.value })} aria-label="Product interest">
          <option value="">Product Interest</option>
          <option>Wallpaper</option>
          <option>Wall Panels</option>
          <option>Flooring</option>
          <option>Surface Finishes</option>
          <option>Custom Design</option>
          <option>Not Sure — Need Advice</option>
        </select>
      </div>
      <div className="form-group">
        <textarea className="form-textarea" placeholder="Tell us about your project..." rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} aria-label="Message" />
      </div>
      <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>Request a Quote</button>
      <p className="home-quote-form__privacy">Your information is safe and will only be used for your enquiry.</p>
    </form>
  );
}
