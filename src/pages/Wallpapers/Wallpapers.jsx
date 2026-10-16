import { Link, useLocation } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import PageIntro from '../../components/PageIntro/PageIntro';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import FAQ from '../../components/FAQ/FAQ';
import CategoryPageTemplate from '../../components/CategoryPageTemplate/CategoryPageTemplate';
import { wallpaperCategories, getWallpaperBySlug } from '../../data/wallpapers';
import { getCategoryDesignData } from '../../data/categoryDesigns';
import { faqs } from '../../data/siteData';
import './Wallpapers.css';

/* ── Hub Page ── */
export function WallpapersHub() {
  useSEO({
    title: 'Wallpaper Designs for Homes | CreateYouWallpapers Hyderabad',
    description: 'Explore our complete wallpaper collection — floral, geometric, marble, tropical, 3D, metallic, and more. Professional installation in Hyderabad.',
  });

  return (
    <main className="page-top">
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Wallpapers' }]} />

      <PageIntro
        eyebrow="Collection"
        title="Wallpaper Designs for Homes and Interiors"
        desc="Explore our curated wallpaper collections — each designed to transform the character of a room with pattern, colour, and texture."
        image="/gallery/wallpaper-shop-rolls-collection.jpeg"
        imageAlt="Wallpaper Designs Collection"
        columns={[
          {
            title: 'Design Varieties',
            items: ['Floral & Botanical Patterns', 'Modern Geometric Motifs', 'Rich Marble & Stone Effects', 'Tactile 3D Dimensional Rolls'],
          },
          {
            title: 'Specialty Finishes',
            items: ['Metallic Gold & Silver Accents', 'Textured Grasscloth Materials', 'Vibrant Tropical Murals', 'Bespoke Custom Print Rolls'],
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
                <h2>Top Trending Wallpaper Styles</h2>
                <p>Most requested wallpaper collections chosen by Hyderabad homeowners</p>
              </div>
            </div>
            <div className="cat-page__trending-grid">
              <div className="cat-trending-card">
                <div className="cat-trending-card__img-wrap">
                  <img src="/gallery/gold-leaf-pattern-wallpaper.jpeg" alt="Floral Wallpaper" loading="lazy" />
                  <span className="cat-trending-card__badge">Bestseller</span>
                </div>
                <div className="cat-trending-card__body">
                  <h3 className="cat-trending-card__title">Floral &amp; Botanical Wallpapers</h3>
                  <p className="cat-trending-card__sub">Timeless botanical and floral patterns</p>
                  <div className="cat-trending-card__footer">
                    <span className="cat-trending-card__spec">180+ Designs</span>
                    <Link to="/floral-wallpaper" className="cat-trending-card__cta">Explore Designs →</Link>
                  </div>
                </div>
              </div>
              <div className="cat-trending-card">
                <div className="cat-trending-card__img-wrap">
                  <img src="/gallery/geometric-leaf-wallpaper-dark.jpeg" alt="Geometric Wallpaper" loading="lazy" />
                  <span className="cat-trending-card__badge">Modern Pick</span>
                </div>
                <div className="cat-trending-card__body">
                  <h3 className="cat-trending-card__title">Geometric &amp; Architectural Wallpapers</h3>
                  <p className="cat-trending-card__sub">Bold lines, symmetry &amp; modern statements</p>
                  <div className="cat-trending-card__footer">
                    <span className="cat-trending-card__spec">150+ Designs</span>
                    <Link to="/geometric-wallpaper" className="cat-trending-card__cta">Explore Designs →</Link>
                  </div>
                </div>
              </div>
              <div className="cat-trending-card">
                <div className="cat-trending-card__img-wrap">
                  <img src="/gallery/luxury-marble-fluted-panel-living-room.jpeg" alt="Marble Effect Wallpaper" loading="lazy" />
                  <span className="cat-trending-card__badge">Luxury Trend</span>
                </div>
                <div className="cat-trending-card__body">
                  <h3 className="cat-trending-card__title">Marble &amp; Stone Effect Wallpapers</h3>
                  <p className="cat-trending-card__sub">Opulent natural stone veining for feature walls</p>
                  <div className="cat-trending-card__footer">
                    <span className="cat-trending-card__spec">120+ Designs</span>
                    <Link to="/marble-effect-wallpaper" className="cat-trending-card__cta">Explore Designs →</Link>
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
            <span className="section-eyebrow">Browse Styles</span>
            <h2>Explore Wallpaper Categories</h2>
          </div>
          <div className="grid grid--3">
            {wallpaperCategories.map((w, i) => (
              <CategoryCard key={w.id} {...w} index={i} />
            ))}
          </div>
        </div>
      </section>
      <section className="section section--cream">
        <div className="container">
          <div className="wallpaper-hub__info">
            <h2>Why Wallpaper?</h2>
            <p>Wallpaper adds visual depth, pattern, and personality to walls in a way paint alone cannot. From subtle textures to bold statements, wallpaper transforms spaces with minimal disruption and maximum impact.</p>
            <p>Our collection spans 11 distinct styles — floral, geometric, marble effect, tropical, wood effect, metallic, abstract, 3D, grasscloth, natural, and custom — ensuring a perfect match for every room and design vision.</p>
            <div className="wallpaper-hub__cta-row">
              <Link to="/get-quote" className="btn btn--primary">Request a Quote</Link>
              <Link to="/wallpaper-installation" className="btn btn--secondary">Installation Service</Link>
            </div>
          </div>
        </div>
      </section>
      <FAQ items={faqs.slice(0, 4)} title="Wallpaper Questions" />
    </main>
  );
}

/* ── Category Page ── */
export function WallpaperCategory() {
  const location = useLocation();
  const slug = location.pathname.replace('/', '');
  const wp = getWallpaperBySlug(slug);

  if (!wp) {
    return (
      <main className="page-top">
        <div className="container section">
          <h1>Wallpaper Not Found</h1>
          <p>Sorry, this wallpaper category does not exist.</p>
          <Link to="/wallpapers" className="btn btn--primary">View All Wallpapers</Link>
        </div>
      </main>
    );
  }

  const catData = getCategoryDesignData(slug);
  const mergedData = {
    ...catData,
    categoryName: wp.name,
    h1: wp.h1 || catData.h1,
    seoTitle: wp.seoTitle || catData.seoTitle,
    metaDescription: wp.metaDescription || catData.metaDescription,
    shortIntro: catData.shortIntro || wp.description,
    largeVisual: catData.largeVisual || wp.image,
  };

  const related = wallpaperCategories
    .filter(w => wp.relatedCategories?.includes(w.id))
    .slice(0, 3)
    .map(w => ({
      name: w.name,
      url: w.url,
      image: w.image,
      slug: w.slug
    }));

  return (
    <CategoryPageTemplate
      categoryData={mergedData}
      breadcrumbItems={[
        { label: 'Home', url: '/' },
        { label: 'Wallpapers', url: '/wallpapers' },
        { label: wp.name }
      ]}
      relatedCategories={related}
    />
  );
}
