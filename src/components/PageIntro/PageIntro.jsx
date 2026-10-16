import './PageIntro.css';

/**
 * PageIntro — Premium inner-page header that replaces the old full-bleed hero.
 *
 * Props:
 *  - eyebrow   (string)  — small uppercase category label
 *  - title     (string)  — main h1 heading
 *  - desc      (string)  — short intro paragraph
 *  - columns   (array)   — optional: [{ title, items: string[] }]
 *  - children  (node)    — optional extra content below the columns
 */
export default function PageIntro({ eyebrow, title, desc, image, imageAlt, badge, columns, children }) {
  return (
    <section className="page-intro">
      <div className="page-intro__inner container">
        {/* Top Hero Row: Text on left, 3D curved photo card on right */}
        <div className={`page-intro__top ${image ? 'page-intro__top--has-image' : ''}`}>
          <div className="page-intro__header">
            {eyebrow && <span className="page-intro__eyebrow">{eyebrow}</span>}
            <h1 className="page-intro__title">{title}</h1>
            {desc && <p className="page-intro__desc">{desc}</p>}
          </div>

          {image && (
            <div className="page-intro__media-wrap">
              <div className="page-intro__media-card">
                <img
                  src={image}
                  alt={imageAlt || title}
                  className="page-intro__media-img"
                  loading="eager"
                />
                <div className="page-intro__media-glare" />
                <div className="page-intro__media-badge">
                  <span className="page-intro__media-badge-dot" />
                  <span>{badge || eyebrow || 'Featured Design'}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Optional columns (Suitable Rooms, Design Pairings, etc.) */}
        {columns && columns.length > 0 && (
          <div className={`page-intro__columns page-intro__columns--${columns.length}`}>
            {columns.map((col, i) => (
              <div key={i} className="page-intro__col">
                <h3 className="page-intro__col-title">{col.title}</h3>
                <ul className="page-intro__col-list">
                  {col.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
