import { Link } from 'react-router-dom';
import './CategoryCard.css';

export default function CategoryCard({ name, shortDescription, url, image, placeholderBg = 'warm', index = 0 }) {
  return (
    <article className="cat-card" style={{ animationDelay: `${index * 0.05}s` }}>
      <Link to={url} className="cat-card__link">
        <div className={`cat-card__image ${!image ? `img-placeholder img-placeholder--${placeholderBg}` : ''}`}>
          {image ? (
            <img src={image} alt={name} loading="lazy" />
          ) : (
            <span>{name}</span>
          )}
        </div>
        <div className="cat-card__body">
          <h3 className="cat-card__title">{name}</h3>
          {shortDescription && <p className="cat-card__text">{shortDescription}</p>}
          <span className="cat-card__action">Explore →</span>
        </div>
      </Link>
    </article>
  );
}
