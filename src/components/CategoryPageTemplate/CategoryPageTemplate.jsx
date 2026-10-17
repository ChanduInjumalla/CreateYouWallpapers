import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import ConsultationModal from './ConsultationModal';
import { getWhatsAppLink } from '../../data/business';
import './CategoryPageTemplate.css';

export default function CategoryPageTemplate({
  categoryData,
  breadcrumbItems,
  relatedCategories = [],
}) {
  const {
    categoryName,
    resultCount = '150+ Designs',
    h1,
    seoTitle,
    metaDescription,
    shortIntro,
    extendedIntro = [],
    trendingTitle,
    trendingSubtitle,
    trendingDesigns = [],
    designs = [],
    promotions = [],
    largeVisual,
    faqs = [],
  } = categoryData;

  // SEO
  useSEO({
    title: seoTitle || `${h1 || categoryName} | CreateYouWallpapers Hyderabad`,
    description: metaDescription || shortIntro || '',
  });

  // State
  const [readMoreExpanded, setReadMoreExpanded] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [favorites, setFavorites] = useState({});
  const [modalState, setModalState] = useState({
    isOpen: false,
    design: null,
    type: 'consultation',
  });

  // Large Quote Form State
  const [largeForm, setLargeForm] = useState({
    name: '',
    phone: '',
    email: '',
    room: categoryName,
    whatsappUpdates: true,
  });
  const [largeFormErrors, setLargeFormErrors] = useState({});
  const [largeFormSubmitted, setLargeFormSubmitted] = useState(false);

  // Toggle favorite heart
  const toggleFavorite = (id, e) => {
    e.stopPropagation();
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // Open modal
  const openConsultation = (design, type = 'consultation') => {
    setModalState({ isOpen: true, design, type });
  };

  // Handle Large Form Submit
  const handleLargeFormSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!largeForm.name.trim()) errs.name = 'Please enter your name';
    if (!largeForm.phone.trim() || largeForm.phone.trim().length < 10) {
      errs.phone = 'Please enter a valid 10-digit number';
    }
    setLargeFormErrors(errs);

    if (Object.keys(errs).length === 0) {
      try {
        sessionStorage.setItem('cyw_quote_lead_' + Date.now(), JSON.stringify(largeForm));
      } catch {}
      setLargeFormSubmitted(true);
    }
  };

  // Build grid items with promotional cards and trust card inserted
  const gridElements = [];
  const promo1 = promotions[0] || {
    headline: 'Transform Your Walls Starting Today',
    subtext: 'Free doorstep design catalog preview & laser measurement across Hyderabad.',
    ctaText: 'GET FREE QUOTE',
    theme: 'dark'
  };
  const promo2 = promotions[1] || {
    headline: 'Custom Sized Murals for Any Wall',
    subtext: 'No seam misalignment. Scaled precisely to your wall height and width.',
    ctaText: 'BOOK CONSULTATION',
    theme: 'gold'
  };

  designs.forEach((design, index) => {
    // Insert 1st Promo card after 3 designs (Row 2, Column 1)
    if (index === 3) {
      gridElements.push(
        <div key="promo-card-1" className={`cat-promo-card cat-promo-card--${promo1.theme}`}>
          <div>
            <span className="cat-promo-card__badge">Exclusive Service</span>
            <h3 className="cat-promo-card__headline">{promo1.headline}</h3>
            <p className="cat-promo-card__subtext">{promo1.subtext}</p>
          </div>
          <button
            className="cat-promo-card__btn"
            onClick={() => openConsultation(null, 'quote')}
          >
            {promo1.ctaText}
          </button>
        </div>
      );
    }

    // Insert Trust / Brand Promise card around position 7 (Reference Screenshot)
    if (index === 6) {
      gridElements.push(
        <div key="trust-promise-card" className="cat-promise-card">
          <div className="cat-promise-card__top">
            <h3 className="cat-promise-card__title">The CreateYou promise</h3>
            <div className="cat-promise-card__list">
              <div className="cat-promise-item">
                <span className="cat-promise-item__icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </span>
                <span className="cat-promise-item__text">10-Year Warranty</span>
              </div>
              <div className="cat-promise-item">
                <span className="cat-promise-item__icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <span className="cat-promise-item__text">1-Day Fast Installation</span>
              </div>
              <div className="cat-promise-item">
                <span className="cat-promise-item__icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                </span>
                <span className="cat-promise-item__text">100% Quality Checks</span>
              </div>
              <div className="cat-promise-item">
                <span className="cat-promise-item__icon" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </span>
                <span className="cat-promise-item__text">Customisable Designs</span>
              </div>
            </div>
          </div>
          <div className="cat-promise-card__bottom">
            <button
              className="cat-promise-card__btn"
              onClick={() => openConsultation(null, 'quote')}
            >
              GET FREE QUOTE
            </button>
            <Link to="/about" className="cat-promise-card__link">
              Know more &gt;
            </Link>
          </div>
        </div>
      );
    }

    // Insert 2nd Promo card around position 10 (Screenshot 3)
    if (index === 9) {
      gridElements.push(
        <div key="promo-card-2" className={`cat-promo-card cat-promo-card--${promo2.theme}`}>
          <div>
            <span className="cat-promo-card__badge">Hyderabad Special</span>
            <h3 className="cat-promo-card__headline">{promo2.headline}</h3>
            <p className="cat-promo-card__subtext">{promo2.subtext}</p>
          </div>
          <button
            className="cat-promo-card__btn"
            onClick={() => openConsultation(null, 'consultation')}
          >
            {promo2.ctaText}
          </button>
        </div>
      );
    }

    // Regular Product Card (Screenshots 2, 3, 4)
    gridElements.push(
      <div key={design.id} className="cat-design-card">
        <div className="cat-design-card__image-container">
          <img
            src={design.image}
            alt={design.title}
            className="cat-design-card__image"
            loading="lazy"
          />
          <button
            className={`cat-design-card__wishlist-btn ${favorites[design.id] ? 'active' : ''}`}
            onClick={(e) => toggleFavorite(design.id, e)}
            aria-label="Save to Wishlist"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill={favorites[design.id] ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
          </button>
        </div>

        <div className="cat-design-card__content">
          <h3 className="cat-design-card__title" title={design.title}>
            {design.title}
          </h3>
          <p className="cat-design-card__spec">
            {design.spec}
          </p>

          <div className="cat-design-card__actions">
            <button
              className="cat-card-btn cat-card-btn--outline"
              onClick={() => openConsultation(design, 'consultation')}
            >
              <span className="cat-btn-full">Book Free Consultation</span>
              <span className="cat-btn-short">Free Consultation</span>
            </button>
            <button
              className="cat-card-btn cat-card-btn--solid"
              onClick={() => openConsultation(design, 'quote')}
            >
              Get Quote
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <main className="cat-page">
      <div className="container">
        {/* Breadcrumb Bar */}
        {breadcrumbItems && (
          <div className="cat-page__breadcrumb-wrap">
            <Breadcrumbs items={breadcrumbItems} />
          </div>
        )}

        {/* ── Screenshot 1: Intro Section ── */}
        <section className="cat-page__intro-section" aria-labelledby="cat-heading">
          <span className="cat-page__results-count">Showing {resultCount} for</span>
          <div className="cat-page__title-wrap">
            <div className="cat-page__title-bar" aria-hidden="true" />
            <h1 id="cat-heading" className="cat-page__title">{h1 || categoryName}</h1>
          </div>

          <div className="cat-page__intro-content">
            <p className="cat-page__intro-short">{shortIntro}</p>

            {extendedIntro && extendedIntro.length > 0 && (
              <>
                <div className={`cat-page__read-more-wrapper ${readMoreExpanded ? 'expanded' : 'collapsed'}`}>
                  {extendedIntro.map((paragraph, idx) => (
                    <p key={idx} className="cat-page__extended-text">{paragraph}</p>
                  ))}
                </div>

                <button
                  type="button"
                  className="cat-page__toggle-btn"
                  onClick={() => setReadMoreExpanded(!readMoreExpanded)}
                  aria-expanded={readMoreExpanded}
                >
                  {readMoreExpanded ? 'Read Less ↑' : 'Read More ↓'}
                </button>
              </>
            )}
          </div>
        </section>

        {/* ── Screenshot 1: Trending / Featured Section ── */}
        {trendingDesigns && trendingDesigns.length > 0 && (
          <section className="cat-page__trending-container" aria-label="Trending Designs">
            <div className="cat-page__trending-header">
              <div className="cat-page__flame-badge" aria-hidden="true">🔥</div>
              <div className="cat-page__trending-titles">
                <h2>{(trendingTitle || `Top Trending ${categoryName} Designs`).replace(/^🔥\s*/, '')}</h2>
                <p>{trendingSubtitle || 'Design ideas selected by Hyderabad homeowners this month'}</p>
              </div>
            </div>

            <div className="cat-page__trending-grid">
              {trendingDesigns.slice(0, 3).map((trend) => (
                <div key={trend.id} className="cat-trending-card">
                  <div className="cat-trending-card__img-wrap">
                    <img src={trend.image} alt={trend.title} loading="lazy" />
                    {trend.tag && <span className="cat-trending-card__badge">{trend.tag}</span>}
                  </div>
                  <div className="cat-trending-card__body">
                    <h3 className="cat-trending-card__title">{trend.title}</h3>
                    <p className="cat-trending-card__sub">{trend.subtitle}</p>
                    <div className="cat-trending-card__footer">
                      <span className="cat-trending-card__spec">{trend.spec || 'Premium Finish'}</span>
                      <button
                        className="cat-trending-card__cta"
                        onClick={() => openConsultation(trend, 'quote')}
                      >
                        Enquire →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Screenshots 2, 3, 4: Main 3-Column Listing Grid ── */}
        <section className="cat-page__main-listing" aria-label="All Designs">
          <div className="cat-page__grid-header">
            <div>
              <h2>Browse All {categoryName} Designs</h2>
              <span className="cat-page__grid-subtitle">
                Click any design to book a consultation or receive an instant custom quote
              </span>
            </div>
          </div>

          <div className="cat-page__grid">
            {gridElements}
          </div>
        </section>

        {/* ── Lead Generation / Consultation Section (Exact Reference Layout) ── */}
        <section className="cat-quote-split" aria-label="Consultation Request">
          <div className="cat-quote-split__visual">
            <img
              src={largeVisual || '/gallery/luxury-marble-fluted-panel-living-room.jpeg'}
              alt={`${categoryName} interior room design`}
              loading="lazy"
            />
          </div>

          <div className="cat-quote-split__form-panel">
            <div className="cat-quote-split__header">
              <h2>Designs for Every Budget</h2>
              <p>Get your dream walls today. Let our experts help you</p>
            </div>

            {!largeFormSubmitted ? (
              <form onSubmit={handleLargeFormSubmit} noValidate className="cat-quote-split__form">
                <div className="cat-quote-field">
                  <input
                    type="text"
                    className="cat-quote-input"
                    placeholder="Name *"
                    value={largeForm.name}
                    onChange={(e) => setLargeForm({ ...largeForm, name: e.target.value })}
                  />
                  {largeFormErrors.name && (
                    <span className="cat-quote-error">
                      {largeFormErrors.name}
                    </span>
                  )}
                </div>

                <div className="cat-quote-field">
                  <input
                    type="email"
                    className="cat-quote-input"
                    placeholder="Email"
                    value={largeForm.email}
                    onChange={(e) => setLargeForm({ ...largeForm, email: e.target.value })}
                  />
                </div>

                <div className="cat-quote-field">
                  <div className="cat-quote-phone-wrap">
                    <span className="cat-quote-flag">🇮🇳 ▾</span>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      value={largeForm.phone}
                      onChange={(e) => setLargeForm({ ...largeForm, phone: e.target.value })}
                    />
                  </div>
                  {largeFormErrors.phone && (
                    <span className="cat-quote-error">
                      {largeFormErrors.phone}
                    </span>
                  )}
                </div>

                <label className="cat-quote-checkbox">
                  <input
                    type="checkbox"
                    checked={largeForm.whatsappUpdates}
                    onChange={(e) => setLargeForm({ ...largeForm, whatsappUpdates: e.target.checked })}
                  />
                  <span>Send me updates on WhatsApp</span>
                </label>

                <div className="cat-quote-field">
                  <div className="cat-quote-select-wrap">
                    <select
                      className="cat-quote-select"
                      value={largeForm.room}
                      onChange={(e) => setLargeForm({ ...largeForm, room: e.target.value })}
                    >
                      <option value="">Select Room / Requirement</option>
                      <option value="Living Room">Living Room Accent Wall</option>
                      <option value="Master Bedroom">Master Bedroom</option>
                      <option value="TV Feature Wall">TV Feature Wall &amp; Louvers</option>
                      <option value="Dining Room">Dining Room</option>
                      <option value="Foyer & Staircase">Foyer &amp; Staircase</option>
                      <option value="Full Home Makeover">Complete Home Makeover</option>
                    </select>
                    <span className="cat-quote-select-arrow" aria-hidden="true">▾</span>
                  </div>
                </div>

                <button type="submit" className="cat-quote-submit-btn">
                  GET FREE QUOTE
                </button>

                <p className="cat-quote-disclaimer">
                  By submitting this form, you agree to the <Link to="/contact">privacy policy</Link> &amp; <Link to="/contact">terms and conditions</Link>
                </p>
              </form>
            ) : (
              <div className="cat-quote-success">
                <h3>✓ Quote Request Received!</h3>
                <p>
                  Thank you, <strong>{largeForm.name}</strong>. Our team in Hyderabad has received your request for <strong>{largeForm.room || categoryName}</strong>.
                </p>
                <a
                  href={getWhatsAppLink(`Hi CreateYouWallpapers, I submitted a quote request on your website for ${largeForm.room || categoryName}. Name: ${largeForm.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cat-quote-submit-btn"
                  style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
                >
                  Chat with Us on WhatsApp
                </a>
              </div>
            )}
          </div>
        </section>

        {/* ── Section 9: Continuation Content (FAQs & Related Categories) ── */}
        {faqs && faqs.length > 0 && (
          <section className="cat-page__faqs" aria-labelledby="faq-heading">
            <div className="section-header">
              <span className="section-eyebrow">Frequently Asked Questions</span>
              <h2 id="faq-heading">{categoryName} Questions &amp; Answers</h2>
              <p>Everything you need to know about material selection, maintenance, and Hyderabad installation.</p>
            </div>

            <div style={{ maxWidth: '880px', margin: '0 auto' }}>
              {faqs.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <div key={index} className="cat-faq-item">
                    <button
                      className="cat-faq-question"
                      onClick={() => setActiveFaq(isOpen ? null : index)}
                      aria-expanded={isOpen}
                    >
                      <span>{faq.q}</span>
                      <span className={`cat-faq-chevron ${isOpen ? 'open' : ''}`}>▾</span>
                    </button>
                    {isOpen && (
                      <div className="cat-faq-answer">
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Related Categories Grid */}
        {relatedCategories && relatedCategories.length > 0 && (
          <section className="cat-page__related" aria-labelledby="related-heading">
            <div className="section-header">
              <span className="section-eyebrow">Explore More Styles</span>
              <h2 id="related-heading">Complementary Wall Treatments</h2>
              <p>Discover design styles that pair harmoniously with {categoryName}.</p>
            </div>

            <div className="cat-related-grid">
              {relatedCategories.map((rel) => (
                <Link key={rel.url || rel.slug} to={rel.url || `/${rel.slug}`} className="cat-related-card">
                  <img src={rel.image} alt={rel.name} loading="lazy" />
                  <div className="cat-related-card__overlay">
                    <h3 className="cat-related-card__title">{rel.name}</h3>
                    <span className="cat-related-card__link">Explore Collection →</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Interactive Consultation / Quote Modal */}
      <ConsultationModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        design={modalState.design}
        categoryName={categoryName}
        modalType={modalState.type}
      />
    </main>
  );
}
