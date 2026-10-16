import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { getWhatsAppLink } from '../../data/business';
import './PriceCalculator.css';

export default function PriceCalculator() {
  useSEO({
    title: 'Wallpaper & Wall Panel Price Calculator Hyderabad | CreateYouWallpapers',
    description: 'Calculate instant costs for wallpapers, 3D wall panels, UV marble sheets, and fluted louvers. Get transparent pricing with installation in Hyderabad.',
  });

  const [activeTab, setActiveTab] = useState('wallpaper');

  // Wallpaper Calculator State
  const [wpWidth, setWpWidth] = useState(12);
  const [wpHeight, setWpHeight] = useState(10);
  const [wpSubstrate, setWpSubstrate] = useState('vinyl');

  // Panel Calculator State
  const [panelWidth, setPanelWidth] = useState(10);
  const [panelHeight, setPanelHeight] = useState(9);
  const [panelType, setPanelType] = useState('fluted');

  // Room Estimator State
  const [roomType, setRoomType] = useState('living');
  const [budgetTier, setBudgetTier] = useState('premium');

  // Substrate pricing per sq.ft (includes substrate + installation)
  const substrateRates = {
    vinyl: { name: 'Commercial Washable Vinyl', rate: 45, rollSize: 57, desc: 'Waterproof, wipe-clean, ideal for high traffic areas' },
    nonwoven: { name: 'Textured Non-Woven Canvas', rate: 75, rollSize: 57, desc: 'Breathable, seamless fabric look, moisture resistant' },
    customMural: { name: 'Seamless Custom Sized Mural', rate: 110, rollSize: null, desc: 'High-res seamless print scaled to your exact wall proportions' },
    metallic: { name: 'Luxury Gold Foil & Metallic Leaf', rate: 135, rollSize: 57, desc: 'Reflective gold, copper, and champagne inlays with 3D embossing' },
  };

  // Panel pricing per sq.ft (includes panel + fitting accessories + labor)
  const panelRates = {
    fluted: { name: 'WPC Fluted Louver Panels', rate: 145, desc: 'Waterproof, termite-proof vertical grooves with hidden clips' },
    uvMarble: { name: 'UV Marble High Gloss Sheets (8x4 ft)', rate: 185, desc: 'Mirror finish seamless faux Italian marble with T-profiles' },
    charcoal: { name: 'Charcoal Acoustic Louvers', rate: 220, desc: 'Sound-dampening luxury charcoal polymer slats with LED channels' },
    puStone: { name: 'PU Stone Cladding Slabs', rate: 260, desc: 'Ultra-lightweight featherweight realistic rock & slate textures' },
  };

  // Calculations
  const wpArea = Math.max(1, wpWidth * wpHeight);
  const wpRateObj = substrateRates[wpSubstrate];
  const wpTotalCost = Math.round(wpArea * wpRateObj.rate);
  const wpRolls = wpRateObj.rollSize ? Math.ceil((wpArea * 1.12) / wpRateObj.rollSize) : null; // 12% wastage

  const panelArea = Math.max(1, panelWidth * panelHeight);
  const panelRateObj = panelRates[panelType];
  const panelTotalCost = Math.round(panelArea * panelRateObj.rate);

  // Room estimate data
  const roomEstimates = {
    living: {
      title: 'Living Room Accent / TV Feature Wall',
      size: '14 x 10 ft (140 sq.ft)',
      value: { min: 6500, max: 9500, spec: 'Designer Washable Wallpaper + Border Trims' },
      premium: { min: 18000, max: 26000, spec: 'Custom Silk Mural + 2 Sides WPC Fluted Louvers' },
      luxury: { min: 32000, max: 48000, spec: 'Bookmatched UV Marble Center + Charcoal Louvers + Warm COB LEDs' },
    },
    bedroom: {
      title: 'Master Bedroom Bedback Feature Wall',
      size: '12 x 10 ft (120 sq.ft)',
      value: { min: 5500, max: 8000, spec: 'Textured Floral or Geometric Non-Woven Wallpaper' },
      premium: { min: 15000, max: 22000, spec: 'Customized Panorama Landscape Mural + Acoustic Soft Louvers' },
      luxury: { min: 28000, max: 42000, spec: 'PU Leather Accent Slabs + Fluted Wood Louver Framing' },
    },
    foyer: {
      title: 'Entrance Foyer & Staircase Wall',
      size: '10 x 9 ft (90 sq.ft)',
      value: { min: 4200, max: 6200, spec: 'Heavy Texture Linen Wallpaper' },
      premium: { min: 12000, max: 17000, spec: 'Full-Height Fluted Panels with Brass Profile Inlays' },
      luxury: { min: 22000, max: 32000, spec: 'PU Featherweight Stone Cladding + Backlit Downlights' },
    },
  };

  const currentRoomEstimate = roomEstimates[roomType][budgetTier];

  return (
    <main className="calc-page">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'Price Calculator', path: '/price-calculator' },
          ]}
        />

        <div className="calc-hero">
          <span className="calc-hero__badge">Instant Cost Estimator</span>
          <h1 className="calc-hero__title">Interior Wall Price Calculator</h1>
          <p className="calc-hero__sub">
            Calculate estimated material and installation costs for wallpapers, fluted louvers, and UV marble sheets across Hyderabad with transparent per-sq.ft pricing.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="calc-tabs" role="tablist">
          <button
            role="tab"
            aria-selected={activeTab === 'wallpaper'}
            className={`calc-tab ${activeTab === 'wallpaper' ? 'active' : ''}`}
            onClick={() => setActiveTab('wallpaper')}
          >
            <span className="calc-tab__icon">🖼️</span>
            Wallpaper Cost Calculator
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'panel'}
            className={`calc-tab ${activeTab === 'panel' ? 'active' : ''}`}
            onClick={() => setActiveTab('panel')}
          >
            <span className="calc-tab__icon">🪵</span>
            Wall Panel Cost Calculator
          </button>
          <button
            role="tab"
            aria-selected={activeTab === 'room'}
            className={`calc-tab ${activeTab === 'room' ? 'active' : ''}`}
            onClick={() => setActiveTab('room')}
          >
            <span className="calc-tab__icon">🏠</span>
            Full Room Budget Estimator
          </button>
        </div>

        {/* ── TAB 1: WALLPAPER CALCULATOR ── */}
        {activeTab === 'wallpaper' && (
          <div className="calc-card">
            <div className="calc-grid">
              <div className="calc-inputs">
                <h3 className="calc-section-title">1. Enter Wall Dimensions</h3>
                <div className="calc-dim-row">
                  <div className="calc-field">
                    <label>Wall Width (Feet)</label>
                    <div className="calc-num-input">
                      <input
                        type="number"
                        min="3"
                        max="60"
                        value={wpWidth}
                        onChange={(e) => setWpWidth(Math.max(1, Number(e.target.value)))}
                      />
                      <span>ft</span>
                    </div>
                  </div>
                  <div className="calc-field">
                    <label>Wall Height (Feet)</label>
                    <div className="calc-num-input">
                      <input
                        type="number"
                        min="3"
                        max="30"
                        value={wpHeight}
                        onChange={(e) => setWpHeight(Math.max(1, Number(e.target.value)))}
                      />
                      <span>ft</span>
                    </div>
                  </div>
                </div>

                <h3 className="calc-section-title" style={{ marginTop: '24px' }}>2. Choose Material Substrate</h3>
                <div className="calc-options">
                  {Object.entries(substrateRates).map(([key, data]) => (
                    <label
                      key={key}
                      className={`calc-option-label ${wpSubstrate === key ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="wpSubstrate"
                        value={key}
                        checked={wpSubstrate === key}
                        onChange={() => setWpSubstrate(key)}
                      />
                      <div className="calc-option-content">
                        <div className="calc-option-top">
                          <strong>{data.name}</strong>
                          <span className="calc-option-price">₹{data.rate}/sq.ft</span>
                        </div>
                        <p className="calc-option-desc">{data.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Result Summary Box */}
              <div className="calc-summary">
                <div className="calc-summary__box">
                  <span className="calc-summary__eyebrow">Estimated Investment</span>
                  <div className="calc-summary__price">
                    ₹{wpTotalCost.toLocaleString('en-IN')}
                    <span className="calc-summary__approx">*approx</span>
                  </div>
                  <p className="calc-summary__note">
                    Includes material + professional Hyderabad laser installation + surface primer.
                  </p>

                  <div className="calc-summary__breakdown">
                    <div className="calc-summary__row">
                      <span>Total Wall Area:</span>
                      <strong>{wpArea} sq.ft</strong>
                    </div>
                    {wpRolls && (
                      <div className="calc-summary__row">
                        <span>Standard Rolls Needed:</span>
                        <strong>{wpRolls} Rolls (57 sq.ft/roll)</strong>
                      </div>
                    )}
                    <div className="calc-summary__row">
                      <span>Selected Substrate:</span>
                      <strong>{wpRateObj.name}</strong>
                    </div>
                    <div className="calc-summary__row">
                      <span>Rate (with fitting):</span>
                      <strong>₹{wpRateObj.rate} per sq.ft</strong>
                    </div>
                    <div className="calc-summary__row">
                      <span>Installation Timeline:</span>
                      <strong style={{ color: '#2E7D32' }}>Same-Day (2-4 Hours)</strong>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppLink(`Hi CreateYouWallpapers, I used your Wallpaper Calculator: Wall size ${wpWidth}x${wpHeight} ft (${wpArea} sq.ft), Substrate: ${wpRateObj.name}. Estimated quote is ₹${wpTotalCost}. Please send official catalog and schedule free laser measurement.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary calc-cta-btn"
                  >
                    <span>Get Exact Quote on WhatsApp</span>
                    <span>→</span>
                  </a>

                  <Link to="/get-quote" className="calc-quote-alt-link">
                    Or book free doorstep catalog visit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 2: WALL PANEL CALCULATOR ── */}
        {activeTab === 'panel' && (
          <div className="calc-card">
            <div className="calc-grid">
              <div className="calc-inputs">
                <h3 className="calc-section-title">1. Enter Wall Dimensions</h3>
                <div className="calc-dim-row">
                  <div className="calc-field">
                    <label>Wall Width (Feet)</label>
                    <div className="calc-num-input">
                      <input
                        type="number"
                        min="3"
                        max="60"
                        value={panelWidth}
                        onChange={(e) => setPanelWidth(Math.max(1, Number(e.target.value)))}
                      />
                      <span>ft</span>
                    </div>
                  </div>
                  <div className="calc-field">
                    <label>Wall Height (Feet)</label>
                    <div className="calc-num-input">
                      <input
                        type="number"
                        min="3"
                        max="30"
                        value={panelHeight}
                        onChange={(e) => setPanelHeight(Math.max(1, Number(e.target.value)))}
                      />
                      <span>ft</span>
                    </div>
                  </div>
                </div>

                <h3 className="calc-section-title" style={{ marginTop: '24px' }}>2. Choose Panel System</h3>
                <div className="calc-options">
                  {Object.entries(panelRates).map(([key, data]) => (
                    <label
                      key={key}
                      className={`calc-option-label ${panelType === key ? 'selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name="panelType"
                        value={key}
                        checked={panelType === key}
                        onChange={() => setPanelType(key)}
                      />
                      <div className="calc-option-content">
                        <div className="calc-option-top">
                          <strong>{data.name}</strong>
                          <span className="calc-option-price">₹{data.rate}/sq.ft</span>
                        </div>
                        <p className="calc-option-desc">{data.desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Result Summary Box */}
              <div className="calc-summary">
                <div className="calc-summary__box">
                  <span className="calc-summary__eyebrow">Estimated Investment</span>
                  <div className="calc-summary__price">
                    ₹{panelTotalCost.toLocaleString('en-IN')}
                    <span className="calc-summary__approx">*approx</span>
                  </div>
                  <p className="calc-summary__note">
                    Includes panels + aluminum/corner profiles + industrial sealant + carpentry fitting.
                  </p>

                  <div className="calc-summary__breakdown">
                    <div className="calc-summary__row">
                      <span>Total Wall Area:</span>
                      <strong>{panelArea} sq.ft</strong>
                    </div>
                    <div className="calc-summary__row">
                      <span>Panel System:</span>
                      <strong>{panelRateObj.name}</strong>
                    </div>
                    <div className="calc-summary__row">
                      <span>Rate (Panels + Fitting):</span>
                      <strong>₹{panelRateObj.rate} per sq.ft</strong>
                    </div>
                    <div className="calc-summary__row">
                      <span>Warranty:</span>
                      <strong style={{ color: 'var(--color-gold-dark)' }}>10-Year Anti-Termite &amp; Moisture</strong>
                    </div>
                    <div className="calc-summary__row">
                      <span>Installation:</span>
                      <strong>1-Day Master Handover</strong>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppLink(`Hi CreateYouWallpapers, I used your Wall Panel Calculator: Wall size ${panelWidth}x${panelHeight} ft (${panelArea} sq.ft), Panel: ${panelRateObj.name}. Estimated quote is ₹${panelTotalCost}. Please send catalog and sample kit.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary calc-cta-btn"
                  >
                    <span>Get Exact Quote on WhatsApp</span>
                    <span>→</span>
                  </a>

                  <Link to="/get-quote" className="calc-quote-alt-link">
                    Or book laser measurement visit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── TAB 3: FULL ROOM ESTIMATOR ── */}
        {activeTab === 'room' && (
          <div className="calc-card">
            <div className="calc-grid">
              <div className="calc-inputs">
                <h3 className="calc-section-title">1. Select Target Room Feature</h3>
                <div className="calc-pills-selector">
                  <button
                    className={`calc-pill ${roomType === 'living' ? 'selected' : ''}`}
                    onClick={() => setRoomType('living')}
                  >
                    Living Room / TV Wall
                  </button>
                  <button
                    className={`calc-pill ${roomType === 'bedroom' ? 'selected' : ''}`}
                    onClick={() => setRoomType('bedroom')}
                  >
                    Master Bedroom Bedback
                  </button>
                  <button
                    className={`calc-pill ${roomType === 'foyer' ? 'selected' : ''}`}
                    onClick={() => setRoomType('foyer')}
                  >
                    Foyer / Staircase Wall
                  </button>
                </div>

                <h3 className="calc-section-title" style={{ marginTop: '24px' }}>2. Choose Finish Level</h3>
                <div className="calc-tier-selector">
                  <button
                    className={`calc-tier-btn ${budgetTier === 'value' ? 'selected' : ''}`}
                    onClick={() => setBudgetTier('value')}
                  >
                    <span className="calc-tier-badge">Smart Budget</span>
                    <strong>Value Finish</strong>
                    <span className="calc-tier-desc">Durable vinyl &amp; non-woven wallpapers</span>
                  </button>
                  <button
                    className={`calc-tier-btn ${budgetTier === 'premium' ? 'selected' : ''}`}
                    onClick={() => setBudgetTier('premium')}
                  >
                    <span className="calc-tier-badge calc-tier-badge--gold">Most Popular</span>
                    <strong>Premium Blend</strong>
                    <span className="calc-tier-desc">Mural wallpaper + fluted louver accents</span>
                  </button>
                  <button
                    className={`calc-tier-btn ${budgetTier === 'luxury' ? 'selected' : ''}`}
                    onClick={() => setBudgetTier('luxury')}
                  >
                    <span className="calc-tier-badge">Ultra Luxury</span>
                    <strong>Signature Bespoke</strong>
                    <span className="calc-tier-desc">UV Marble + Acoustic Slats + Profile LEDs</span>
                  </button>
                </div>
              </div>

              {/* Room Summary Box */}
              <div className="calc-summary">
                <div className="calc-summary__box">
                  <span className="calc-summary__eyebrow">Estimated Room Budget</span>
                  <div className="calc-summary__price">
                    ₹{currentRoomEstimate.min.toLocaleString('en-IN')} - ₹{currentRoomEstimate.max.toLocaleString('en-IN')}
                  </div>
                  <p className="calc-summary__note">
                    Full turnkey wall transformation for standard {roomEstimates[roomType].size}.
                  </p>

                  <div className="calc-summary__breakdown">
                    <div className="calc-summary__row">
                      <span>Room Space:</span>
                      <strong>{roomEstimates[roomType].title}</strong>
                    </div>
                    <div className="calc-summary__row">
                      <span>Recommended Spec:</span>
                      <strong>{currentRoomEstimate.spec}</strong>
                    </div>
                    <div className="calc-summary__row">
                      <span>Scope:</span>
                      <strong>Material + 3D Mockup + Laser Fitting</strong>
                    </div>
                    <div className="calc-summary__row">
                      <span>Warranty:</span>
                      <strong style={{ color: 'var(--color-gold-dark)' }}>10 Years Comprehensive</strong>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppLink(`Hi CreateYouWallpapers, I used your Room Budget Estimator for ${roomEstimates[roomType].title} (${budgetTier.toUpperCase()} tier, ₹${currentRoomEstimate.min} - ₹${currentRoomEstimate.max}). Please send catalogs and design recommendations.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary calc-cta-btn"
                  >
                    <span>Discuss My Room on WhatsApp</span>
                    <span>→</span>
                  </a>

                  <Link to="/get-quote" className="calc-quote-alt-link">
                    Book Free Doorstep Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Value Props & Trust Banner */}
        <div className="calc-trust-strip">
          <div className="calc-trust-item">
            <span className="calc-trust-icon">📐</span>
            <div>
              <strong>Laser Measurement</strong>
              <p>Millimeter-accurate wall measurement at your doorstep</p>
            </div>
          </div>
          <div className="calc-trust-item">
            <span className="calc-trust-icon">🎨</span>
            <div>
              <strong>Free 3D Mockup</strong>
              <p>Preview wallpaper/panels on your actual room photo</p>
            </div>
          </div>
          <div className="calc-trust-item">
            <span className="calc-trust-icon">⚡</span>
            <div>
              <strong>1-Day Installation</strong>
              <p>Zero dust, zero mess execution by in-house carpenters</p>
            </div>
          </div>
          <div className="calc-trust-item">
            <span className="calc-trust-icon">🛡️</span>
            <div>
              <strong>10-Year Warranty</strong>
              <p>Anti-termite, moisture-proof and fade-resistant guarantee</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
