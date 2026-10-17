import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import PageIntro from '../../components/PageIntro/PageIntro';
import { getWhatsAppLink } from '../../data/business';
import '../Wallpapers/Wallpapers.css';

export default function GetQuote() {
  useSEO({ title: 'Get a Quote | CreateYouWallpapers Hyderabad', description: 'Request a free quote for wallpaper, wall panels, or interior surface solutions. Share your requirements and our team will respond promptly.' });
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', phone: '', email: '', locality: '', room: '', product: '', wall: '', contact: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.phone.trim() || form.phone.length < 10) e.phone = 'Please enter a valid phone number';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    console.log('Quote form submitted:', form);
    navigate('/thank-you');
  };

  const u = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  return (
    <main className="page-top">
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Get a Quote' }]} />

      <PageIntro
        eyebrow="Estimation & Consultation"
        title="Get a Quote for Wallpaper or Wall Panels"
        desc="Tell us about your project and we'll get back to you with a personalised recommendation and quote for materials and installation in Hyderabad."
        image="/gallery/luxury-fluted-panel-feather-wall.jpeg"
        imageAlt="Get a Quote for Wall Transformation"
        columns={[
          {
            title: 'What to Expect',
            items: [
              'Same-day response on WhatsApp or call',
              'Design catalog recommendations for your room',
              'Accurate transparent cost estimate',
              'Free on-site measurement & sample preview',
            ],
          },
          {
            title: 'Why CreateYouWallpapers',
            items: [
              '500+ premium designs available',
              'Experienced installation specialists',
              'Seamless edge finish guaranteed',
              'Complete material warranty',
            ],
          },
        ]}
      />

      <section className="section"><div className="container" style={{ maxWidth: '720px' }}>
        <form onSubmit={handleSubmit} noValidate className="home-quote-form" style={{ boxShadow: 'none', padding: '0' }}>
          <div className="form-group"><label className="form-label">Your Name *</label><input type="text" className={`form-input ${errors.name ? 'error' : ''}`} value={form.name} onChange={u('name')} />{errors.name && <span className="form-error">{errors.name}</span>}</div>
          <div className="form-group"><label className="form-label">Phone / WhatsApp *</label><input type="tel" className={`form-input ${errors.phone ? 'error' : ''}`} value={form.phone} onChange={u('phone')} />{errors.phone && <span className="form-error">{errors.phone}</span>}</div>
          <div className="form-group"><label className="form-label">Email (optional)</label><input type="email" className="form-input" value={form.email} onChange={u('email')} /></div>
          <div className="home-quote-form__row">
            <div className="form-group"><label className="form-label">Locality</label><input type="text" className="form-input" value={form.locality} onChange={u('locality')} placeholder="Area / Locality" /></div>
            <div className="form-group"><label className="form-label">Room Type</label><select className="form-select" value={form.room} onChange={u('room')}><option value="">Select</option><option>Living Room</option><option>Bedroom</option><option>Kids Room</option><option>Dining Room</option><option>TV Wall</option><option>Pooja Room</option><option>Home Office</option><option>Foyer</option><option>Commercial</option><option>Other</option></select></div>
          </div>
          <div className="form-group"><label className="form-label">Product Interest</label><select className="form-select" value={form.product} onChange={u('product')}><option value="">Select</option><option>Wallpaper</option><option>3D Wall Panels</option><option>UV Marble Sheets</option><option>Fluted Panels</option><option>PVC Panels</option><option>Flooring</option><option>Artificial Grass</option><option>Custom Design</option><option>Not Sure</option></select></div>
          <div className="form-group"><label className="form-label">Approximate Wall Area (optional)</label><input type="text" className="form-input" value={form.wall} onChange={u('wall')} placeholder="e.g. 10ft x 8ft" /></div>
          <div className="form-group"><label className="form-label">Preferred Contact Method</label><select className="form-select" value={form.contact} onChange={u('contact')}><option value="">Select</option><option>Phone Call</option><option>WhatsApp</option><option>Email</option></select></div>
          <div className="form-group"><label className="form-label">Project Description</label><textarea className="form-textarea" rows={4} value={form.message} onChange={u('message')} placeholder="Tell us about your project..." /></div>
          <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%' }}>Submit Quote Request</button>
          <p style={{ textAlign: 'center', marginTop: 'var(--space-lg)' }}>
            <span style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>Or reach us directly on </span>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 600, color: '#25D366' }}>WhatsApp</a>
          </p>
        </form>
      </div></section>
    </main>
  );
}
