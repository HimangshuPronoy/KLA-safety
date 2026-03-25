import './Categories.css';

const categories = [
  {
    title: 'Balcony Safety Nets',
    sub: 'Protect your family and pets',
    image: '/4.jpg',
    link: '/category/balcony-safety-nets',
  },
  {
    title: 'Pigeon Safety Nets',
    sub: 'Maintain a clean, hygienic space',
    image: '/5.jpg',
    link: '/category/pigeon-safety-nets',
  },
  {
    title: 'Children Safety Nets',
    sub: 'Strong protection for open areas',
    image: '/6.jpg',
    link: '/category/children-safety-nets',
  },
  {
    title: 'Sports Nets',
    sub: 'For cricket, football & practice',
    image: '/7.jpg',
    link: '/category/sports-nets',
  },
];

export default function Categories() {
  return (
    <section className="categories">
      <div className="categories__inner">
        <div className="categories__header">
          <p className="categories__eyebrow">Our Services</p>
          <h2 className="categories__title">Explore Specialized Solutions</h2>
        </div>
        <div className="categories__grid">
          {categories.map((cat) => (
            <a key={cat.title} href={cat.link} className="cat-card">
              <div className="cat-card__img-wrap">
                <img src={cat.image} alt={cat.title} className="cat-card__img" />
                <div className="cat-card__overlay">
                  <span className="cat-card__shop">Shop now →</span>
                </div>
              </div>
              <div className="cat-card__body">
                <h3 className="cat-card__title">{cat.title}</h3>
                <p className="cat-card__sub">{cat.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
