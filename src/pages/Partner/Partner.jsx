import { useState } from 'react';
import { useSEO } from '../../utils/seo';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { getWhatsAppLink } from '../../data/business';
import './Partner.css';

export default function Partner() {
  useSEO({
    title: 'Become a Channel Partner — Architects & Interior Designers | CreateYouWallpapers',
    description: 'Partner program for Hyderabad architects, interior designers, and luxury builders. Exclusive trade pricing, sample boxes, 3D render files, and priority installation.',
  });

  const [form, setForm] = useState({
    name: '',
    firm: '',
    role: 'Interior Designer',
    phone: '',
    email: '',
    city: 'Hyderabad',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  };

  return (
    <main className="partner-page">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Become a Partner', path: '/partner' },
          ]}
        />

        <div className="partner-hero">
          <span className="partner-hero__badge">Trade Partnership Program</span>
          <h1 className="partner-hero__title">Partner with CreateYou Wallpapers</h1>
          <p className="partner-hero__sub">
            Designed for Architects, Interior Designers, and General Contractors across Hyderabad. Enjoy wholesale trade margins, complimentary designer swatch kits, and dedicated master installation crews.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="partner-perks-grid">
          <div className="partner-perk-card">
            <span className="partner-perk-icon">💎</span>
            <h3>Exclusive Trade Pricing</h3>
            <p>Attractive tiered B2B pricing and recurring project margins on all wallpaper rolls, custom murals, and 3D architectural panels.</p>
          </div>

          <div className="partner-perk-card">
            <span className="partner-perk-icon">📦</span>
            <h3>Free Sample Box &amp; Catalogs</h3>
            <p>Receive a complimentary luxury hardbound swatch box delivered to your studio with real textures, vinyls, and fluted louver finishes.</p>
          </div>

          <div className="partner-perk-card">
            <span className="partner-perk-icon">⚡</span>
            <h3>Priority Execution Slots</h3>
            <p>Guaranteed 24–48 hour installation slots with our most experienced in-house technicians, ensuring seamless handovers to your clients.</p>
          </div>

          <div className="partner-perk-card">
            <span className="partner-perk-icon">📐</span>
            <h3>3D CAD &amp; Texture Library</h3>
            <p>Instant access to high-resolution seamless texture maps and SketchUp/3ds Max materials to incorporate directly into your client presentations.</p>
          </div>
        </div>

        {/* Split registration */}
        <div className="partner-split">
          <div className="partner-split-info">
            <h2>Join 150+ Top Hyderabad Design Studios</h2>
            <p>
              From luxury villas in Jubilee Hills to modern high-rises in Gachibowli, top interior design firms rely on CreateYouWallpapers for impeccable execution and zero hassle.
            </p>
            <ul className="partner-check-list">
              <li>✓ Dedicated Key Account Manager for rapid quotations</li>
              <li>✓ Custom digital 3D proofing for bespoke murals</li>
              <li>✓ Free site visits with laser measurements on your behalf</li>
              <li>✓ 10-Year anti-termite and moisture warranty backstop</li>
            </ul>
          </div>

          {/* Form */}
          <div className="partner-form-card">
            <h3>Register as a Channel Partner</h3>
            <p>Tell us about your studio to receive your free sample kit and trade price sheet.</p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="partner-form">
                <div className="partner-field">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ar. Priya Sharma"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="partner-field">
                  <label>Firm / Studio Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Studio Vista Interiors"
                    value={form.firm}
                    onChange={(e) => setForm({ ...form, firm: e.target.value })}
                  />
                </div>

                <div className="partner-grid-row">
                  <div className="partner-field">
                    <label>Professional Role</label>
                    <select
                      value={form.role}
                      onChange={(e) => setForm({ ...form, role: e.target.value })}
                    >
                      <option value="Interior Designer">Interior Designer</option>
                      <option value="Architect">Architect</option>
                      <option value="Builder/Developer">Builder / Developer</option>
                      <option value="Contractor">Contractor / Project Manager</option>
                    </select>
                  </div>

                  <div className="partner-field">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="partner-field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="contact@studio.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn--primary partner-submit-btn">
                  Join Trade Program &amp; Get Sample Box
                </button>
              </form>
            ) : (
              <div className="partner-success">
                <h4>✓ Trade Application Received!</h4>
                <p>Welcome, {form.name}. Our Designer Relations head will contact you and dispatch your complimentary sample box.</p>
                <a
                  href={getWhatsAppLink(`Hi CreateYouWallpapers, I registered as a Trade Partner (${form.role}). Firm: ${form.firm || 'Independent'}, Name: ${form.name}. Please connect and share the trade price list.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Direct WhatsApp Connect
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
