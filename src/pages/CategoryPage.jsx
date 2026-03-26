import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './CategoryPage.css';

const categoryData = {
  'balcony-safety-nets': {
    title: 'Balcony Safety Nets',
    description: 'Ensure the highest safety standards for your balcony without compromising on aesthetics.',
    images: ['/11.jpg', '/1.jpg', '/trnasparent.jpg'],
    content: [
      'Balcony Safety Nets are essential for ensuring the safety of your family, especially in high-rise apartments and residential buildings. These nets act as a protective barrier, preventing accidental falls, especially for children, elderly people, and pets. They are also highly effective in keeping unwanted birds like pigeons away from your balcony, thereby maintaining cleanliness and hygiene.',
      'Made from high-quality, durable nylon or polyethylene materials, balcony safety nets are weather-resistant and capable of withstanding strong winds and rain. They are UV-stabilized, which means they do not degrade easily under the sun, making them a long-term safety solution.',
      'Installation is quick and hassle-free, handled by professionals who ensure that the net is securely fixed without damaging the structure of the balcony. These nets come in various sizes and colors to blend well with your building’s aesthetics, providing safety without compromising on appearance.',
      'Whether you live in a high-rise or a low-rise building, balcony safety nets offer peace of mind by significantly reducing the risk of accidents. They are a practical investment for anyone looking to create a safe and bird-free environment on their balcony.'
    ]
  },
  'pigeon-safety-nets': {
    title: 'Pigeon Safety Nets',
    description: 'Keep your premises clean and pigeon-free with out durable anti-bird netting.',
    images: ['/10.jpg', '/2.jpg', '/black.jpg', '/white.jpg'],
    content: [
      'Pigeon safety nets are an effective solution to prevent pigeons and other birds from nesting and roosting in unwanted areas, especially balconies, windows, and terraces. These nets act as a barrier, ensuring that birds cannot access the space, thus preventing damage, health hazards, and unpleasant messes caused by bird droppings.',
      'Made from durable, high-quality materials like nylon or polyethylene, pigeon safety nets are designed to withstand harsh weather conditions and provide long-lasting protection. The nets are lightweight, flexible, and can be easily installed without causing any damage to the structure of the building. They are available in various sizes and mesh patterns to suit different spaces, offering a versatile and customizable solution.',
      'Installing pigeon safety nets is essential for maintaining a clean and hygienic environment. Bird droppings can be a breeding ground for bacteria and parasites, posing a risk to health. Additionally, pigeon nests can block ventilation systems and cause damage to the building\'s infrastructure.',
      'By installing pigeon safety nets, you can ensure the safety and cleanliness of your living or working space while preserving the aesthetic value of your property. These nets are commonly used in residential, commercial, and industrial buildings, offering an eco-friendly solution to bird control.'
    ]
  },
  'anti-bird-nets': {
    title: 'Anti Bird Nets for Balconies',
    description: 'Effective bird control solutions for residential and commercial buildings.',
    images: ['/12.jpg', '/4.jpg'],
    content: [
      'Anti bird nets for balconies are an effective solution to prevent birds from nesting or entering your living spaces. These nets are specifically designed to protect balconies, windows, and other open areas from unwanted bird activity. Made from durable, UV-resistant materials like nylon or polyethylene, they provide long-lasting protection without compromising the aesthetic appeal of your home.',
      'The nets are discreet and nearly invisible from a distance, offering a seamless look while ensuring that birds are kept out. They are highly effective in preventing pigeons, sparrows, crows, and other birds from damaging property, creating messes, or spreading diseases. These nets also help to avoid the constant cleaning of droppings from your balcony and prevent birds from nesting in dangerous locations.',
      'Anti bird nets are customizable to fit any size balcony or window, and they are easy to install and maintain. Whether you live in a high-rise or a low-level apartment, these nets can be installed without affecting the structure of the building. With their strength, versatility, and ability to blend into the environment, anti bird nets for balconies provide a practical, eco-friendly solution for keeping birds at bay.'
    ]
  },
  'children-safety-nets': {
    title: 'Children Safety Nets',
    description: 'Childproof your windows and balconies effectively.',
    images: ['/3.jpg', '/8.jpg', '/9.jpg'],
    content: [
      'Children Safety Nets are essential for ensuring the safety of toddlers and young children in high-rise buildings, staircases, balconies, and open terraces. These specially designed nets act as a protective barrier that prevents accidental falls while allowing visibility and airflow. Parents can enjoy peace of mind knowing their child is secure even when playing near risky areas.',
      'Made from high-quality, UV-resistant nylon or polyethylene material, children safety nets are strong, durable, and weather-resistant. They are tightly woven to prevent even small hands or limbs from slipping through, offering comprehensive protection without compromising aesthetics. Installation is quick and non-intrusive, suitable for both residential apartments and houses.',
      'These nets are widely used in balconies, windows, stairwells, and rooftops. They are especially beneficial in urban homes where space is limited and kids often play indoors or in confined outdoor areas. Child safety nets are also customizable to fit any size or shape of the open space, making them a versatile safety solution.',
      'Whether it\'s in a home, school, or daycare, installing a children safety net is a proactive step towards childproofing your environment. It\'s a simple yet effective way to create a safer play area for your little ones without obstructing your view or ventilation.'
    ]
  },
  'duct-area-safety-nets': {
    title: 'Duct Area Safety Nets',
    description: 'Prevent falls and pigeon nesting in open shafts and duct areas.',
    images: ['/5.jpg', '/6.jpg'],
    content: [
      'Duct Area Safety Nets are essential installations designed to prevent accidents and ensure safety in high-rise buildings. These nets are typically installed in the open duct spaces between buildings or within apartment complexes, where accidental falls can pose a serious risk to residents, especially children, pets, and maintenance workers.',
      'Crafted from durable, UV-resistant, and weatherproof nylon or polyethylene materials, duct area safety nets are strong enough to withstand harsh outdoor conditions while offering long-term protection. They are expertly fixed with high-quality anchors and hooks to provide a secure barrier that covers dangerous gaps and voids in the duct area.',
      'Beyond preventing falls, these nets also serve as effective protection against birds, debris, and other unwanted intrusions into the duct, which can block ventilation systems or create maintenance challenges. Many professional safety net providers offer customized solutions based on duct size, location, and usage, ensuring a perfect fit and optimal safety.',
      'Whether for residential apartments, commercial buildings, or industrial complexes, installing duct area safety nets is a smart and necessary step toward maintaining a secure environment. Their unobtrusive design also ensures they blend seamlessly with building aesthetics while providing peace of mind to residents and property managers alike.'
    ]
  },
  'sports-nets': {
    title: 'All Sports Practice Nets',
    description: 'Heavy duty nets for cricket practice, football, and indoor sports.',
    images: ['/sports2.jpg', '/sports3.jpg'],
    content: [
      'All sports practice nets are essential tools for enhancing training sessions across various sports. These nets provide athletes with a safe and effective way to practice their skills while reducing the risk of injuries and damage to the surroundings.',
      'They are commonly used in sports like baseball, soccer, tennis, cricket, and golf, allowing players to work on their throwing, hitting, and kicking techniques without interrupting others or losing equipment.',
      'Sports practice nets come in different shapes and sizes to cater to the specific needs of each sport. For instance, a batting cage is perfect for cricket players, providing them with the space to hit balls consistently without the worry of chasing them down. Soccer practice nets help players improve their goal-scoring accuracy.',
      'These nets are made from durable materials such as high-density polyethylene (HDPE) ensuring they can withstand repeated high-impact use and harsh weather conditions. Many of them are designed for easy setup and portability, making them ideal for both professional and recreational use.'
    ]
  },
  'monkey-safety-nets': {
    title: 'Monkey Safety Nets',
    description: 'Strong, weather-resistant nets designed to block monkey entry and ensure safety.',
    images: ['/2.jpg', '/4.jpg'],
    content: [
      'Protect your home and property from unwanted monkey intrusions with our durable monkey safety nets. In many urban and suburban areas, monkeys can pose a significant challenge, entering balconies, rooftops, and windows, causing damage and potential safety risks.',
      'Our monkey safety nets are made from high-strength, weather-resistant materials designed specifically to withstand the agility and strength of monkeys. These nets provide a highly effective physical barrier while maintaining ventilation and natural light flow into your living spaces.',
      'Installation is performed by our expert technicians who ensure the nets are securely anchored and tensioned to provide maximum protection. Whether you live in an apartment complex or a standalone house, our monkey safety nets offer a humane and reliable long-term solution to keep your family and belongings safe.'
    ]
  },
  'pigeon-spikes': {
    title: 'Pigeon & Bird Spikes',
    description: 'Humane bird control solution to prevent landing on ledges and pipes.',
    images: ['/10.jpg', '/8.jpg'],
    content: [
      'Pigeon spikes are an effective and humane bird control solution designed to prevent pigeons and other large birds from landing, roosting, or nesting on your property. They are ideal for ledges, window sills, pipes, rooftops, and commercial signage.',
      'These spikes do not harm the birds; they simply create an uneven landing surface that encourages them to find a different place to roost. Made from high-quality stainless steel or UV-stabilized polycarbonate, our spikes are durable, weather-resistant, and virtually maintenance-free.',
      'By installing pigeon spikes, you can keep your building ledges clean and free from acidic bird droppings, which can damage surfaces over time. It’s a discreet, long-lasting, and cost-effective way to maintain a hygienic and pest-free environment for your home or business.'
    ]
  },
  'building-safety-nets': {
    title: 'House Covering Safety Nets',
    description: 'Protect your home from debris, birds, and dust while ensuring ventilation.',
    images: ['/9.jpg', '/12.jpg'],
    content: [
      'House covering safety nets offer comprehensive protection for residential buildings, open terraces, and rooftops. These nets are designed to act as a versatile barrier against falling debris, bird intrusions, and even dust, making them ideal for homes in busy or high-risk areas.',
      'Whether you are looking to protect your rooftop garden, cover an open shaft, or provide safety during minor repairs, our building safety nets are up to the task. They are made from high-density materials that are UV-stabilized and weatherproof, ensuring they remain strong and effective for years.',
      'Our professional installation team ensures a secure and aesthetic fit that doesn’t detract from your building’s look. These nets allow for full ventilation and natural light while providing the heavy-duty protection your property deserves.'
    ]
  }
};

