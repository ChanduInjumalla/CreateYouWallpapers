import { Link } from 'react-router-dom';
import './GalleryCard.css';

/**
 * GalleryCard — Reusable image card with improved caption contrast.
 *
 * Props:
 *  - src      (string)  — image source
 *  - alt      (string)  — image alt / caption text
 *  - to       (string)  — link destination (default: /gallery)
 *  - aspect   (string)  — CSS aspect-ratio value (default: 4/3)
 */
export default function GalleryCard({ src, alt, to = '/gallery', aspect = '4/3' }) {
  return (
    <Link to={to} className="gallery-card" style={{ '--card-aspect': aspect }}>
      <img
        className="gallery-card__img"
        src={src}
        alt={alt}
        loading="lazy"
      />
      <div className="gallery-card__overlay" />
      <span className="gallery-card__caption">{alt}</span>
    </Link>
  );
}
