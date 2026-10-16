import { useState, useEffect } from 'react';
import { getWhatsAppLink } from '../../data/business';

export default function ConsultationModal({ isOpen, onClose, design, categoryName, modalType = 'consultation' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Hyderabad',
    preferredContact: 'WhatsApp',
    notes: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setErrors({});
    }
  }, [isOpen, design]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please enter your name';
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      errs.phone = 'Please enter a valid 10-digit phone number';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Track lead submission
    try {
      sessionStorage.setItem('cyw_enquiry_' + Date.now(), JSON.stringify({
        ...formData,
        design: design?.title,
        category: categoryName,
        type: modalType
      }));
    } catch {}

    setSubmitted(true);
  };

  const whatsappMessage = `Hi CreateYouWallpapers, I am interested in ${modalType === 'quote' ? 'getting a quote' : 'booking a free consultation'} for "${design?.title || categoryName}" (${categoryName}). My name is ${formData.name || ''}.`;

  return (
    <div className="cat-modal-backdrop" onClick={onClose}>
      <div className="cat-modal" onClick={(e) => e.stopPropagation()}>
        <button className="cat-modal__close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        {!submitted ? (
          <>
            <span className="cat-modal__eyebrow">
              {modalType === 'quote' ? 'Instant Cost Estimation' : 'Doorstep Consultation'}
            </span>
            <h3 className="cat-modal__title">
              {modalType === 'quote' ? 'Get a Custom Quote' : 'Book Free Consultation'}
            </h3>

            {design && (
              <div className="cat-modal__design-preview">
                {design.image && (
                  <img src={design.image} alt={design.title} className="cat-modal__thumb" />
                )}
                <div className="cat-modal__design-info">
                  <h4>{design.title}</h4>
                  <p>{design.spec || categoryName}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group" style={{ marginBottom: '14px' }}>
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  className={`form-input ${errors.name ? 'error' : ''}`}
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className="form-group" style={{ marginBottom: '14px' }}>
                <label className="form-label">Phone / WhatsApp Number *</label>
                <div className="cat-quote-phone-wrap">
                  <span className="cat-quote-flag">🇮🇳 +91</span>
                  <input
                    type="tel"
                    placeholder="Enter 10-digit number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                {errors.phone && <span className="form-error" style={{ display: 'block', marginTop: '4px' }}>{errors.phone}</span>}
              </div>

              <div className="form-group" style={{ marginBottom: '14px' }}>
                <label className="form-label">Email (Optional)</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                <div>
                  <label className="form-label">City / Locality</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="Area in Hyderabad"
                  />
                </div>
                <div>
                  <label className="form-label">Preferred Contact</label>
                  <select
                    className="form-select"
                    value={formData.preferredContact}
                    onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                  >
                    <option value="WhatsApp">WhatsApp</option>
                    <option value="Phone Call">Phone Call</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn--primary"
                style={{ width: '100%', padding: '14px', fontSize: '0.9rem', marginBottom: '12px' }}
              >
                {modalType === 'quote' ? 'Request Instant Quote' : 'Confirm Free Consultation'}
              </button>

              <div style={{ textAlign: 'center' }}>
                <a
                  href={getWhatsAppLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#25D366'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.073.043.419-.101.824z"/>
                  </svg>
                  Connect directly on WhatsApp
                </a>
              </div>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '16px 0' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              background: '#E6F4EA',
              color: '#137333',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '28px',
              margin: '0 auto 16px'
            }}>
              ✓
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', marginBottom: '8px', color: 'var(--color-charcoal)' }}>
              Thank You, {formData.name}!
            </h3>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '24px' }}>
              We have received your enquiry for <strong>{design?.title || categoryName}</strong>. Our interior wall specialist in Hyderabad will contact you shortly on <strong>+91 {formData.phone}</strong>.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href={getWhatsAppLink(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                style={{ width: '100%', padding: '14px' }}
              >
                Chat on WhatsApp Now
              </a>
              <button
                type="button"
                className="btn btn--secondary"
                onClick={onClose}
                style={{ width: '100%', padding: '12px' }}
              >
                Close &amp; Keep Browsing
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
