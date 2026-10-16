
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { BUSINESS, getPhoneLink, getWhatsAppLink, getEmailLink } from '../../data/business';
import '../Wallpapers/Wallpapers.css';
import './Contact.css';

export default function Contact() {
  useSEO({ title: 'Contact CreateYouWallpapers | Hyderabad', description: 'Get in touch with CreateYouWallpapers for wallpaper, wall panels, and interior surface solutions in Hyderabad. Call, WhatsApp, or visit us.' });
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); console.log('Contact form:', form); setSubmitted(true); };

  return (
    <main className="page-top">
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Contact' }]} />
      <section className="section"><div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="section-eyebrow">Contact</span>
            <h1>Contact CreateYouWallpapers</h1>
            <p className="contact-intro">We'd love to hear about your wall project. Reach out through any of the channels below.</p>
            <div className="contact-methods">
              <a href={getPhoneLink()} className="contact-method">
                <div className="contact-method__icon">📞</div>
                <div><h3>Call Us</h3><p>{BUSINESS.phone}</p></div>
              </a>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="contact-method">
                <div className="contact-method__icon">💬</div>
                <div><h3>WhatsApp</h3><p>Quick response on WhatsApp</p></div>
              </a>
              <a href={getEmailLink()} className="contact-method">
                <div className="contact-method__icon">✉️</div>
                <div><h3>Email</h3><p>{BUSINESS.email}</p></div>
              </a>
              <div className="contact-method">
                <div className="contact-method__icon">📍</div>
                <div><h3>Location</h3><p>{BUSINESS.address.full}</p></div>
              </div>
              <div className="contact-method">
                <div className="contact-method__icon">🕐</div>
                <div><h3>Hours</h3><p>{BUSINESS.hours}</p></div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="home-form-success" style={{ padding: 'var(--space-3xl)' }}>
                <div className="lead-form__success-icon">✓</div><h3>Message Sent!</h3><p>We'll get back to you as soon as possible.</p>
                <Link to="/wallpapers" className="btn btn--primary btn--sm">Browse Designs</Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="home-quote-form">
                <h3>Send an Enquiry</h3>
                <div className="form-group"><input type="text" className="form-input" placeholder="Your Name *" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required aria-label="Name" /></div>
                <div className="form-group"><input type="tel" className="form-input" placeholder="Phone Number *" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} required aria-label="Phone" /></div>
                <div className="form-group"><input type="email" className="form-input" placeholder="Email (optional)" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} aria-label="Email" /></div>
                <div className="form-group"><textarea className="form-textarea" placeholder="How can we help?" rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} aria-label="Message" /></div>
                <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div></section>
    </main>
  );
}
