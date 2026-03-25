import { Shield, Clock, Award, Hammer, Wrench, ThumbsUp } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  { icon: <Shield size={32} />, title: 'Premium Safety', desc: '100% Guaranteed safe installations ensuring the protection of your family and pets.' },
  { icon: <Clock size={32} />, title: 'Prompt Service', desc: 'We value your time. Our experienced team guarantees prompt service in Hyderabad.' },
  { icon: <Award size={32} />, title: '12+ Years Experience', desc: 'Industry leaders in providing customized net solutions for high-rise apartments.' },
  { icon: <Wrench size={32} />, title: 'High Quality Nets', desc: 'UV stabilized, anti-rust, and high-tensile strength nets that last for years.' },
  { icon: <Hammer size={32} />, title: 'Professional Fixing', desc: 'Skilled technicians using proper anchors without damaging your property structure.' },
  { icon: <ThumbsUp size={32} />, title: 'Free Inspection', desc: 'No-obligation free site visit and competitive quotation tailored to your needs.' }
];

export default function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <div className="why-choose-us__container">
        <div className="why-choose-us__header">
          <h2 className="why-choose-us__title">Why Choose KLA Safety Nets?</h2>
          <p className="why-choose-us__subtitle">We are committed to delivering the highest standard of safety nets without compromising on aesthetics or quality.</p>
        </div>
        
        <div className="why-choose-us__grid">
          {features.map((f, i) => (
            <div key={i} className="why-choose-us__card">
              <div className="why-choose-us__icon">{f.icon}</div>
              <h3 className="why-choose-us__card-title">{f.title}</h3>
              <p className="why-choose-us__card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
