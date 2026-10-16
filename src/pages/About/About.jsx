import { Link } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import PageIntro from '../../components/PageIntro/PageIntro';
import ProcessSection from '../../components/ProcessSection/ProcessSection';
import '../Wallpapers/Wallpapers.css';

export default function About() {
  useSEO({ title: 'About CreateYouWallpapers | Wallpaper and Wall Panels', description: 'Learn about CreateYouWallpapers — premium wallpaper, wall panel, and interior surface solutions for homes and commercial spaces in Hyderabad.' });
  return (
    <main className="page-top">
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'About' }]} />

      <PageIntro
        eyebrow="Our Story"
        title="About CreateYouWallpapers"
        desc="CreateYouWallpapers brings together a curated collection of wallpapers, 3D wall panels, and decorative surface solutions — designed for homes, offices, and commercial spaces in Hyderabad. Our approach combines design consultation, material selection, and professional installation — ensuring every wall we work on is finished to the highest standard."
        image="/gallery/wallpaper-shop-rolls-collection.jpeg"
        imageAlt="Our Showroom & Studio"
        columns={[
          {
            title: 'Our Mission',
            items: [
              'Curate international quality wall coverings',
              'Provide end-to-end design & fitting services',
              'Deliver durable, visually stunning results',
              'Transparent pricing with no hidden charges',
            ],
          },
          {
            title: 'Showroom & Experience',
            items: [
              '500+ physical wallpaper roll catalogues',
              'Full-size 3D & fluted wall panel mockups',
              'Expert design consultants on site',
              'Take-home sample swatches available',
            ],
          },
        ]}
      />

      {/* Showroom & Collections Showcase */}
      <section className="section section--cream">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Experience In Person</span>
            <h2>Our Studio &amp; Material Collections</h2>
            <p>Visit our showroom to see, touch, and experience hundreds of premium wallpaper rolls, fluted panels, and 3D textures in person.</p>
          </div>
          <div className="grid grid--3">
            {[
              { img: '/gallery/wallpaper-shop-rolls-collection.jpeg', title: 'Wallpaper Rolls & Catalogues', desc: 'Over 500+ designer wallpaper patterns available for immediate preview.' },
              { img: '/gallery/3d-wall-panel-showroom-display.jpeg', title: '3D Panel Displays', desc: 'Full-scale architectural mockups showing light and shadow play.' },
              { img: '/gallery/fluted-panel-samples-handheld.jpeg', title: 'Sample Swatches & Materials', desc: 'Touch and compare textures, finishes, and durability before you decide.' }
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--color-white)', borderRadius: 'var(--border-radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                <img src={item.img} alt={item.title} loading="lazy" style={{ width: '100%', aspectRatio: '16/10', objectFit: 'cover', display: 'block' }} />
                <div style={{ padding: 'var(--space-lg)' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-xs)' }}>{item.title}</h3>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header"><span className="section-eyebrow">What We Offer</span><h2>Our Services</h2></div>
          <div className="grid grid--3">
            {[
              { title: 'Wallpaper Selection & Installation', desc: '11 curated wallpaper styles — from floral to 3D — professionally installed in your space.', link: '/wallpapers' },
              { title: 'Wall Panel Solutions', desc: 'UV marble sheets, fluted panels, charcoal panels, PVC, and more — for walls that make a statement.', link: '/wall-panels' },
              { title: 'Surface & Flooring', desc: 'Wooden flooring, WPC/PVC flooring, artificial grass, and decorative surface finishes.', link: '/wooden-flooring' },
              { title: 'Design Consultation', desc: 'Expert advice on materials, patterns, colours, and finishes to match your room and vision.', link: '/get-quote' },
              { title: 'Feature Wall Design', desc: 'Create stunning focal points using wallpaper, panels, or mixed-material combinations.', link: '/feature-wall-design' },
              { title: 'Commercial Projects', desc: 'Wall solutions for offices, receptions, retail spaces, and commercial interiors.', link: '/commercial-wall-solutions' },
            ].map((s, i) => (
              <div key={i} style={{ background: 'var(--color-white)', padding: 'var(--space-xl)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--color-border)' }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-sm)' }}>{s.title}</h3>
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)', lineHeight: 'var(--line-height-normal)', marginBottom: 'var(--space-md)' }}>{s.desc}</p>
                <Link to={s.link} className="card__link">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ProcessSection />
      <section className="section section--dark" style={{ textAlign: 'center' }}>
        <div className="container"><h2 style={{ color: '#fff' }}>Ready to Get Started?</h2><p style={{ color: 'rgba(255,255,255,.7)', marginBottom: 'var(--space-xl)', maxWidth: '500px', margin: '0 auto var(--space-xl)' }}>Get in touch for a free consultation on your wall project.</p><div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center', flexWrap: 'wrap' }}><Link to="/get-quote" className="btn btn--primary btn--lg">Get a Quote</Link><Link to="/contact" className="btn btn--white btn--lg">Contact Us</Link></div></div>
      </section>
    </main>
  );
}
