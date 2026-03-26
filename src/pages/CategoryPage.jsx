import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './CategoryPage.css';

const categoryData = {
  'balcony-safety-nets': {
    title: 'Balcony Safety Nets',
    description: 'Ensure the safety of your loved ones and pets with our high-quality balcony safety nets.',
    images: ['/1.jpg', '/4.jpg'],
    content: [
      'Balconies are often the most vulnerable parts of a home, especially for families with children or pets. Our balcony safety nets are made from high-density polyethylene (HDPE) materials that are UV-stabilized and weather-resistant, providing long-lasting protection.',
      'We offer various mesh sizes and colors to match your home\'s aesthetic while providing a secure barrier. Our installation process is quick and non-intrusive, ensuring that your view remains unobstructed while safety is maximized.',
      'With over 12 years of experience in Hyderabad, we use only the best quality anchors and tensioning techniques to ensure the nets remain taut and effective for years to come.'
    ]
  },
  'pigeon-safety-nets': {
    title: 'Pigeon Safety Nets',
    description: 'Keep your premises clean and hygienic with our specialized pigeon and bird safety nets.',
    images: ['/5.jpg', '/2.jpg'],
    content: [
      'Pigeons and birds can cause significant health risks and property damage through their droppings and nesting. Our specialized bird safety nets provide a humane and effective solution to keep them away from your balconies and open areas.',
      'The nets are made from high-strength, low-visibility materials that don\'t spoil the look of your building. They are designed to withstand bird pecking and various weather conditions without losing their strength.',
      'We provide customized solutions for residential apartments, independent houses, and commercial buildings across Hyderabad, ensuring every open space is securely protected from bird intrusion.'
    ]
  },
  'children-safety-nets': {
    title: 'Children Safety Nets',
    description: 'Specialized safety solutions designed to protect children from accidents in high-rise buildings.',
    images: ['/6.jpg', '/3.jpg'],
    content: [
      'Safety for children in high-rise buildings is non-negotiable. Our children safety nets are specifically designed to provide an extra layer of security for windows, balconies, and staircases, preventing accidental falls.',
      'These nets are tested for high-impact resistance and are installed using triple-locking mechanisms for maximum security. The soft yet strong texture ensures that even if a child comes into contact with the net, they remain unharmed.',
      'We follow stringent safety protocols during installation, ensuring that there are no gaps or loose ends. Give yourself peace of mind knowing that your children are safe within your home.'
    ]
  },
  'anti-bird-nets': {
    title: 'Anti Bird Nets',
    description: 'Professional bird control service for apartments and commercial buildings.',
    images: ['/11.jpg', '/12.jpg'],
    content: [
      'Protect your open areas, AC ledge, and duct areas from bird nesting with our durable anti-bird nets. These nets are specially designed to be nearly invisible, maintaining the visual appeal of your building.',
      'Made from UV-stabilized co-polymer nylon, our nets are weather-resistant and long-lasting. They provide a physical barrier that prevents birds from entering while allowing light and air to pass through freely.',
      'Our team specialized in high-rise installations, using safety equipment and professional tools to ensure a perfect fit for any area, no matter how hard to reach.'
    ]
  },
  'monkey-safety-nets': {
    title: 'Invisible Grill',
    description: 'High-tensile stainless steel wire grills for safety without blocking the view.',
    images: ['/inv1.jpg', '/inv2.jpg'],
    content: [
      'Invisible grills are a modern alternative to traditional iron grills, offering the perfect blend of safety and aesthetics. Made from high-tensile stainless steel wires, these grills are designed to be almost invisible from a distance, ensuring you don\'t lose your view or ventilation.',
      'Our invisible grills are rust-proof, extremely durable, and can withstand significantly high pressure. They are perfect for balconies, windows, and staircases in high-rise apartments, providing a secure barrier for children and pets without making your home feel like a cage.',
      'Advanced installation techniques ensure that every wire is perfectly tensioned. The grills are easy to maintain and do not obstruct the architectural beauty of your building, making them the preferred choice for premium homes and offices across Hyderabad.'
    ]
  },
  'pigeon-spikes': {
    title: 'Pigeon & Bird Spikes',
    description: 'Humane bird control solution to prevent landing on ledges and pipes.',
    images: ['/10.jpg', '/8.jpg'],
    content: [
      'Bird spikes are a highly effective, low-maintenance way to prevent pigeons and other birds from perching or nesting on ledges, pipes, and signboards. They provide a physical deterrent without harming the birds.',
      'Our spikes are made from high-quality stainless steel or polycarbonate materials that are weather-resistant and nearly invisible from the ground. They are installed using strong industrial grade adhesives or mechanical fasteners.',
      'This solution is ideal for narrow areas where nets may not be practical. We provide professional installation services for schools, offices, and residential complexes across Hyderabad.'
    ]
  },
  'duct-area-safety-nets': {
    title: 'Duct Area Nets',
    description: 'Secure open duct areas in apartments to prevent falls and bird movement.',
    images: ['/5.jpg', '/11.jpg'],
    content: [
      'Open duct areas in apartment buildings are common sites for bird nesting and accidental falls. Our duct area safety nets effectively cover these shafts while ensuring proper ventilation and light flow.',
      'We use high-grade nets that are specifically designed for vertical shafts, capable of withstanding the wind pressure and environmental conditions within the ducts. These nets are easy to install and maintain.',
      'Secure your building\'s duct areas today to prevent unhygienic conditions and safety hazards with our professional netting solutions.'
    ]
  },
  'sports-nets': {
    title: 'Sports Practice Nets',
    description: 'Heavy-duty practice nets for cricket, football, and other sports facilities.',
    images: ['/sports2.jpg', '/sports3.jpg', '/sports1.jpg'],
    content: [
      'Our sports practice nets are designed for durability and performance. Whether you need a cricket practice pitch, a football ground enclosure, or a general sports facility net, we provide professional-grade solutions.',
      'Made from high-impact resistant materials, these nets can withstand continuous use and high-velocity ball strikes. We offer various mesh sizes to suit different sports and skill levels.',
      'We have successfully installed sports netting for schools, clubs, and private residential complexes across Hyderabad, ensuring a safe and focused practice environment.'
    ]
  }
};

export default function CategoryPage() {
  const { categoryId } = useParams();
  const data = categoryData[categoryId];

  if (!data) {
    return (
      <div className="category-error">
        <h1>Category Not Found</h1>
        <p>The service you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="category-page">
      <Helmet>
        <title>{data.title} | SRC Safety Nets Hyderabad</title>
        <meta name="description" content={data.description} />
      </Helmet>

      <div className="category-page__hero">
        <h1 className="category-page__title">{data.title}</h1>
        <p className="category-page__description">{data.description}</p>
      </div>

      <div className="category-page__content-grid">
        <div className="category-page__images">
          {data.images.map((src, idx) => (
            <div key={idx} className="category-page__img-container">
              <img src={src} alt={data.title} className="category-page__img" />
            </div>
          ))}
        </div>

        <div className="category-page__text">
          {data.content.map((p, idx) => (
            <p key={idx} className="category-page__p">{p}</p>
          ))}
          <div className="category-page__cta">
            <h3>Get a Free Consultation</h3>
            <p>Contact us now for measurements and a free quote.</p>
            <div className="category-page__actions">
              <a href="tel:7816054341" className="category-btn category-btn--primary">Call Now</a>
              <a href="https://api.whatsapp.com/send?phone=+917816054341&text=Hi,%20I'm%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="category-btn category-btn--whatsapp">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
