
import { Link, useLocation } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import PageIntro from '../../components/PageIntro/PageIntro';
import GalleryCard from '../../components/GalleryCard/GalleryCard';
import { galleryImages } from '../../data/galleryData';
import { services } from '../../data/siteData';
import '../Wallpapers/Wallpapers.css';

const serviceContent = {
  'wallpaper-installation': { intro: 'Professional wallpaper installation services in Hyderabad. Our trained team handles every step — from wall assessment and surface preparation to precise fitting and finishing.', steps: ['Consultation & wall assessment', 'Surface preparation & priming', 'Precise measurement & cutting', 'Professional application', 'Seam finishing & edge trimming', 'Final inspection & handover'] },
  '3d-wall-panel-installation': { intro: 'Expert 3D wall panel installation for homes and commercial spaces. We ensure perfect alignment, secure fitting, and a flawless finish on every panel.', steps: ['Material selection consultation', 'Surface preparation & levelling', 'Layout planning & alignment', 'Panel cutting & fitting', 'Joint finishing & sealing', 'Final quality inspection'] },
  'wall-panel-installation': { intro: 'Complete wall panel installation services for all panel types — PVC, WPC, UV marble, charcoal, fluted, and more. Professional fitting across Hyderabad.', steps: ['Panel type consultation', 'Wall assessment & measurement', 'Surface preparation', 'Panel installation & securing', 'Edge & joint finishing', 'Cleanup & handover'] },
  'feature-wall-design': { intro: 'Create stunning feature walls that become the focal point of any room. We combine wallpaper, panels, lighting, and mixed finishes to design walls that tell a story.', steps: ['Design consultation', 'Material & style selection', 'Concept visualisation', 'Surface preparation', 'Installation & finishing', 'Styling & handover'] },
  'interior-wall-finishes': { intro: 'Complete interior wall finish solutions — from wallpaper and panels to textured surfaces and decorative treatments. One destination for all your wall needs.', steps: ['Room assessment', 'Finish selection by style & budget', 'Material sourcing', 'Surface preparation', 'Application & installation', 'Quality assurance'] },
  'commercial-wall-solutions': { intro: 'Professional wall solutions for offices, receptions, retail spaces, restaurants, and commercial interiors. Durable, brand-appropriate surfaces that make an impression.', steps: ['Site discussion & briefing', 'Material recommendation', 'Design coordination', 'Scheduling & preparation', 'Installation', 'Inspection & sign-off'] },
  'home-wall-makeovers': { intro: 'Transform your home walls with a complete makeover service. From selection and planning to installation — we handle everything so you can enjoy the result.', steps: ['Home consultation', 'Room & wall planning', 'Material & design selection', 'Preparation & protection', 'Installation', 'Final walkthrough'] },
};

export default function ServicePage() {
  const location = useLocation();
  const slug = location.pathname.replace('/', '');
  const service = services.find(s => s.id === slug);
  const content = serviceContent[slug];

  useSEO({
    title: service ? service.seoTitle : 'Services | CreateYouWallpapers',
    description: service ? service.metaDescription : '',
  });

  if (!service) {
    return (
      <main className="page-top">
        <div className="container section">
          <h1>Service Not Found</h1>
          <Link to="/contact" className="btn btn--primary">Contact Us</Link>
        </div>
      </main>
    );
  }

  const servicePhotos = galleryImages.filter(img => {
    if (slug === 'wallpaper-installation') return img.category === 'wallpapers' || img.category === 'showroom';
    if (slug === '3d-wall-panel-installation') return img.category === '3d-panels';
    if (slug === 'wall-panel-installation') return img.category === 'wall-panels' || img.category === 'fluted-panels';
    if (slug === 'feature-wall-design') return img.category === 'feature-walls' || img.category === 'fluted-panels';
    if (slug === 'interior-wall-finishes') return img.category === '3d-panels' || img.category === 'wallpapers';
    if (slug === 'commercial-wall-solutions') return img.category === 'feature-walls' || img.category === 'showroom';
    if (slug === 'home-wall-makeovers') return img.category === 'wallpapers' || img.category === 'feature-walls';
    return true;
  }).slice(0, 6);

  const serviceImageMap = {
    'wallpaper-installation': '/gallery/wallpaper-shop-rolls-collection.jpeg',
    '3d-wall-panel-installation': '/gallery/3d-diamond-panel-installation.jpeg',
    'wall-panel-installation': '/gallery/backlit-panel-closeup-detail.jpeg',
    'feature-wall-design': '/gallery/luxury-fluted-panel-feather-wall.jpeg',
    'interior-wall-finishes': '/gallery/3d-geometric-panel-tiles-display.jpeg',
    'commercial-wall-solutions': '/gallery/designer-feature-wall-fluted.jpeg',
    'home-wall-makeovers': '/gallery/luxury-marble-fluted-panel-living-room.jpeg',
  };

  return (
    <main className="page-top">
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Services' }, { label: service.name }]} />

      <PageIntro
        eyebrow="Service"
        title={service.h1}
        desc={content?.intro || service.metaDescription}
        image={serviceImageMap[slug] || servicePhotos[0]?.src}
        imageAlt={service.name}
        columns={[
          {
            title: 'Service Inclusions',
            items: [
              'Expert on-site consultation & measurement',
              'Wall preparation & surface smoothing',
              'Precision installation by trained technicians',
              'Final quality walkthrough & cleanup',
            ],
          },
          {
            title: 'Quality Standards',
            items: [
              'Flawless bubble-free, seamless fitting',
              'Premium adhesives & installation hardware',
              'Fast execution with minimal disruption',
              'Post-installation guarantee & care tips',
            ],
          },
        ]}
      />

      {/* Process Steps */}
      {content?.steps && (
        <section className="section">
          <div className="container container--narrow">
            <div className="section-header">
              <span className="section-eyebrow">Process</span>
              <h2>How It Works</h2>
            </div>
            <div className="service-steps">
              {content.steps.map((step, i) => (
                <div key={i} className="service-step">
                  <div className="service-step__num">{String(i + 1).padStart(2, '0')}</div>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gallery */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">{service.name}</span>
            <h2>{service.name} Portfolio &amp; Work</h2>
          </div>
          <div className="grid grid--3">
            {servicePhotos.map(item => (
              <GalleryCard key={item.src} src={item.src} alt={item.alt} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#fff' }}>Ready to Get Started?</h2>
          <p style={{ color: 'rgba(255,255,255,.7)', marginBottom: 'var(--space-xl)', maxWidth: 500, margin: '0 auto var(--space-xl)' }}>
            Request a consultation and quote for {service.name.toLowerCase()}.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/get-quote" className="btn btn--primary btn--lg">Get a Quote</Link>
            <Link to="/gallery" className="btn btn--white btn--lg">View Gallery</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
