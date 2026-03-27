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
        <title>Installation Gallery | SRC Safety Nets Hyderabad</title>
        <meta name="description" content="Explore our gallery of professional safety net installations in Hyderabad, including balcony nets, pigeon nets, and invisible grills." />
        <link rel="canonical" href="https://srcsafetynets.in/gallery" />
        <meta property="og:title" content="Safety Net Installation Gallery | SRC Safety Nets" />
      </Helmet>
      <div className="gallery-page__hero">
        <h1 className="gallery-page__title">Our Work</h1>
        <p className="gallery-page__sub">A showcase of our safety net installations across Hyderabad</p>
      </div>
      <div className="gallery-page__grid">
        {galleryImages.map((src, idx) => {
          const name = src.replace('/', '').replace('.jpg', '');
          let altTag = `SRC Safety Nets installation ${idx + 1}`;
          if (name.includes('sports')) altTag = `Sports Practice Net installation - SRC Safety Nets`;
          if (name.includes('inv')) altTag = `Invisible Grill installation - SRC Safety Nets`;
          if (name.includes('green')) altTag = `Balcony Safety Net (Green) - SRC Safety Nets`;
          
          return (
            <div key={idx} className="gallery-page__item">
              <img src={src} alt={altTag} className="gallery-page__img" loading="lazy" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
