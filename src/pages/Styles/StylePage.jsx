import { Link, useLocation } from 'react-router-dom';
import CategoryPageTemplate from '../../components/CategoryPageTemplate/CategoryPageTemplate';
import { getCategoryDesignData } from '../../data/categoryDesigns';
import { styles } from './styleRoutes';
import '../Wallpapers/Wallpapers.css';

export default function StylePage() {
  const location = useLocation();
  const slug = location.pathname.replace('/', '');
  const style = styles.find(s => s.id === slug);

  if (!style) {
    return (
      <main className="page-top">
        <div className="container section">
          <h1>Style Not Found</h1>
          <p>Sorry, this design style category does not exist.</p>
          <Link to="/wallpapers" className="btn btn--primary">View Wallpapers</Link>
        </div>
      </main>
    );
  }

  const catData = getCategoryDesignData(slug);
  const mergedData = {
    ...catData,
    categoryName: style.name,
    h1: style.h1 || catData.h1,
    seoTitle: style.seoTitle || catData.seoTitle,
    metaDescription: style.meta || catData.metaDescription,
    shortIntro: catData.shortIntro || style.desc,
    largeVisual: catData.largeVisual,
  };

  const related = styles
    .filter(s => s.id !== slug)
    .slice(0, 3)
    .map(s => ({
      name: s.name,
      url: `/${s.id}`,
      image: '/gallery/luxury-marble-fluted-panel-living-room.jpeg',
      slug: s.id
    }));

  return (
    <CategoryPageTemplate
      categoryData={mergedData}
      breadcrumbItems={[
        { label: 'Home', url: '/' },
        { label: 'Styles' },
        { label: style.name }
      ]}
      relatedCategories={related}
    />
  );
}