const defaultData = {
    title: 'Safety Netting Services',
    description: 'High quality safety netting solutions.',
    images: ['/1.jpg', '/2.jpg'],
    content: [
      'We provide top-tier safety net installations for all your residential and commercial needs. Our experienced technicians ensure a flawless setup that guarantees maximum safety without compromising your property\'s aesthetics.',
      'Contact us today for a free inspection and tailored quote!'
    ]
};

export default function CategoryPage() {
  const { categoryId } = useParams();
  
  // Try to match or fallback to a generative title
  let data = categoryData[categoryId];
  if (!data) {
    data = {
      ...defaultData,
      title: categoryId ? categoryId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) : 'Service'
    };
  }

  return (
    <div className="category-page">
      <Helmet>
        <title>{data.title} | SRC Safety Nets</title>
        <meta name="description" content={data.description} />
      </Helmet>
      <div className="category-page__hero">
        <h1 className="category-page__title animate-title">{data.title}</h1>
        <p className="category-page__desc animate-desc">{data.description}</p>
      </div>

      <div className="category-page__main">
        <div className="category-page__content animate-text">
          {data.content.map((paragraph, idx) => (
            <p key={idx} className="category-page__text">{paragraph}</p>
          ))}
          
          <div className="category-page__cta-box">
             <h3>Ready to secure your space?</h3>
             <p>Call our experts today for a free site inspection and consultation.</p>
             <div className="category-page__buttons">
               <a href="tel:7816054341" className="category-page__btn">Call Now: +91 7816054341</a>
               <a href="https://api.whatsapp.com/send?phone=+917816054341&text=Hi,%20SRC%20SAFETY%20NETS.%20-%20I%27m%20Interested%20in%20knowing%20price%20for%20the%20services%20you%20offer." target="_blank" rel="noreferrer" className="category-page__btn category-page__btn--whatsapp">
                 WhatsApp Us
               </a>
             </div>
          </div>
        </div>

        <div className="category-page__images">
          {data.images.map((imgSrc, idx) => (
            <div key={idx} className={`category-page__image-wrap animate-img animate-img-${idx}`}>
              <img src={imgSrc} alt={`${data.title} ${idx + 1}`} className="category-page__image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
