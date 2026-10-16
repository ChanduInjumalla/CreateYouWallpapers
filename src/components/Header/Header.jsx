import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { wallpaperCategories } from '../../data/wallpapers';
import { wallPanelCategories } from '../../data/wallPanels';
import { megaMenuData } from '../../data/siteData';
import { getPhoneLink, getWhatsAppLink } from '../../data/business';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Main top nav dropdown
  const [activeSubDropdown, setActiveSubDropdown] = useState(null); // 'offerings' | 'calculators' | null

  // Expandable accordions inside Offerings mega menu
  const [accordionState, setAccordionState] = useState({
    wallpaperComponents: true,
    panelComponents: true,
  });

  const headerRef = useRef(null);
  const subnavRef = useRef(null);
  const location = useLocation();
  const prevPathRef = useRef(location.pathname);

  // Close all menus on route change
  useEffect(() => {
    if (prevPathRef.current !== location.pathname) {
      prevPathRef.current = location.pathname;
      setMobileOpen(false);
      setActiveDropdown(null);
      setActiveSubDropdown(null);
    }
  }, [location.pathname]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll on mobile drawer
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Handle ESC and click-outside
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };

    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setActiveDropdown(null);
        setActiveSubDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEsc);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSubDropdown = (name) => {
    setActiveSubDropdown((prev) => (prev === name ? null : name));
  };

  const toggleAccordion = (key, e) => {
    e.preventDefault();
    e.stopPropagation();
    setAccordionState((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <header ref={headerRef} className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      {/* ============================================================
          TOP NAVIGATION BAR (Obsidian Luxury Brand Bar)
          ============================================================ */}
      <div className="header__top">
        <div className="header__inner container">
          {/* Logo */}
          <Link to="/" className="header__logo" aria-label="CreateYouWallpapers Home">
            <svg
              className="header__logo-icon"
              viewBox="0 0 38 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <rect x="2" y="10" width="8" height="22" rx="1.5" fill="currentColor" opacity="0.3" />
              <rect x="13" y="5" width="8" height="30" rx="1.5" fill="currentColor" opacity="0.55" />
              <rect x="24" y="10" width="8" height="22" rx="1.5" fill="currentColor" opacity="0.85" />
              <path d="M17 1 L21 5 L17 9 L13 5 Z" fill="currentColor" opacity="0.65" />
            </svg>
            <div className="header__logo-type">
              <span className="header__logo-brand">
                Create<em>You</em>
              </span>
              <span className="header__logo-sub">WALLPAPERS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="header__nav" aria-label="Main navigation">
            <ul className="header__nav-list">
              <li>
                <Link
                  to="/"
                  className={`header__nav-link ${location.pathname === '/' ? 'active' : ''}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`header__nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                >
                  About
                </Link>
              </li>

              {/* Wallpapers Dropdown */}
              <li
                className="header__nav-item--dropdown"
                onMouseEnter={() => setActiveDropdown('wallpapers')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/wallpapers"
                  className={`header__nav-link ${location.pathname.includes('wallpaper') ? 'active' : ''}`}
                >
                  Wallpapers <span className="header__nav-arrow">▾</span>
                </Link>
                {activeDropdown === 'wallpapers' && (
                  <div className="mega-menu mega-menu--wallpapers">
                    <div className="mega-menu__inner">
                      <div className="mega-menu__col">
                        <h4 className="mega-menu__heading">Wallpaper Styles</h4>
                        <div className="mega-menu__links">
                          {wallpaperCategories.map((w) => (
                            <Link key={w.id} to={w.url} className="mega-menu__link">
                              {w.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="mega-menu__col">
                        <h4 className="mega-menu__heading">Popular Rooms</h4>
                        <div className="mega-menu__links">
                          <Link to="/living-room-wallpaper" className="mega-menu__link">
                            Living Room
                          </Link>
                          <Link to="/bedroom-wallpaper" className="mega-menu__link">
                            Bedroom
                          </Link>
                          <Link to="/kids-room-wallpaper" className="mega-menu__link">
                            Kids Room
                          </Link>
                          <Link to="/tv-wall-designs" className="mega-menu__link">
                            TV Wall
                          </Link>
                          <Link to="/dining-room-wallpaper" className="mega-menu__link">
                            Dining Room
                          </Link>
                        </div>
                      </div>
                      <div className="mega-menu__col mega-menu__col--cta">
                        <div className="mega-menu__feature">
                          <h4 className="mega-menu__heading">Custom Wallpaper</h4>
                          <p>Design your own wallpaper with any high-res image, mural, or texture.</p>
                          <Link to="/custom-wallpaper" className="btn btn--primary btn--sm">
                            Explore Custom
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Wall Panels Dropdown */}
              <li
                className="header__nav-item--dropdown"
                onMouseEnter={() => setActiveDropdown('panels')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to="/wall-panels"
                  className={`header__nav-link ${
                    location.pathname.includes('panel') ||
                    location.pathname.includes('marble') ||
                    location.pathname.includes('mosaic') ||
                    location.pathname.includes('pu-') ||
                    location.pathname.includes('artificial') ||
                    location.pathname.includes('flooring')
                      ? 'active'
                      : ''
                  }`}
                >
                  Wall Panels <span className="header__nav-arrow">▾</span>
                </Link>
                {activeDropdown === 'panels' && (
                  <div className="mega-menu mega-menu--panels">
                    <div className="mega-menu__inner">
                      <div className="mega-menu__col">
                        <h4 className="mega-menu__heading">Wall Panels</h4>
                        <div className="mega-menu__links">
                          {wallPanelCategories.slice(0, 6).map((p) => (
                            <Link key={p.id} to={p.url} className="mega-menu__link">
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="mega-menu__col">
                        <h4 className="mega-menu__heading">Surfaces &amp; Flooring</h4>
                        <div className="mega-menu__links">
                          {wallPanelCategories.slice(6).map((p) => (
                            <Link key={p.id} to={p.url} className="mega-menu__link">
                              {p.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="mega-menu__col mega-menu__col--cta">
                        <div className="mega-menu__feature">
                          <h4 className="mega-menu__heading">Installation Service</h4>
                          <p>Professional panel installation and precision laser leveling by our master craftsmen.</p>
                          <Link to="/wall-panel-installation" className="btn btn--primary btn--sm">
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Services Dropdown */}
              <li
                className="header__nav-item--dropdown"
                onMouseEnter={() => setActiveDropdown('services')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className={`header__nav-link ${
                    location.pathname.includes('installation') ||
                    location.pathname.includes('feature') ||
                    location.pathname.includes('interior') ||
                    location.pathname.includes('commercial') ||
                    location.pathname.includes('makeover')
                      ? 'active'
                      : ''
                  }`}
                  onClick={() => setActiveDropdown((prev) => (prev === 'services' ? null : 'services'))}
                >
                  Services <span className="header__nav-arrow">▾</span>
                </button>
                {activeDropdown === 'services' && (
                  <div className="mega-menu mega-menu--services">
                    <div className="mega-menu__inner">
                      <div className="mega-menu__col">
                        <h4 className="mega-menu__heading">Core Services</h4>
                        <div className="mega-menu__links">
                          {megaMenuData.coreServices.map((s) => (
                            <Link key={s.name} to={s.url} className="mega-menu__link">
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="mega-menu__col">
                        <h4 className="mega-menu__heading">Finishes &amp; Surfaces</h4>
                        <div className="mega-menu__links">
                          {megaMenuData.finishes.map((s) => (
                            <Link key={s.name} to={s.url} className="mega-menu__link">
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                      <div className="mega-menu__col">
                        <h4 className="mega-menu__heading">Other Services</h4>
                        <div className="mega-menu__links">
                          {megaMenuData.otherServices.map((s) => (
                            <Link key={s.name} to={s.url} className="mega-menu__link">
                              {s.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              <li>
                <Link
                  to="/gallery"
                  className={`header__nav-link ${
                    location.pathname === '/gallery' || location.pathname === '/projects' ? 'active' : ''
                  }`}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`header__nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop Actions */}
          <div className="header__actions">
            <a href={getPhoneLink()} className="header__action-btn header__action-btn--call" aria-label="Call Now">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call
            </a>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="header__action-btn header__action-btn--whatsapp"
              aria-label="WhatsApp"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492l4.598-1.47A11.942 11.942 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-2.168 0-4.19-.593-5.934-1.621l-.424-.252-2.727.871.89-2.661-.278-.44A9.773 9.773 0 012.182 12c0-5.423 4.395-9.818 9.818-9.818S21.818 6.577 21.818 12s-4.395 9.818-9.818 9.818z" />
              </svg>
              WhatsApp
            </a>
            <Link to="/get-quote" className="header__action-btn header__action-btn--quote">
              Get Quote
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`header__hamburger ${mobileOpen ? 'header__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* ============================================================
          SECONDARY SUB-NAVBAR (Light Elegance Bar with Layered Shadow)
          ============================================================ */}
      <div className="header__subnav" ref={subnavRef}>
        <div className="header__subnav-inner container">
          {/* Left Navigation Links */}
          <div className="header__subnav-links">
            {/* 1. How it works */}
            <Link
              to="/how-it-works"
              className={`header__subnav-link ${location.pathname === '/how-it-works' ? 'active' : ''}`}
            >
              How it works
            </Link>

            {/* 2. Offerings Dropdown (Mega Menu) */}
            <div
              className="header__subnav-item--dropdown"
              onMouseEnter={() => setActiveSubDropdown('offerings')}
              onMouseLeave={() => setActiveSubDropdown(null)}
            >
              <button
                type="button"
                className={`header__subnav-link header__subnav-trigger ${
                  activeSubDropdown === 'offerings' ? 'active' : ''
                }`}
                onClick={() => toggleSubDropdown('offerings')}
                aria-expanded={activeSubDropdown === 'offerings'}
              >
                <span>Offerings</span>
                <svg
                  className={`header__subnav-chevron ${activeSubDropdown === 'offerings' ? 'rotate' : ''}`}
                  width="9"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M1 1L5 5L9 1" />
                </svg>
              </button>

              {/* Offerings Mega Menu Panel */}
              {activeSubDropdown === 'offerings' && (
                <div className="subnav-mega-menu">
                  <div className="subnav-mega-menu__container">
                    {/* Left Column: 4 Visual Cards */}
                    <div className="subnav-mega-col--cards">
                      <div className="subnav-col-title">EXPLORE OFFERINGS</div>
                      <div className="subnav-cards-list">
                        <Link
                          to="/wallpapers"
                          className="subnav-card-item"
                          onClick={() => setActiveSubDropdown(null)}
                        >
                          <img
                            src="/gallery/gold-leaf-pattern-wallpaper.jpeg"
                            alt="Designer Wallpapers"
                            className="subnav-card-img"
                            loading="lazy"
                          />
                          <div className="subnav-card-text">
                            <h4>Designer Wallpapers</h4>
                            <p>Textures, bespoke murals &amp; metallics</p>
                          </div>
                        </Link>

                        <Link
                          to="/wall-panels"
                          className="subnav-card-item"
                          onClick={() => setActiveSubDropdown(null)}
                        >
                          <img
                            src="/gallery/wpc-fluted-panels-color-range.jpeg"
                            alt="3D & Fluted Panels"
                            className="subnav-card-img"
                            loading="lazy"
                          />
                          <div className="subnav-card-text">
                            <h4>3D &amp; Fluted Panels</h4>
                            <p>Acoustic louvers &amp; charcoal panels</p>
                          </div>
                        </Link>

                        <Link
                          to="/uv-marble-sheets"
                          className="subnav-card-item"
                          onClick={() => setActiveSubDropdown(null)}
                        >
                          <img
                            src="/gallery/luxury-marble-fluted-panel-living-room.jpeg"
                            alt="UV Marble Sheets"
                            className="subnav-card-img"
                            loading="lazy"
                          />
                          <div className="subnav-card-text">
                            <h4>UV Marble &amp; PU Stone</h4>
                            <p>Seamless marble &amp; stone veneers</p>
                          </div>
                        </Link>

                        <Link
                          to="/rooms"
                          className="subnav-card-item"
                          onClick={() => setActiveSubDropdown(null)}
                        >
                          <img
                            src="/gallery/marble-fluted-panel-tv-wall.jpeg"
                            alt="Full Room Makeovers"
                            className="subnav-card-img"
                            loading="lazy"
                          />
                          <div className="subnav-card-text">
                            <h4>Full Room Makeovers</h4>
                            <p>Turnkey TV walls, foyers &amp; lounges</p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Middle Column: Wallpapers with Accordion */}
                    <div className="subnav-mega-col">
                      <div className="subnav-col-title">WALLPAPERS</div>
                      <div className="subnav-col-nav">
                        <Link
                          to="/wallpapers"
                          className="subnav-direct-link"
                          onClick={() => setActiveSubDropdown(null)}
                        >
                          Know Your Wallpapers
                        </Link>
                        <Link
                          to="/price-calculator"
                          className="subnav-direct-link"
                          onClick={() => setActiveSubDropdown(null)}
                        >
                          Wallpaper Price Calculator
                        </Link>

                        {/* Accordion: Wallpaper Collections */}
                        <div className="subnav-accordion">
                          <button
                            type="button"
                            className="subnav-accordion__header"
                            onClick={(e) => toggleAccordion('wallpaperComponents', e)}
                          >
                            <span className={accordionState.wallpaperComponents ? 'highlighted' : ''}>
                              Wallpaper Collections
                            </span>
                            <span className="subnav-accordion__toggle">
                              {accordionState.wallpaperComponents ? '−' : '+'}
                            </span>
                          </button>

                          {accordionState.wallpaperComponents && (
                            <div className="subnav-accordion__body">
                              <Link
                                to="/floral-wallpaper"
                                className="subnav-accordion__link"
                                onClick={() => setActiveSubDropdown(null)}
                              >
                                Floral &amp; Botanical
                              </Link>
                              <Link
                                to="/geometric-wallpaper"
                                className="subnav-accordion__link"
                                onClick={() => setActiveSubDropdown(null)}
                              >
                                Geometric &amp; Modern
                              </Link>
                              <Link
                                to="/marble-effect-wallpaper"
                                className="subnav-accordion__link"
                                onClick={() => setActiveSubDropdown(null)}
                              >
                                Marble Effect
                              </Link>
                              <Link
                                to="/3d-wallpaper"
                                className="subnav-accordion__link"
                                onClick={() => setActiveSubDropdown(null)}
                              >
                                3D Optical Murals
                              </Link>
                              <Link
                                to="/custom-wallpaper"
                                className="subnav-accordion__link"
                                onClick={() => setActiveSubDropdown(null)}
                              >
                                Bespoke Custom Murals
                              </Link>
                              <Link
                                to="/metallic-wallpaper"
                                className="subnav-accordion__link"
                                onClick={() => setActiveSubDropdown(null)}
                              >
                                Metallic &amp; Gold Leaf
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Wall Panels & Louvers with Accordion */}
                    <div className="subnav-mega-col">
                      <div className="subnav-col-title">WALL PANELS</div>
                      <div className="subnav-col-nav">
                        <Link
                          to="/wall-panels"
                          className="subnav-direct-link"
                          onClick={() => setActiveSubDropdown(null)}
                        >
                          Know Your Wall Panels
                        </Link>
                        <Link
                          to="/price-calculator"
                          className="subnav-direct-link"
                          onClick={() => setActiveSubDropdown(null)}
                        >
                          Wall Panel Price Calculator
                        </Link>

                        {/* Accordion: Wall Panel Components */}
                        <div className="subnav-accordion">
                          <button
                            type="button"
                            className="subnav-accordion__header"
                            onClick={(e) => toggleAccordion('panelComponents', e)}
                          >
                            <span className={accordionState.panelComponents ? 'highlighted' : ''}>
                              Panel Components
                            </span>
                            <span className="subnav-accordion__toggle">
                              {accordionState.panelComponents ? '−' : '+'}
                            </span>
                          </button>

                          {accordionState.panelComponents && (
                            <div className="subnav-accordion__body">
                              <Link
                                to="/fluted-panels"
                                className="subnav-accordion__link"
                                onClick={() => setActiveSubDropdown(null)}
                              >
                                Fluted &amp; Louver Panels
                              </Link>
                              <Link
                                to="/charcoal-panels"
                                className="subnav-accordion__link"
                                onClick={() => setActiveSubDropdown(null)}
                              >
                                Charcoal Wall Panels
                              </Link>
                              <Link
                                to="/pvc-panels"
                                className="subnav-accordion__link"
                                onClick={() => setActiveSubDropdown(null)}
                              >
                                PVC Architectural Sheets
                              </Link>
                              <Link
                                to="/pu-stone"
                                className="subnav-accordion__link"
                                onClick={() => setActiveSubDropdown(null)}
                              >
                                PU Lightweight Stone
                              </Link>
                              <Link
                                to="/uv-marble-sheets"
                                className="subnav-accordion__link"
                                onClick={() => setActiveSubDropdown(null)}
                              >
                                UV High-Gloss Marble
                              </Link>
                              <Link
                                to="/wooden-flooring"
                                className="subnav-accordion__link"
                                onClick={() => setActiveSubDropdown(null)}
                              >
                                Wooden &amp; WPC Louvers
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 3. Price Calculators Dropdown */}
            <div
              className="header__subnav-item--dropdown"
              onMouseEnter={() => setActiveSubDropdown('calculators')}
              onMouseLeave={() => setActiveSubDropdown(null)}
            >
              <button
                type="button"
                className={`header__subnav-link header__subnav-trigger ${
                  activeSubDropdown === 'calculators' ? 'active' : ''
                }`}
                onClick={() => toggleSubDropdown('calculators')}
                aria-expanded={activeSubDropdown === 'calculators'}
              >
                <span>Price Calculators</span>
                <svg
                  className={`header__subnav-chevron ${activeSubDropdown === 'calculators' ? 'rotate' : ''}`}
                  width="9"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M1 1L5 5L9 1" />
                </svg>
              </button>

              {activeSubDropdown === 'calculators' && (
                <div className="subnav-calc-menu">
                  <Link
                    to="/price-calculator"
                    className="subnav-calc-link"
                    onClick={() => setActiveSubDropdown(null)}
                  >
                    Home Interior Wall Calculator
                  </Link>
                  <Link
                    to="/price-calculator"
                    className="subnav-calc-link"
                    onClick={() => setActiveSubDropdown(null)}
                  >
                    Wallpaper Price Calculator
                  </Link>
                  <Link
                    to="/price-calculator"
                    className="subnav-calc-link"
                    onClick={() => setActiveSubDropdown(null)}
                  >
                    Wall Panel Price Calculator
                  </Link>
                </div>
              )}
            </div>

            {/* 4. The Wall Journey */}
            <Link
              to="/how-it-works"
              className={`header__subnav-link ${location.pathname === '/how-it-works' ? 'active' : ''}`}
            >
              The Wall Journey
            </Link>

            {/* 5. Own a franchise */}
            <Link
              to="/franchise"
              className={`header__subnav-link ${location.pathname === '/franchise' ? 'active' : ''}`}
            >
              Own a franchise
            </Link>

            {/* 6. Become a Partner */}
            <Link
              to="/partner"
              className={`header__subnav-link ${location.pathname === '/partner' ? 'active' : ''}`}
            >
              Become a Partner
            </Link>
          </div>

          {/* Right Consultation Curvy Pill Button */}
          <div className="header__subnav-right">
            <Link to="/get-quote" className="header__subnav-consult-btn">
              CONSULT ONLINE NOW
            </Link>
          </div>
        </div>
      </div>

      {/* ============================================================
          MOBILE DRAWER MENU & OVERLAY
          ============================================================ */}
      {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />}
      <div className={`mobile-menu ${mobileOpen ? 'mobile-menu--open' : ''}`}>
        <nav aria-label="Mobile navigation">
          <Link to="/" className="mobile-menu__link" onClick={() => setMobileOpen(false)}>
            Home
          </Link>
          <Link to="/about" className="mobile-menu__link" onClick={() => setMobileOpen(false)}>
            About Us
          </Link>
          <Link to="/wallpapers" className="mobile-menu__link" onClick={() => setMobileOpen(false)}>
            Wallpapers
          </Link>
          <Link to="/wall-panels" className="mobile-menu__link" onClick={() => setMobileOpen(false)}>
            Wall Panels
          </Link>
          <Link to="/rooms" className="mobile-menu__link" onClick={() => setMobileOpen(false)}>
            Rooms
          </Link>
          <Link to="/price-calculator" className="mobile-menu__link mobile-menu__link--accent" onClick={() => setMobileOpen(false)}>
            Price Calculators
          </Link>
          <Link to="/how-it-works" className="mobile-menu__link" onClick={() => setMobileOpen(false)}>
            How It Works / The Wall Journey
          </Link>
          <Link to="/franchise" className="mobile-menu__link" onClick={() => setMobileOpen(false)}>
            Own a Franchise
          </Link>
          <Link to="/partner" className="mobile-menu__link" onClick={() => setMobileOpen(false)}>
            Become a Partner
          </Link>
          <Link to="/gallery" className="mobile-menu__link" onClick={() => setMobileOpen(false)}>
            Gallery &amp; Projects
          </Link>
          <Link to="/contact" className="mobile-menu__link" onClick={() => setMobileOpen(false)}>
            Contact
          </Link>

          <div className="mobile-menu__divider" />
          <Link
            to="/get-quote"
            className="mobile-menu__link mobile-menu__link--cta"
            onClick={() => setMobileOpen(false)}
          >
            Consult Online Now
          </Link>
          <a href={getPhoneLink()} className="mobile-menu__link">
            Call Now: +91 91219 92350
          </a>
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-menu__link"
          >
            WhatsApp Support
          </a>
        </nav>
      </div>
    </header>
  );
}
