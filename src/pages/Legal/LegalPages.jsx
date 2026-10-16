import { useSEO } from '../../utils/seo';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import { BUSINESS } from '../../data/business';
import '../Wallpapers/Wallpapers.css';
import './Legal.css';

export function PrivacyPolicy() {
  useSEO({ title: 'Privacy Policy | CreateYouWallpapers', description: 'Privacy policy for CreateYouWallpapers website — how we handle your data.' });
  return (
    <main className="page-top">
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Privacy Policy' }]} />
      <section className="section"><div className="container container--narrow legal-page">
        <h1>Privacy Policy</h1>
        <p className="legal-date">Effective Date: October 2026</p>
        <h2>Introduction</h2>
        <p>{BUSINESS.name} ("we", "our", "us") is committed to protecting the privacy of visitors to our website. This policy explains how we collect, use, and protect your information.</p>
        <h2>Information We Collect</h2>
        <p>When you submit an enquiry or quote request through our website, we may collect:</p>
        <ul><li>Your name</li><li>Phone number / WhatsApp number</li><li>Email address (if provided)</li><li>Location / locality</li><li>Room type and product interest</li><li>Project description</li></ul>
        <h2>How We Use Your Information</h2>
        <p>We use the information you provide solely to:</p>
        <ul><li>Respond to your enquiry</li><li>Provide quotes and recommendations</li><li>Schedule consultations and installations</li><li>Improve our services</li></ul>
        <h2>Cookies and Analytics</h2>
        <p>Our website may use cookies and analytics tools to understand how visitors use our site. This data is anonymised and used only to improve user experience.</p>
        <h2>Third-Party Services</h2>
        <p>We do not sell or share your personal information with third parties except as necessary to provide our services (e.g., delivery, installation partners).</p>
        <h2>Data Security</h2>
        <p>We take reasonable measures to protect your personal information from unauthorised access, alteration, or disclosure.</p>
        <h2>Contact</h2>
        <p>For privacy-related questions, contact us at <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.</p>
      </div></section>
    </main>
  );
}

export function TermsAndConditions() {
  useSEO({ title: 'Terms and Conditions | CreateYouWallpapers', description: 'Terms and conditions for using the CreateYouWallpapers website.' });
  return (
    <main className="page-top">
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Terms & Conditions' }]} />
      <section className="section"><div className="container container--narrow legal-page">
        <h1>Terms and Conditions</h1>
        <p className="legal-date">Effective Date: October 2026</p>
        <h2>Website Use</h2>
        <p>By using this website, you agree to these terms. The content on this website is provided for informational purposes and to facilitate enquiries about our wallpaper, wall panel, and interior surface services.</p>
        <h2>Enquiry Information</h2>
        <p>Information submitted through our forms is used solely to process your enquiry and provide quotes. We do not guarantee specific outcomes, prices, or availability through this website.</p>
        <h2>Intellectual Property</h2>
        <p>All content, designs, and materials on this website are the property of {BUSINESS.name} unless otherwise stated. You may not reproduce, distribute, or use our content without permission.</p>
        <h2>Limitations</h2>
        <p>We make reasonable efforts to ensure accuracy but do not warrant that all information on this website is complete or current. Prices, availability, and specifications should be confirmed directly with our team.</p>
        <h2>Contact</h2>
        <p>For questions about these terms, contact us at <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a>.</p>
      </div></section>
    </main>
  );
}

export function RefundCancellation() {
  useSEO({ title: 'Refund and Cancellation Policy | CreateYouWallpapers', description: 'Refund and cancellation policy for CreateYouWallpapers services.' });
  return (
    <main className="page-top">
      <Breadcrumbs items={[{ label: 'Home', url: '/' }, { label: 'Refund & Cancellation' }]} />
      <section className="section"><div className="container container--narrow legal-page">
        <h1>Refund and Cancellation Policy</h1>
        <p className="legal-date">Effective Date: October 2026</p>
        <h2>Overview</h2>
        <p>This policy applies to wallpaper, wall panel, and installation services provided by {BUSINESS.name}.</p>
        <h2>Cancellations</h2>
        <p>If you need to cancel or reschedule a confirmed service, please contact us as early as possible. Cancellation terms depend on the stage of your project and will be discussed during the consultation process.</p>
        <h2>Refunds</h2>
        <p>Refund eligibility depends on the specific circumstances of your order. Custom-made materials and installed products may not be eligible for refund. Please discuss refund terms with our team before confirming your order.</p>
        <h2>Contact</h2>
        <p>For refund or cancellation enquiries, contact us at <a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a> or call {BUSINESS.phone}.</p>
      </div></section>
    </main>
  );
}
