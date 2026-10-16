import { useState } from 'react';
import { useSEO } from '../../utils/seo';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { getWhatsAppLink } from '../../data/business';
import './Franchise.css';

export default function Franchise() {
  useSEO({
    title: 'Own a Franchise — Interior Wallpaper & Panel Showroom | CreateYouWallpapers',
    description: 'Partner with Hyderabad’s fastest growing wallpaper and 3D wall panel brand. Proven high-margin retail model, full inventory and digital lead support.',
  });

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Hyderabad',
    location: '',
    investment: '5-10L',
    experience: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
  };

  return (
    <main className="fran-page">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Own a Franchise', path: '/franchise' },
          ]}
        />

        <div className="fran-hero">
          <span className="fran-hero__badge">High-Growth Business Opportunity</span>
          <h1 className="fran-hero__title">Own a CreateYou Franchise</h1>
          <p className="fran-hero__sub">
            Join Hyderabad’s leading brand in designer wallpapers, fluted louvers, and 3D architectural panels. High margins, low inventory holding, and direct homeowner lead generation.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="fran-metrics-grid">
          <div className="fran-metric-card">
            <span className="fran-metric-num">35% - 45%</span>
            <strong>High Gross Margins</strong>
            <p>Direct factory supply chain delivers superior profit margins on wallpapers and fluted panels.</p>
          </div>
          <div className="fran-metric-card">
            <span className="fran-metric-num">₹5L - ₹10L</span>
            <strong>Low Capital Investment</strong>
            <p>Compact studio models (300–600 sq.ft) with zero heavy machinery required.</p>
          </div>
          <div className="fran-metric-card">
            <span className="fran-metric-num">100+ Leads/Mo</span>
            <strong>Central Digital Marketing</strong>
            <p>We generate verified homeowner inquiries across your designated territory in Telangana &amp; AP.</p>
          </div>
        </div>

        {/* What We Provide vs Form */}
        <div className="fran-split">
          <div className="fran-info">
            <h2>Why Franchise with CreateYouWallpapers?</h2>
            <div className="fran-benefits">
              <div className="fran-benefit-item">
                <span className="fran-benefit-icon">🏬</span>
                <div>
                  <strong>Complete Showroom Experience Kit</strong>
                  <p>Turnkey display stands, 500+ physical touch-and-feel sample books, illuminated lightboxes, and architectural mockups.</p>
                </div>
              </div>

              <div className="fran-benefit-item">
                <span className="fran-benefit-icon">🎓</span>
                <div>
                  <strong>Technician &amp; Sales Training</strong>
                  <p>Comprehensive training for your staff on laser measurements, substrate recommendations, and flawless installation.</p>
                </div>
              </div>

              <div className="fran-benefit-item">
                <span className="fran-benefit-icon">🚚</span>
                <div>
                  <strong>Fast 24-48h Central Dispatch</strong>
                  <p>Central warehouse inventory in Hyderabad ensures immediate order fulfillment without tying up your working capital.</p>
                </div>
              </div>

              <div className="fran-benefit-item">
                <span className="fran-benefit-icon">📱</span>
                <div>
                  <strong>CRM &amp; 3D Design Software</strong>
                  <p>Access our proprietary digital catalog and 3D mockup generator to close deals on the spot with homeowners.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="fran-form-card">
            <h3>Apply for Franchise Partnership</h3>
            <p>Fill out the form below. Our expansion team will get in touch within 24 hours.</p>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="fran-form">
                <div className="fran-field">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>

                <div className="fran-field">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>

                <div className="fran-field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>

                <div className="fran-grid-row">
                  <div className="fran-field">
                    <label>Preferred City/Area</label>
                    <input
                      type="text"
                      placeholder="e.g. Gachibowli, Kukatpally"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                    />
                  </div>

                  <div className="fran-field">
                    <label>Investment Capacity</label>
                    <select
                      value={form.investment}
                      onChange={(e) => setForm({ ...form, investment: e.target.value })}
                    >
                      <option value="5-10L">₹5 Lakhs - ₹10 Lakhs</option>
                      <option value="10-20L">₹10 Lakhs - ₹20 Lakhs</option>
                      <option value="20L+">₹20 Lakhs+</option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="btn btn--primary fran-submit-btn">
                  Submit Franchise Application
                </button>
              </form>
            ) : (
              <div className="fran-success">
                <h4>✓ Application Submitted!</h4>
                <p>Thank you, {form.name}. Our Head of Franchise Development will contact you within 24 hours.</p>
                <a
                  href={getWhatsAppLink(`Hi CreateYouWallpapers, I submitted a Franchise Application for ${form.location || 'Hyderabad'}. Name: ${form.name}, Phone: ${form.phone}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Direct WhatsApp Chat
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
