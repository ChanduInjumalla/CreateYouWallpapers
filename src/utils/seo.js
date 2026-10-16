import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BUSINESS } from '../data/business';

export function useSEO({ title, description, canonical, noindex = false, ogImage }) {
  const location = useLocation();
  const fullTitle = title || `${BUSINESS.name} | Premium Wallpaper & Wall Panels in Hyderabad`;
  const fullCanonical = canonical || `${BUSINESS.domain}${location.pathname}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(name.startsWith('og:') || name.startsWith('twitter:') ? 'property' : 'name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    if (description) setMeta('description', description);
    setLink('canonical', fullCanonical);

    // Robots
    let robotsEl = document.querySelector('meta[name="robots"]');
    if (!robotsEl) {
      robotsEl = document.createElement('meta');
      robotsEl.setAttribute('name', 'robots');
      document.head.appendChild(robotsEl);
    }
    robotsEl.setAttribute('content', noindex ? 'noindex, nofollow' : 'index, follow');

    // Open Graph
    setMeta('og:title', fullTitle);
    if (description) setMeta('og:description', description);
    setMeta('og:url', fullCanonical);
    setMeta('og:type', 'website');
    setMeta('og:site_name', BUSINESS.name);
    if (ogImage) setMeta('og:image', ogImage);

    // Twitter
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    if (description) setMeta('twitter:description', description);

    // Scroll to top
    window.scrollTo(0, 0);
  }, [fullTitle, description, fullCanonical, noindex, ogImage]);
}

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
