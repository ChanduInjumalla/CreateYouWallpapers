import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import PageIntro from '../../components/PageIntro/PageIntro';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import { galleryImages, galleryCategories } from '../../data/galleryData';
import '../Wallpapers/Wallpapers.css';
import './Gallery.css';

export function GalleryPage() {
  useSEO({ title: 'Wallpaper and Wall Panel Gallery | CreateYouWallpapers', description: 'Browse our gallery of wallpaper and wall panel installations for homes and commercial spaces in Hyderabad.' });
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const filtered = filter === 'all' ? galleryImages : galleryImages.filter(i => i.category === filter);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox(prev => (prev > 0 ? prev - 1 : filtered.length - 1));
  const nextImage = () => setLightbox(prev => (prev < filtered.length - 1 ? prev + 1 : 0));

  useEffect(() => {
    if (lightbox === null) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowLeft') setLightbox(prev => (prev > 0 ? prev - 1 : filtered.length - 1));
      if (e.key === 'ArrowRight') setLightbox(prev => (prev < filtered.length - 1 ? prev + 1 : 0));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox, filtered.length]);

  return (
    <main className="page-top">
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Gallery' }]} />

      <PageIntro
        eyebrow="Portfolio"
        title="Wallpaper and Wall Panel Gallery"
        desc="Browse our collection of 50+ real wallpaper, wall panel, and feature wall installations across Hyderabad."
        image="/gallery/wallpaper-display-wall-showroom.jpeg"
        imageAlt="Gallery Portfolio"
      />

      <section className="section"><div className="container">
        <div className="gallery-filters">
          {galleryCategories.map(f => (
            <button
              key={f.id}
              className={`gallery-filter ${filter === f.id ? 'gallery-filter--active' : ''}`}
              onClick={() => { setFilter(f.id); setLightbox(null); }}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="gallery-masonry">
          {filtered.map((item, idx) => (
            <div
              key={item.src}
              className="gallery-item"
              onClick={() => openLightbox(idx)}
              role="button"
              tabIndex={0}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') openLightbox(idx); }}
              aria-label={`View ${item.alt}`}
            >
              <img src={item.src} alt={item.alt} loading="lazy" />
              <div className="gallery-item__overlay">
                <span className="gallery-item__badge">View Photo</span>
                <span className="gallery-item__caption">{item.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div></section>

      {lightbox !== null && filtered[lightbox] && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label="Image lightbox">
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close">✕</button>
          <button className="lightbox__nav lightbox__nav--prev" onClick={e => { e.stopPropagation(); prevImage(); }} aria-label="Previous">‹</button>
          <div className="lightbox__content" onClick={e => e.stopPropagation()}>
            <img src={filtered[lightbox].src} alt={filtered[lightbox].alt} />
            <div className="lightbox__footer">
              <span className="lightbox__counter">{lightbox + 1} / {filtered.length}</span>
              <p className="lightbox__caption">{filtered[lightbox].alt}</p>
            </div>
          </div>
          <button className="lightbox__nav lightbox__nav--next" onClick={e => { e.stopPropagation(); nextImage(); }} aria-label="Next">›</button>
        </div>
      )}

      <section className="section section--dark" style={{ textAlign: 'center' }}><div className="container"><h2 style={{ color: '#fff' }}>Like What You See?</h2><p style={{ color: 'rgba(255,255,255,.7)', marginBottom: 'var(--space-xl)' }}>Get a similar look for your space.</p><Link to="/get-quote" className="btn btn--primary btn--lg">Get a Quote</Link></div></section>
    </main>
  );
}

export function ProjectsPage() {
  useSEO({ title: 'Wallpaper and Wall Panel Projects | CreateYouWallpapers', description: 'Explore our completed wallpaper and wall panel projects across Hyderabad.' });
  const featuredProjects = galleryImages.filter(i => ['feature-walls', 'fluted-panels'].includes(i.category)).slice(0, 6);
  return (
    <main className="page-top">
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Projects' }]} />

      <PageIntro
        eyebrow="Projects"
        title="Wallpaper and Wall Panel Projects"
        desc="Explore installations and transformations from our portfolio across homes, apartments, and commercial venues in Hyderabad."
        image="/gallery/designer-feature-wall-fluted.jpeg"
        imageAlt="Projects Portfolio"
        columns={[
          {
            title: 'Project Types',
            items: [
              'Luxury residential living rooms',
              'Feature TV entertainment units',
              'Master bedroom feature headboards',
              'Corporate reception backdrops',
            ],
          },
          {
            title: 'Our Craftsmanship',
            items: [
              'Precision pattern matching',
              'Flush joint edge detailing',
              'Concealed LED channel integration',
              'Clean, mess-free site execution',
            ],
          },
        ]}
      />

      <section className="section"><div className="container">
        <div className="grid grid--3">
          {featuredProjects.map(item => (
            <GalleryCard key={item.src} src={item.src} alt={item.alt} />
          ))}
        </div>
      </div></section>

      <section className="section section--dark" style={{ textAlign: 'center' }}><div className="container"><h2 style={{ color: '#fff' }}>Start Your Project</h2><p style={{ color: 'rgba(255,255,255,.7)', marginBottom: 'var(--space-xl)' }}>Get in touch with our team for consultation and pricing.</p><Link to="/get-quote" className="btn btn--primary btn--lg">Get a Quote</Link></div></section>
    </main>
  );
}

export function BeforeAfterPage() {
  useSEO({ title: 'Before and After Wallpaper and Wall Panel Projects', description: 'See stunning wall transformations — before and after wallpaper and wall panel installations.' });
  const transformations = galleryImages.filter(i => i.category === 'feature-walls').slice(0, 4);
  return (
    <main className="page-top">
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Before & After' }]} />

      <PageIntro
        eyebrow="Transformations"
        title="Before and After Wall Transformations"
        desc="See how wallpaper and wall panels transform ordinary walls into extraordinary features."
        image="/gallery/luxury-marble-fluted-panel-living-room.jpeg"
        imageAlt="Wall Transformations"
        columns={[
          {
            title: 'The Transformation Process',
            items: [
              'Initial surface inspection & smoothing',
              'Custom layout & lighting preview',
              'Precision single-day installation',
              'Instant elevation of interior space',
            ],
          },
          {
            title: 'Material Combinations',
            items: [
              'Charcoal panels + warm cove lighting',
              'UV marble sheets + vertical flutes',
              'Textured 3D tiles + matte finishes',
              'Floral wallpapers + neutral trim',
            ],
          },
        ]}
      />

      <section className="section"><div className="container">
        <div className="grid grid--2">
          {transformations.map(item => (
            <GalleryCard key={item.src} src={item.src} alt={item.alt} aspect="16/9" />
          ))}
        </div>
      </div></section>

      <section className="section section--dark" style={{ textAlign: 'center' }}><div className="container"><h2 style={{ color: '#fff' }}>Start Your Wall Transformation</h2><p style={{ color: 'rgba(255,255,255,.7)', marginBottom: 'var(--space-xl)' }}>Get a free consultation and see what's possible.</p><Link to="/get-quote" className="btn btn--primary btn--lg">Get a Quote</Link></div></section>
    </main>
  );
}
