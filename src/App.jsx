import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './utils/seo';

/* Layout */
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FloatingActions from './components/FloatingActions/FloatingActions';

/* Pages */
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import GetQuote from './pages/GetQuote/GetQuote';
import ThankYou from './pages/ThankYou/ThankYou';
import NotFound from './pages/NotFound/NotFound';
import PriceCalculator from './pages/PriceCalculator/PriceCalculator';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import Franchise from './pages/Franchise/Franchise';
import Partner from './pages/Partner/Partner';

/* Wallpapers */
import { WallpapersHub, WallpaperCategory } from './pages/Wallpapers/Wallpapers';

/* Wall Panels */
import { WallPanelsHub, WallPanelCategory } from './pages/WallPanels/WallPanels';

/* Rooms */
import { RoomsHub, RoomPage } from './pages/Rooms/Rooms';

/* Services */
import ServicePage from './pages/Services/ServicePage';

/* Styles */
import StylePage from './pages/Styles/StylePage';

/* Hyderabad SEO */
import HyderabadPage from './pages/Hyderabad/HyderabadPage';

/* Gallery / Projects */
import { GalleryPage, ProjectsPage, BeforeAfterPage } from './pages/Gallery/Gallery';

/* Content */
import { InspirationPage, BlogPage, FAQPage } from './pages/Content/ContentPages';

/* Legal */
import { PrivacyPolicy, TermsAndConditions, RefundCancellation } from './pages/Legal/LegalPages';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />

      <Routes>
        {/* Core */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/price-calculator" element={<PriceCalculator />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/partner" element={<Partner />} />

        {/* Wallpapers Hub + 11 Categories */}
        <Route path="/wallpapers" element={<WallpapersHub />} />
        <Route path="/floral-wallpaper" element={<WallpaperCategory />} />
        <Route path="/geometric-wallpaper" element={<WallpaperCategory />} />
        <Route path="/marble-effect-wallpaper" element={<WallpaperCategory />} />
        <Route path="/tropical-wallpaper" element={<WallpaperCategory />} />
        <Route path="/wood-effect-wallpaper" element={<WallpaperCategory />} />
        <Route path="/metallic-wallpaper" element={<WallpaperCategory />} />
        <Route path="/abstract-wallpaper" element={<WallpaperCategory />} />
        <Route path="/3d-wallpaper" element={<WallpaperCategory />} />
        <Route path="/grasscloth-wallpaper" element={<WallpaperCategory />} />
        <Route path="/natural-wallpaper" element={<WallpaperCategory />} />
        <Route path="/custom-wallpaper" element={<WallpaperCategory />} />

        {/* Wall Panels Hub + 11 Categories */}
        <Route path="/wall-panels" element={<WallPanelsHub />} />
        <Route path="/uv-marble-sheets" element={<WallPanelCategory />} />
        <Route path="/fluted-panels" element={<WallPanelCategory />} />
        <Route path="/charcoal-panels" element={<WallPanelCategory />} />
        <Route path="/pvc-panels" element={<WallPanelCategory />} />
        <Route path="/mosaic-tiles" element={<WallPanelCategory />} />
        <Route path="/pu-leather-sheets" element={<WallPanelCategory />} />
        <Route path="/pu-stone" element={<WallPanelCategory />} />
        <Route path="/artificial-grass" element={<WallPanelCategory />} />
        <Route path="/artificial-plants" element={<WallPanelCategory />} />
        <Route path="/wpc-pvc-flooring" element={<WallPanelCategory />} />
        <Route path="/wooden-flooring" element={<WallPanelCategory />} />

        {/* Rooms Hub + 10 Room Pages */}
        <Route path="/rooms" element={<RoomsHub />} />
        <Route path="/living-room-wallpaper" element={<RoomPage />} />
        <Route path="/bedroom-wallpaper" element={<RoomPage />} />
        <Route path="/kids-room-wallpaper" element={<RoomPage />} />
        <Route path="/dining-room-wallpaper" element={<RoomPage />} />
        <Route path="/tv-wall-designs" element={<RoomPage />} />
        <Route path="/pooja-room-wall-design" element={<RoomPage />} />
        <Route path="/home-office-wallpaper" element={<RoomPage />} />
        <Route path="/foyer-wall-design" element={<RoomPage />} />
        <Route path="/staircase-wall-design" element={<RoomPage />} />
        <Route path="/commercial-reception-wall-design" element={<RoomPage />} />

        {/* Services (7) */}
        <Route path="/wallpaper-installation" element={<ServicePage />} />
        <Route path="/3d-wall-panel-installation" element={<ServicePage />} />
        <Route path="/wall-panel-installation" element={<ServicePage />} />
        <Route path="/feature-wall-design" element={<ServicePage />} />
        <Route path="/interior-wall-finishes" element={<ServicePage />} />
        <Route path="/commercial-wall-solutions" element={<ServicePage />} />
        <Route path="/home-wall-makeovers" element={<ServicePage />} />

        {/* Styles (6) */}
        <Route path="/modern-wallpaper-design" element={<StylePage />} />
        <Route path="/minimalist-wallpaper-design" element={<StylePage />} />
        <Route path="/luxury-wallpaper-design" element={<StylePage />} />
        <Route path="/contemporary-wall-design" element={<StylePage />} />
        <Route path="/traditional-wall-design" element={<StylePage />} />
        <Route path="/nature-inspired-wall-design" element={<StylePage />} />

        {/* Hyderabad SEO (12) */}
        <Route path="/interior-wall-design-hyderabad" element={<HyderabadPage />} />
        <Route path="/wallpaper-shop-hyderabad" element={<HyderabadPage />} />
        <Route path="/wallpaper-installation-hyderabad" element={<HyderabadPage />} />
        <Route path="/wallpaper-dealers-hyderabad" element={<HyderabadPage />} />
        <Route path="/wall-panels-hyderabad" element={<HyderabadPage />} />
        <Route path="/3d-wall-panels-hyderabad" element={<HyderabadPage />} />
        <Route path="/pvc-wall-panels-hyderabad" element={<HyderabadPage />} />
        <Route path="/fluted-panels-hyderabad" element={<HyderabadPage />} />
        <Route path="/uv-marble-sheets-hyderabad" element={<HyderabadPage />} />
        <Route path="/wpc-panels-hyderabad" element={<HyderabadPage />} />
        <Route path="/artificial-grass-hyderabad" element={<HyderabadPage />} />
        <Route path="/wooden-flooring-hyderabad" element={<HyderabadPage />} />

        {/* Projects / Gallery */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/before-after" element={<BeforeAfterPage />} />

        {/* Content */}
        <Route path="/inspiration" element={<InspirationPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/faq" element={<FAQPage />} />

        {/* Legal */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-cancellation" element={<RefundCancellation />} />

        {/* 404 catch-all */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
      <FloatingActions />
    </BrowserRouter>
  );
}
