import { Link, useLocation } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import PageIntro from '../../components/PageIntro/PageIntro';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import CategoryPageTemplate from '../../components/CategoryPageTemplate/CategoryPageTemplate';
import { rooms, getRoomBySlug } from '../../data/siteData';
import { getCategoryDesignData } from '../../data/categoryDesigns';
import '../Wallpapers/Wallpapers.css';

export function RoomsHub() {
  useSEO({ title: 'Room Design Ideas | CreateYouWallpapers Hyderabad', description: 'Wallpaper and wall panel ideas organized by room — living room, bedroom, kids room, dining, TV wall, pooja room, and more.' });
  return (
    <main className="page-top">
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Rooms' }]} />

      <PageIntro
        eyebrow="By Room"
        title="Wall Design Ideas for Every Room"
        desc="Find the perfect wallpaper or wall panel treatment for your living room, bedroom, kids room, dining area, TV wall, and more."
        image="/gallery/luxury-marble-fluted-panel-living-room.jpeg"
        imageAlt="Room Wall Designs"
        columns={[
          {
            title: 'Living & Social Spaces',
            items: ['Living Room Accent Walls', 'Statement TV Entertainment Units', 'Dining Area Features', 'Foyer & Hallway Entrances'],
          },
          {
            title: 'Private & Specialty Rooms',
            items: ['Master Bedroom Headboards', 'Creative Kids Room Murals', 'Sacred Pooja Room Backdrops', 'Focused Home Office Walls'],
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
                <h2>Top Trending Room Makeovers</h2>
                <p>Most popular room transformations designed for Hyderabad homes</p>
              </div>
            </div>
            <div className="cat-page__trending-grid">
              <div className="cat-trending-card">
                <div className="cat-trending-card__img-wrap">
                  <img src="/gallery/luxury-marble-fluted-panel-living-room.jpeg" alt="Living Room" loading="lazy" />
                  <span className="cat-trending-card__badge">Most Popular</span>
                </div>
                <div className="cat-trending-card__body">
                  <h3 className="cat-trending-card__title">Living Room Accent Walls</h3>
                  <p className="cat-trending-card__sub">Sophisticated stone, floral &amp; geometric statements</p>
                  <div className="cat-trending-card__footer">
                    <span className="cat-trending-card__spec">Curated Designs</span>
                    <Link to="/living-room-wallpaper" className="cat-trending-card__cta">Explore Designs →</Link>
                  </div>
                </div>
              </div>
              <div className="cat-trending-card">
                <div className="cat-trending-card__img-wrap">
                  <img src="/gallery/3d-wave-panel-bedroom-design.jpeg" alt="Master Bedroom" loading="lazy" />
                  <span className="cat-trending-card__badge">Serene Luxury</span>
                </div>
                <div className="cat-trending-card__body">
                  <h3 className="cat-trending-card__title">Master Bedroom Headboards</h3>
                  <p className="cat-trending-card__sub">Calming textures, acoustic leather &amp; wave panels</p>
                  <div className="cat-trending-card__footer">
                    <span className="cat-trending-card__spec">Curated Designs</span>
                    <Link to="/bedroom-wallpaper" className="cat-trending-card__cta">Explore Designs →</Link>
                  </div>
                </div>
              </div>
              <div className="cat-trending-card">
                <div className="cat-trending-card__img-wrap">
                  <img src="/gallery/marble-fluted-panel-tv-wall.jpeg" alt="TV Wall" loading="lazy" />
                  <span className="cat-trending-card__badge">High Demand</span>
                </div>
                <div className="cat-trending-card__body">
                  <h3 className="cat-trending-card__title">TV Entertainment Walls</h3>
                  <p className="cat-trending-card__sub">Fluted louvers with backlighting &amp; marble slabs</p>
                  <div className="cat-trending-card__footer">
                    <span className="cat-trending-card__spec">Curated Designs</span>
                    <Link to="/tv-wall-designs" className="cat-trending-card__cta">Explore Designs →</Link>
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
            <span className="section-eyebrow">Explore Rooms</span>
            <h2>Select a Room to Transform</h2>
          </div>
          <div className="grid grid--3">
            {rooms.map((r, i) => (
              <CategoryCard key={r.id} {...r} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export function RoomPage() {
  const location = useLocation();
  const slug = location.pathname.replace('/', '');
  const room = getRoomBySlug(slug);

  if (!room) {
    return (
      <main className="page-top">
        <div className="container section">
          <h1>Room Not Found</h1>
          <p>Sorry, this room design category does not exist.</p>
          <Link to="/rooms" className="btn btn--primary">View All Rooms</Link>
        </div>
      </main>
    );
  }

  const catData = getCategoryDesignData(slug);
  const mergedData = {
    ...catData,
    categoryName: `${room.name} Wall Designs`,
    h1: room.h1 || `${room.name} Wall Designs`,
    seoTitle: room.seoTitle || catData.seoTitle,
    metaDescription: room.metaDescription || catData.metaDescription,
    shortIntro: catData.shortIntro || room.shortDescription,
    largeVisual: catData.largeVisual || room.image,
  };

  const related = rooms
    .filter(r => r.id !== room.id)
    .slice(0, 3)
    .map(r => ({
      name: r.name,
      url: r.url,
      image: r.image,
      slug: r.slug
    }));

  return (
    <CategoryPageTemplate
      categoryData={mergedData}
      breadcrumbItems={[
        { label: 'Home', url: '/' },
        { label: 'Rooms', url: '/rooms' },
        { label: room.name }
      ]}
      relatedCategories={related}
    />
  );
}
