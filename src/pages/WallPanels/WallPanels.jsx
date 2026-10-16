import { Link, useLocation } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import PageIntro from '../../components/PageIntro/PageIntro';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import CategoryPageTemplate from '../../components/CategoryPageTemplate/CategoryPageTemplate';
import { wallPanelCategories, getWallPanelBySlug } from '../../data/wallPanels';
import { getCategoryDesignData } from '../../data/categoryDesigns';
import { faqs } from '../../data/siteData';
import FAQ from '../../components/FAQ/FAQ';
import '../Wallpapers/Wallpapers.css';

export function WallPanelsHub() {
  useSEO({
    title: 'Wall Panels and Surface Solutions | CreateYouWallpapers Hyderabad',
    description: 'Explore UV marble sheets, fluted panels, charcoal panels, PVC panels, mosaic tiles, and more. Professional installation in Hyderabad.',
  });
  return (
    <main className="page-top">
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Wall Panels' }]} />

      <PageIntro
        eyebrow="Collection"
        title="Wall Panels and Surface Solutions"
        desc="Engineered wall panels, decorative surfaces, and flooring solutions that add depth, texture, and architectural character to any space."
        image="/gallery/luxury-marble-fluted-panel-living-room.jpeg"
        imageAlt="Wall Panels Collection"
        columns={[
          {
            title: 'Available Materials',
            items: ['UV Marble Sheets', 'Ribbed Fluted Panels', 'Dark Charcoal Panels', 'Waterproof PVC Panels'],
          },
          {
            title: 'Architectural Surfaces',
            items: ['3D Polyurethane Stone', 'Acoustic PU Leather', 'Reflective Mosaic Tiles', 'WPC & Wooden Flooring'],
          },
        ]}
      />

      {/* Trending Section */}
      <section className="section" style={{ paddingBottom: '0' }}>
        <div className="container">
          <div className="cat-page__trending-container" style={{ marginBottom: '0' }}>
            <div className="cat-page__trending-header">
              <div className="cat-page__flame-badge" aria-hidden="true">🔥</div>
              <div className="cat-page__trending-titles">
                <h2>Top Trending Wall Panel Profiles</h2>
                <p>Architect-preferred wall louvers and stone surfaces trending in Hyderabad</p>
              </div>
            </div>
            <div className="cat-page__trending-grid">
              <div className="cat-trending-card">
                <div className="cat-trending-card__img-wrap">
                  <img src="/gallery/wpc-fluted-panels-color-range.jpeg" alt="Fluted Panels" loading="lazy" />
                  <span className="cat-trending-card__badge">Bestseller</span>
                </div>
                <div className="cat-trending-card__body">
                  <h3 className="cat-trending-card__title">Ribbed Fluted Wall Panels</h3>
                  <p className="cat-trending-card__sub">Vertical slat louvers for TV units &amp; bedrooms</p>
                  <div className="cat-trending-card__footer">
                    <span className="cat-trending-card__spec">120+ Variations</span>
                    <Link to="/fluted-panels" className="cat-trending-card__cta">Explore Designs →</Link>
                  </div>
                </div>
              </div>
              <div className="cat-trending-card">
                <div className="cat-trending-card__img-wrap">
                  <img src="/gallery/luxury-marble-fluted-panel-living-room.jpeg" alt="UV Marble Sheets" loading="lazy" />
                  <span className="cat-trending-card__badge">High Gloss</span>
                </div>
                <div className="cat-trending-card__body">
                  <h3 className="cat-trending-card__title">UV Marble Sheets</h3>
                  <p className="cat-trending-card__sub">Mirror-polish stone slabs without structural load</p>
                  <div className="cat-trending-card__footer">
                    <span className="cat-trending-card__spec">80+ Finishes</span>
                    <Link to="/uv-marble-sheets" className="cat-trending-card__cta">Explore Designs →</Link>
                  </div>
                </div>
              </div>
              <div className="cat-trending-card">
                <div className="cat-trending-card__img-wrap">
                  <img src="/gallery/3d-diamond-panel-installation.jpeg" alt="PVC Panels & Moulding" loading="lazy" />
                  <span className="cat-trending-card__badge">Waterproof</span>
                </div>
                <div className="cat-trending-card__body">
                  <h3 className="cat-trending-card__title">PVC Panels &amp; Moulding</h3>
                  <p className="cat-trending-card__sub">Damp-proof cladding &amp; classic wall frames</p>
                  <div className="cat-trending-card__footer">
                    <span className="cat-trending-card__spec">90+ Designs</span>
                    <Link to="/pvc-panels" className="cat-trending-card__cta">Explore Designs →</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Browse Panels</span>
            <h2>Explore Panel Categories</h2>
          </div>
          <div className="grid grid--3">
            {wallPanelCategories.map((p, i) => (
              <CategoryCard key={p.id} {...p} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="section section--cream">
        <div className="container">
          <div className="wallpaper-hub__info">
            <h2>Why Wall Panels?</h2>
            <p>Wall panels offer a dimensional, textured alternative to flat painted surfaces. From high-gloss UV marble sheets to ribbed fluted panels, our collection transforms ordinary walls into architectural features — with faster installation and easier maintenance than traditional materials.</p>
            <div className="wallpaper-hub__cta-row">
              <Link to="/get-quote" className="btn btn--primary">Request a Quote</Link>
              <Link to="/wall-panel-installation" className="btn btn--secondary">Installation Service</Link>
            </div>
          </div>
        </div>
      </section>
      <FAQ items={faqs.slice(1, 5)} title="Wall Panel Questions" />
    </main>
  );
}

const panelFeatures = {
  'uv-marble': ['High-gloss UV protective coating', 'Seamless marble veining reproduction', 'Moisture, stain & heat resistant', 'Lightweight engineered alternative to stone'],
  'fluted': ['Architectural vertical ribbed grooves', 'Striking dynamic light & shadow play', 'Acoustic sound-dampening benefits', 'Available in rich wood & matte tones'],
  'charcoal': ['Bold dark dramatic textured surface', 'High-contrast feature wall statement', 'Termite, water & rot resistant', 'Architectural grade durability'],
  'pvc': ['100% waterproof & damp proof', 'Interlocking quick-fit tongue & groove', 'Low maintenance wipe-clean surface', 'Budget-friendly modern finish'],
  'mosaic': ['Intricate reflective tile geometry', 'Heat & humidity resistant', 'Ideal for accent bands & focal walls', 'Luxurious handcrafted appeal'],
  'pu-leather': ['Soft-touch cushioned luxury feel', 'Sound absorbing acoustic properties', 'Stain-resistant wipe-clean faux leather', 'Premium headboard & theatre finish'],
  'pu-stone': ['Ultra-realistic natural ledge stone texture', 'Lightweight high-density polyurethane', 'Easy installation without wall reinforcement', 'Weather & moisture resistant'],
  'artificial-grass': ['Lush 4-tone natural green density', 'Zero watering, mowing or maintenance', 'UV-stabilized anti-fade technology', 'Safe for children and indoor pets'],
  'artificial-plants': ['Dense lifelike foliage & trailing vines', 'Zero sunlight or maintenance needed', 'Instant biophilic luxury transformation', 'Custom modular wall layout'],
  'wpc-pvc-flooring': ['Heavy commercial wear layer protection', '100% waterproof rigid core click-lock', 'Slip-resistant textured surface', 'Warm and quiet underfoot'],
  'wooden-flooring': ['Authentic natural hardwood grain look', 'High scratch-resistant AC rating', 'Thermal insulation & floor warmth', 'Timeless luxury interior value'],
};

export function WallPanelCategory() {
  const location = useLocation();
  const slug = location.pathname.replace('/', '');
  const panel = getWallPanelBySlug(slug);

  if (!panel) {
    return (
      <main className="page-top">
        <div className="container section">
          <h1>Panel Not Found</h1>
          <p>Sorry, this wall panel category does not exist.</p>
          <Link to="/wall-panels" className="btn btn--primary">View All Panels</Link>
        </div>
      </main>
    );
  }

  const catData = getCategoryDesignData(slug);
  const mergedData = {
    ...catData,
    categoryName: panel.name,
    h1: panel.h1 || catData.h1,
    seoTitle: panel.seoTitle || catData.seoTitle,
    metaDescription: panel.metaDescription || catData.metaDescription,
    shortIntro: catData.shortIntro || panel.description,
    largeVisual: catData.largeVisual || panel.image,
  };

  const related = wallPanelCategories
    .filter(p => panel.relatedPanels?.includes(p.id))
    .slice(0, 3)
    .map(p => ({
      name: p.name,
      url: p.url,
      image: p.image,
      slug: p.slug
    }));

  return (
    <CategoryPageTemplate
      categoryData={mergedData}
      breadcrumbItems={[
        { label: 'Home', url: '/' },
        { label: 'Wall Panels', url: '/wall-panels' },
        { label: panel.name }
      ]}
      relatedCategories={related}
    />
  );
}
