import './HowItWorks.css';

const steps = [
  {
    number: '01',
    title: 'Free Site Inspection',
    desc: 'We offer a free site visit to assess your needs, taking exact measurements of the area.',
  },
  {
    number: '02',
    title: 'Tailored Solution',
    desc: 'Based on the inspection, we provide a customized safety netting plan and quotation.',
  },
  {
    number: '03',
    title: 'Professional Installation',
    desc: 'Our experienced staff installs the high-quality, weatherproof nets safely and securely.',
  },
  {
    number: '04',
    title: 'Enjoy Peace of Mind',
    desc: 'Experience a secure, bird-free environment with fresh air and sunlight.',
  },
];

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="how__inner">
        <div className="how__header">
          <p className="how__eyebrow">Our Process</p>
          <h2 className="how__title">How We Work</h2>
          <p className="how__sub">Getting your safety nets installed is quick and hassle-free.</p>
        </div>
        <div className="how__steps">
          {steps.map((s, i) => (
            <div key={s.number} className="how__step">
              <div className="how__step-number">{s.number}</div>
              {i < steps.length - 1 && <div className="how__step-line" />}
              <h3 className="how__step-title">{s.title}</h3>
              <p className="how__step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="how__cta-wrap">
          <a href="tel:7816054341" className="how__cta">Book Free Inspection</a>
        </div>
      </div>
    </section>
  );
}
