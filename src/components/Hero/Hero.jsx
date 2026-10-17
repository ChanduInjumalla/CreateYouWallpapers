import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Hero.css';

const DEFAULT_SLIDES = [
  {
    id: 1,
    image: '/images/hero/hero-wallpaper-living.jpg',
    alt: 'Luxury architectural living room with bespoke designer wallpaper mural feature wall',
    title: 'Home to beautiful wall interiors',
    ctaText: 'BOOK FREE CONSULTATION',
    ctaType: 'consult',
    ctaUrl: '/get-quote',
  },
  {
    id: 2,
    image: '/images/hero/hero-fluted-living.jpg',
    alt: 'Modern living room with vertical fluted wall panels and UV marble slab entertainment wall',
    title: 'Want to know how much your wall interiors will cost?',
    ctaText: 'CALCULATE NOW',
    ctaType: 'link',
    ctaUrl: '/price-calculator',
  },
  {
    id: 3,
    image: '/images/hero/hero-geometric-living.jpg',
    alt: 'High-end dining and living space featuring 3D geometric wall panels and designer wallpaper',
    title: "Introducing India's first lifetime warranty on wall styling*",
    ctaText: 'BOOK FREE CONSULTATION',
    ctaType: 'consult',
    ctaUrl: '/get-quote',
  },
];

export default function Hero({
  slides = DEFAULT_SLIDES,
  onOpenConsultation,
  autoPlayInterval = 6000,
  children,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);
  const navigate = useNavigate();

  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
  };

  // Auto-play timer
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;
    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused, totalSlides, autoPlayInterval]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartXRef.current - touchEndXRef.current;
    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const handleCtaClick = (slide, e) => {
    if (slide.ctaType === 'consult' && onOpenConsultation) {
      e.preventDefault();
      onOpenConsultation();
    } else if (slide.ctaUrl) {
      navigate(slide.ctaUrl);
    }
  };

  const activeSlide = slides[currentSlide];

  return (
    <section
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-label="Wallpaper and 3D Wall Panel Design Showcase"
    >
      {/* Background Slides */}
      <div className="hero-slider__track">
        {slides.map((slide, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={slide.id || idx}
              className={`hero-slide ${isActive ? 'hero-slide--active' : ''}`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.alt || slide.title}
                className="hero-slide__image"
                loading={idx === 0 ? 'eager' : 'lazy'}
              />
              <div className="hero-slide__overlay" />
            </div>
          );
        })}
      </div>

      {/* Slide Content Area (100% Minimalist: Just Title & Curvy Pill Button) */}
      <div className="hero-slider__content">
        <div className="hero-slider__text-box">
          <h1 key={activeSlide.id} className="hero-slider__title">
            {activeSlide.title}
          </h1>

          <div className="hero-slider__cta-wrapper">
            {activeSlide.ctaType === 'consult' && onOpenConsultation ? (
              <button
                type="button"
                className="hero-slider__pill-btn"
                onClick={(e) => handleCtaClick(activeSlide, e)}
              >
                {activeSlide.ctaText}
              </button>
            ) : (
              <Link
                to={activeSlide.ctaUrl || '/wallpapers'}
                className="hero-slider__pill-btn"
                onClick={(e) => handleCtaClick(activeSlide, e)}
              >
                {activeSlide.ctaText}
              </Link>
            )}
          </div>
        </div>

        {/* Optional Children */}
        {children}
      </div>

      {/* Left Circular Navigation Arrow */}
      <button
        type="button"
        className="hero-slider__nav-btn hero-slider__nav-btn--prev"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      {/* Right Circular Navigation Arrow */}
      <button
        type="button"
        className="hero-slider__nav-btn hero-slider__nav-btn--next"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Bottom Indicators (Active Pill + Inactive Dots matching reference) */}
      <div className="hero-slider__indicators" role="tablist" aria-label="Slider pagination">
        {slides.map((slide, idx) => (
          <button
            key={slide.id || idx}
            type="button"
            className={`hero-slider__dot ${idx === currentSlide ? 'hero-slider__dot--active' : ''}`}
            onClick={() => goToSlide(idx)}
            role="tab"
            aria-selected={idx === currentSlide}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
