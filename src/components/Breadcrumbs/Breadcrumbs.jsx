import { Link } from 'react-router-dom';
import './Breadcrumbs.css';

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => {
      const link = item.url || item.path;
      return {
        '@type': 'ListItem',
        position: i + 1,
        name: item.label,
        ...(link ? { item: link } : {}),
      };
    }),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol className="breadcrumbs__list container">
          {items.map((item, i) => {
            const link = item.url || item.path;
            return (
              <li key={i} className="breadcrumbs__item">
                {i < items.length - 1 && link ? (
                  <><Link to={link} className="breadcrumbs__link">{item.label}</Link><span className="breadcrumbs__sep">›</span></>
                ) : (
                  <span className="breadcrumbs__current" aria-current="page">{item.label}</span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
