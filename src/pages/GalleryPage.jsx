import { Helmet } from 'react-helmet-async';
import './GalleryPage.css';

const galleryImages = [
  '/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg',
  '/5.jpg', '/6.jpg', '/7.jpg', '/8.jpg',
  '/9.jpg', '/10.jpg', '/11.jpg', '/12.jpg',
  '/sports1.jpg', '/sports2.jpg', '/sports3.jpg',
  '/inv1.jpg', '/inv2.jpg', '/green.jpg',
];

export default function GalleryPage() {
  return (
    <div className="gallery-page">
      <Helmet>
        <title>Gallery | SRC Safety Nets</title>
        <meta name="description" content="Browse our photo gallery of safety net installations in Hyderabad." />
      </Helmet>
      <div className="gallery-page__hero">
        <h1 className="gallery-page__title">Our Work</h1>
        <p className="gallery-page__sub">A showcase of our safety net installations across Hyderabad</p>
      </div>
      <div className="gallery-page__grid">
        {galleryImages.map((src, idx) => (
          <div key={idx} className="gallery-page__item">
            <img src={src} alt={`SRC Safety Nets installation ${idx + 1}`} className="gallery-page__img" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  );
}
