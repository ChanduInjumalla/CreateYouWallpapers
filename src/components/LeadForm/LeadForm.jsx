import { useState, useEffect } from 'react';
import { getWhatsAppLink } from '../../data/business';
import './LeadForm.css';

export default function LeadForm({ onClose }) {
  const [form, setForm] = useState({ name: '', phone: '', interest: 'wallpaper' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Close on Escape key & lock body scroll while modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.phone.trim() || form.phone.trim().length < 10) {
      e.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!form.interest) e.interest = 'Please select what you are looking for';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    console.log('Lead form submitted:', form);
    setSubmitted(true);
    try {
      sessionStorage.setItem('cyw_lead_submitted', '1');
      sessionStorage.setItem(
        'cyw_lead_data',
        JSON.stringify({ ...form, date: new Date().toISOString() })
      );
    } catch {}
  };

  const whatsappMessage = `Hi CreateYouWallpapers, I want to book a free consultation for ${form.interest || 'wall decor'}. My name is ${form.name || ''}.`;
  const whatsappUrl = getWhatsAppLink(whatsappMessage);

  return (
    <div
      className="lead-modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
    >
      <div className="lead-form" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="lead-form__close"
          onClick={onClose}
          aria-label="Close consultation form"
        >
          ✕
        </button>

        {submitted ? (
          <div className="lead-form__success">
            <div className="lead-form__success-icon">✓</div>
            <h3 className="lead-form__title">Thank You!</h3>
            <p className="lead-form__desc">
              We've received your request. Our wall decor design consultant will call you shortly with catalog samples.
            </p>
            <div className="lead-form__actions">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp"
                style={{ width: '100%', marginBottom: '10px' }}
              >
                💬 Chat on WhatsApp Now
              </a>
              <button
                type="button"
                className="lead-form__pill-btn"
                style={{ width: '100%' }}
                onClick={onClose}
              >
                Continue Browsing
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="lead-form__header">
              <span className="lead-form__badge">Doorstep Consultation</span>
              <h3 id="lead-modal-title" className="lead-form__title">
                Book Free Consultation
              </h3>
              <p className="lead-form__desc">
                Get free site measurements &amp; expert design catalog at your home.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <input
                  type="text"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Your Full Name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  aria-label="Your Name"
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  className={`form-input ${errors.phone ? 'error' : ''}`}
                  placeholder="Phone Number (10 digits) *"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  aria-label="Phone number"
                />
                {errors.phone && <span className="form-error">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <select
                  className={`form-select ${errors.interest ? 'error' : ''}`}
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  aria-label="Select service or product"
                >
                  <option value="wallpaper">Custom Wallpapers (3D, Floral, Texture)</option>
                  <option value="wall-panels">3D Wall Panels &amp; Fluted Louvers</option>
                  <option value="uv-marble">UV Marble Sheets &amp; Stone Panels</option>
                  <option value="flooring">Wooden Flooring &amp; WPC Louvers</option>
                  <option value="renovation">Complete Wall &amp; Interior Makeover</option>
                  <option value="other">Other Inquiries</option>
                </select>
                {errors.interest && <span className="form-error">{errors.interest}</span>}
              </div>

              <button type="submit" className="lead-form__pill-btn" style={{ width: '100%' }}>
                BOOK FREE CONSULTATION
              </button>

              <div className="lead-form__trust">
                <span>✓ Free Site Visit</span>
                <span>✓ 10-Yr Warranty*</span>
                <span>✓ Instant Callback</span>
              </div>

              <div className="lead-form__wa-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lead-form__wa-link"
                >
                  <span>Need instant help?</span> <strong>Chat on WhatsApp →</strong>
                </a>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
