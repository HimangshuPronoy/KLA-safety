import './Features.css';

const features = [
  {
    icon: '✦',
    title: 'Experienced Professionals',
    desc: 'With over 12+ years of hands-on expertise, our team ensures safe and secure net installations.',
  },
  {
    icon: '◈',
    title: 'Premium Quality Nets',
    desc: "We use durable, weather-resistant materials that provide long-lasting protection.",
  },
  {
    icon: '⬡',
    title: 'Quick Installation',
    desc: 'Our team provides same-day service in most areas, completing work with minimal disruption.',
  },
  {
    icon: '◎',
    title: 'Affordable Pricing',
    desc: 'We offer competitive rates without compromising on quality, ensuring value for your money.',
  },
];

export default function Features() {
  return (
    <section className="features">
      <div className="features__inner">
        <div className="features__header">
          <p className="features__eyebrow">Why KLA Safety Nets</p>
          <h2 className="features__title">
            Your Safety.<br />Our Priority.<br />Trusted by Thousands.
          </h2>
        </div>
        <div className="features__grid">
          {features.map((f) => (
            <div key={f.title} className="features__card">
              <span className="features__card-icon">{f.icon}</span>
              <h3 className="features__card-title">{f.title}</h3>
              <p className="features__card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
