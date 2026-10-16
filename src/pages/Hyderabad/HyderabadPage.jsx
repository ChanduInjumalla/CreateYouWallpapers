import { Link, useLocation } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import PageIntro from '../../components/PageIntro/PageIntro';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import { galleryImages } from '../../data/galleryData';
import { wallpaperCategories } from '../../data/wallpapers';
import { wallPanelCategories } from '../../data/wallPanels';
import { BUSINESS, getPhoneLink, getWhatsAppLink } from '../../data/business';
import '../Wallpapers/Wallpapers.css';
import { hydPages } from './hyderabadRoutes';

export default function HyderabadPage() {
  const location = useLocation();
  const slug = location.pathname.replace('/', '');
  const page = hydPages.find(p => p.id === slug);

  useSEO({
    title: page ? page.seoTitle : 'Hyderabad | CreateYouWallpapers',
    description: page ? page.meta : '',
  });

  if (!page) return <main className="page-top"><div className="container section"><h1>Page Not Found</h1><Link to="/" className="btn btn--primary">Go Home</Link></div></main>;

  const hydImageMap = {
    'interior-wall-design-hyderabad': '/gallery/luxury-marble-fluted-panel-living-room.jpeg',
    'wallpaper-shop-hyderabad': '/gallery/wallpaper-shop-rolls-collection.jpeg',
    'wallpaper-installation-hyderabad': '/gallery/wallpaper-display-wall-showroom.jpeg',
    'wallpaper-dealers-hyderabad': '/gallery/wallpaper-shop-collection-rolls.jpeg',
    'wall-panels-hyderabad': '/gallery/wpc-fluted-panels-color-range.jpeg',
    '3d-wall-panels-hyderabad': '/gallery/3d-wall-panel-showroom-display.jpeg',
    'pvc-wall-panels-hyderabad': '/gallery/designer-fluted-panels-white-brown.jpeg',
    'fluted-panels-hyderabad': '/gallery/luxury-fluted-panel-foyer.jpeg',
    'uv-marble-sheets-hyderabad': '/gallery/luxury-marble-fluted-panel-living-room.jpeg',
    'wpc-panels-hyderabad': '/gallery/wpc-fluted-panel-wood-colors.jpeg',
    'artificial-grass-hyderabad': '/gallery/wallpaper-display-wall-showroom.jpeg',
    'wooden-flooring-hyderabad': '/gallery/wpc-fluted-panel-wood-colors.jpeg',
  };

  return (
    <main className="page-top">
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Hyderabad' }, { label: page.h1 }]} />

      <PageIntro
        eyebrow="Hyderabad"
        title={page.h1}
        desc={page.intro}
        image={hydImageMap[slug] || '/gallery/luxury-marble-fluted-panel-living-room.jpeg'}
        imageAlt={page.h1}
        columns={[
          {
            title: 'Our Services in Hyderabad',
            items: [
              'Design consultation and material selection',
              'Professional measurement and wall assessment',
              'Expert installation by trained team',
              'Post-installation quality assurance',
            ],
          },
          {
            title: 'Service Coverage',
            items: [
              'Banjara Hills, Jubilee Hills, Madhapur, Gachibowli',
              'Kondapur, Hitec City, Kokapet, Financial District',
              'Kukatpally, Begumpet, Secunderabad, Miyapur',
              'Complete Hyderabad & Secunderabad delivery & installation',
            ],
          },
        ]}
      />

      <section className="section section--cream"><div className="container">
        <div className="section-header"><span className="section-eyebrow">Explore</span><h2>Browse Our Collections</h2></div>
        <div className="grid grid--4">
          {wallpaperCategories.slice(0, 4).map((w, i) => <CategoryCard key={w.id} {...w} index={i} />)}
        </div>
        <div style={{ marginTop: 'var(--space-2xl)' }}>
          <div className="grid grid--3">
            {wallPanelCategories.slice(0, 3).map((p, i) => <CategoryCard key={p.id} {...p} index={i} />)}
          </div>
        </div>
      </div></section>

      {/* Real Installations Gallery */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Portfolio</span>
            <h2>Recent Installations in Hyderabad</h2>
          </div>
          <div className="grid grid--3">
            {galleryImages.slice(0, 6).map(item => (
              <GalleryCard key={item.src} src={item.src} alt={item.alt} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream"><div className="container" style={{ maxWidth: '700px', textAlign: 'center' }}>
        <h2>Contact Us in Hyderabad</h2>
        <p style={{ color: 'var(--color-text-light)', margin: 'var(--space-md) 0 var(--space-xl)' }}>Reach out for a free consultation on your wall project in Hyderabad.</p>
        <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={getPhoneLink()} className="btn btn--secondary">Call: {BUSINESS.phone}</a>
          <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn btn--primary">WhatsApp Us</a>
          <Link to="/get-quote" className="btn btn--dark">Get a Quote</Link>
        </div>
        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)', marginTop: 'var(--space-lg)' }}>{BUSINESS.address.full}</p>
      </div></section>
    </main>
  );
}
