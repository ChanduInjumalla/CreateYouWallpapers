import { Link } from 'react-router-dom';
import { useSEO } from '../../utils/seo';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { getWhatsAppLink } from '../../data/business';
import './HowItWorks.css';

export default function HowItWorks() {
  useSEO({
    title: 'How It Works — The Wallpaper & Wall Panel Journey | CreateYouWallpapers Hyderabad',
    description: 'Learn how CreateYouWallpapers transforms your interior walls in 4 simple steps: Doorstep measurement, 3D mockup, factory precision printing, and 1-day installation.',
  });

  const steps = [
    {
      num: '01',
      title: 'Free Doorstep Measurement & Catalog Preview',
      tagline: 'No guesswork. Touch and feel real textures in your home lighting.',
      desc: 'Our interior wall stylist visits your home anywhere in Hyderabad with physical catalogs containing 500+ authentic samples (washable vinyl, textured canvas, fluted louvers, and UV marble). We capture precise laser measurements down to the millimeter.',
      icon: '📐',
      points: [
        'Over 500+ live material samples brought to your home',
        'Laser distance measurement for zero sizing error',
        'Wall dampness & moisture surface test included',
        'Free design consultation with zero commitment',
      ],
      image: '/gallery/wallpaper-shop-collection-rolls.jpeg',
    },
    {
      num: '02',
      title: 'Personalized 3D Digital Room Mockup',
      tagline: 'See your chosen wallpaper on your actual wall before printing.',
      desc: 'Our graphic design studio takes high-resolution photos of your room and renders realistic 3D architectural mockups. You can test different pattern scales, adjust wallpaper cropping around TV units or AC vents, and approve the look with 100% confidence.',
      icon: '🎨',
      points: [
        'Photorealistic 3D render on your real room photo',
        'Custom color tone and pattern scale adjustments',
        'Seamless integration preview around TV, shelves & switches',
        'Unlimited revisions until you are completely satisfied',
      ],
      image: '/gallery/designer-feature-wall-fluted.jpeg',
    },
    {
      num: '03',
      title: 'Factory Precision Customization & Numbering',
      tagline: 'High-density European pigments & anti-humidity substrates.',
      desc: 'Once approved, your wallpapers and panels enter precision production. Custom murals are cut into sequentially numbered drops with overlap-and-trim technology, guaranteeing perfect seam alignment. Panels are precision mitered with matching corner profiles.',
      icon: '🏭',
      points: [
        'Commercial grade moisture-proof & anti-fungal substrates',
        'UV-cured pigment inks that never fade in sunlight',
        'Numbered panel sequence for foolproof assembly',
        'Thorough 14-point pre-dispatch quality inspection',
      ],
      image: '/gallery/luxury-marble-fluted-panel-living-room.jpeg',
    },
    {
      num: '04',
      title: '1-Day Master Installation & 10-Year Warranty',
      tagline: 'Zero dust, zero hassle, spotless clean handover.',
      desc: 'Our certified in-house master technicians arrive on time with specialized wallpaper adhesive, seam rollers, and laser alignment levels. Most accent walls are completed in 2 to 4 hours. We clean up all debris, inspect every seam, and handover with a 10-year warranty.',
      icon: '✨',
      points: [
        'Completed in 2–4 hours (Full room in 1 day)',
        'Zero messy sanding dust — clean, quiet application',
        'Anti-bubble and hairline-invisible seam joints',
        '10-Year comprehensive warranty card issued on spot',
      ],
      image: '/gallery/luxury-fluted-panel-foyer.jpeg',
    },
  ];

  return (
    <main className="how-page">
      <div className="container">
        <Breadcrumbs
          items={[
            { label: 'Home', path: '/' },
            { label: 'How It Works', path: '/how-it-works' },
          ]}
        />

        <div className="how-hero">
          <span className="how-hero__badge">Seamless 4-Step Process</span>
          <h1 className="how-hero__title">How CreateYou Transforms Your Walls</h1>
          <p className="how-hero__sub">
            From doorstep sample selection to 1-day flawless installation across Hyderabad — here is how we deliver perfection without stress.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="how-steps">
          {steps.map((s, idx) => (
            <div key={s.num} className={`how-step-card ${idx % 2 === 1 ? 'reverse' : ''}`}>
              <div className="how-step-body">
                <div className="how-step-header">
                  <span className="how-step-num">{s.num}</span>
                  <span className="how-step-icon">{s.icon}</span>
                </div>
                <h2 className="how-step-title">{s.title}</h2>
                <p className="how-step-tagline">{s.tagline}</p>
                <p className="how-step-desc">{s.desc}</p>
                <ul className="how-step-points">
                  {s.points.map((pt, i) => (
                    <li key={i}>
                      <span className="how-check-icon">✓</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="how-step-visual">
                <img src={s.image} alt={s.title} loading="lazy" />
                <div className="how-step-visual-badge">Step {s.num} of 04</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="how-cta-banner">
          <div className="how-cta-content">
            <span className="how-cta-badge">Ready to Start?</span>
            <h2>Book Your Free Doorstep Visit Today</h2>
            <p>Our expert will bring catalogs and laser measuring tools to your home anywhere in Hyderabad.</p>
          </div>
          <div className="how-cta-actions">
            <Link to="/get-quote" className="btn btn--primary btn--lg">
              Book Free Consultation
            </Link>
            <a
              href={getWhatsAppLink('Hi CreateYouWallpapers, I would like to schedule a free doorstep measurement and catalog visit for my home.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary btn--lg"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
