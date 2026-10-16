import { Link } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import PageIntro from '../../components/PageIntro/PageIntro';
import FAQ from '../../components/FAQ/FAQ';
import { faqs } from '../../data/siteData';
import '../Wallpapers/Wallpapers.css';

export function InspirationPage() {
  useSEO({ title: 'Wallpaper and Wall Panel Inspiration | CreateYouWallpapers', description: 'Find inspiration for your wall project — browse wallpaper and wall panel ideas by room, style, material, and trend.' });
  const articles = [
    { title: 'How to Choose Wallpaper for Your Living Room', cat: 'Room Guide', bg: 'warm' },
    { title: 'Top 5 Wall Panel Trends for Modern Homes', cat: 'Trends', bg: 'cool' },
    { title: 'Fluted Panels: The New Feature Wall Favourite', cat: 'Material Guide', bg: 'marble' },
    { title: 'Creating a Statement TV Wall', cat: 'Room Guide', bg: 'dark' },
    { title: 'Nature-Inspired Wallpaper Ideas', cat: 'Style Guide', bg: 'green' },
    { title: 'UV Marble Sheets: Luxury Without the Weight', cat: 'Material Guide', bg: 'marble' },
  ];
  return (
    <main className="page-top">
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Inspiration' }]} />

      <PageIntro
        eyebrow="Ideas & Trends"
        title="Wallpaper and Wall Panel Inspiration"
        desc="Discover design ideas, room guides, and material insights to inspire your next wall project."
        image="/gallery/tropical-leaf-wallpaper-green.jpeg"
        imageAlt="Design Inspiration"
        columns={[
          {
            title: 'Design Themes',
            items: [
              'Modern minimalist aesthetics',
              'Biophilic & botanical motifs',
              'Monochrome & geometric drama',
              'Opulent marble & metallic finishes',
            ],
          },
          {
            title: 'Room Guides',
            items: [
              'Living room entertainment walls',
              'Tranquil master bedroom suites',
              'Statement powder rooms & foyers',
              'Executive corporate receptions',
            ],
          },
        ]}
      />

      <section className="section"><div className="container">
        <div className="grid grid--3">{articles.map((a, i) => (
          <div key={i} className="card"><div className={`card__image img-placeholder img-placeholder--${a.bg}`}><span>{a.title}</span></div><div className="card__body"><span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{a.cat}</span><h3 className="card__title" style={{ marginTop: 'var(--space-xs)' }}>{a.title}</h3><Link to="/get-quote" className="card__link">Read More →</Link></div></div>
        ))}</div>
      </div></section>
    </main>
  );
}

export function BlogPage() {
  useSEO({ title: 'Wallpaper and Wall Panel Ideas, Guides and Tips', description: 'Expert guides, design tips, and ideas for wallpaper and wall panels. CreateYouWallpapers blog.' });
  return (
    <main className="page-top">
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Blog' }]} />

      <PageIntro
        eyebrow="Guides & Insights"
        title="Wallpaper and Wall Panel Blog"
        desc="Guides, tips, and design ideas to help you make the most of your walls."
        image="/gallery/wallpaper-showroom-abstract-wave.jpeg"
        imageAlt="Wallpaper & Wall Panels Blog"
        columns={[
          {
            title: 'Popular Topics',
            items: [
              'Surface preparation & wall primers',
              'Wallpaper vs wall panel comparisons',
              'Care, cleaning & maintenance guides',
              'Moisture & climate considerations',
            ],
          },
          {
            title: 'Expert Advice',
            items: [
              'Choosing textures for artificial lighting',
              'Creating illusion of height and space',
              'Selecting child- & pet-friendly materials',
              'Commercial wear layer standards',
            ],
          },
        ]}
      />

      <section className="section"><div className="container">
        <div className="grid grid--3">{[
          { title: 'How to Prepare Walls Before Wallpaper Installation', cat: 'Installation', bg: 'cool' },
          { title: 'Wallpaper vs Wall Panels: Which is Right for You?', cat: 'Guide', bg: 'warm' },
          { title: 'Maintaining Your Wallpaper: Care Tips', cat: 'Maintenance', bg: 'green' },
          { title: 'Choosing Wall Panels for Humid Rooms', cat: 'Guide', bg: 'marble' },
          { title: 'Bedroom Accent Wall Ideas', cat: 'Room Ideas', bg: 'cool' },
          { title: 'Commercial Wall Design: First Impressions Matter', cat: 'Commercial', bg: 'dark' },
        ].map((a, i) => (
          <div key={i} className="card"><div className={`card__image img-placeholder img-placeholder--${a.bg}`}><span>{a.title}</span></div><div className="card__body"><span style={{ fontSize: 'var(--font-size-xs)', fontWeight: 600, color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{a.cat}</span><h3 className="card__title" style={{ marginTop: 'var(--space-xs)' }}>{a.title}</h3><Link to="/contact" className="card__link">Read More →</Link></div></div>
        ))}</div>
      </div></section>
    </main>
  );
}

export function FAQPage() {
  useSEO({ title: 'Wallpaper and Wall Panel FAQs | CreateYouWallpapers', description: 'Answers to common questions about wallpaper, wall panels, installation, selection, and service areas.' });
  return (
    <main className="page-top">
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'FAQ' }]} />

      <PageIntro
        eyebrow="Help & Knowledge Base"
        title="Wallpaper and Wall Panel FAQs"
        desc="Answers to common questions about wallpaper selection, wall panel materials, installation timelines, pricing, and service areas in Hyderabad."
        image="/gallery/fluted-panel-samples-handheld.jpeg"
        imageAlt="Frequently Asked Questions"
      />

      <FAQ items={faqs} title="Frequently Asked Questions" />
      <section className="section section--cream" style={{ textAlign: 'center' }}><div className="container"><h2>Still Have Questions?</h2><p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--space-xl)' }}>Contact us and our team will be happy to help.</p><Link to="/contact" className="btn btn--primary">Contact Us</Link></div></section>
    </main>
  );
}
