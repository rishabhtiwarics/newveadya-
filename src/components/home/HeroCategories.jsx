import React from 'react';

const heroProblems = [
  {
    id: 1,
    name: 'Immunity Wellness',
    img: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=300&q=80',
    link: '/shop?problem=Immunity+Wellness',
  },
  {
    id: 2,
    name: 'Digestive Wellness',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=300&q=80',
    link: '/shop?problem=Digestive+Wellness',
  },
  {
    id: 3,
    name: 'Pain Reliever',
    img: 'https://images.unsplash.com/photo-1579684389782-64d84b5e901d?auto=format&fit=crop&w=300&q=80',
    link: '/shop?problem=Pain+Reliever',
  },
  {
    id: 4,
    name: 'Cardiac Wellness',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=300&q=80',
    link: '/shop?problem=Cardiac+Wellness',
  },
  {
    id: 5,
    name: 'Skin Wellness',
    img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=300&q=80',
    link: '/shop?problem=Skin+Wellness',
  },
  {
    id: 6,
    name: 'Blood Purifier',
    img: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=300&q=80',
    link: '/shop?problem=Blood+Purifier',
  },
];

const HeroCategories = () => {
  return (
    <section className="hero-cat-section">
      <div className="section-container">

        {/* Section Header */}
        <div className="section-header">
          <p className="section-eyebrow">
            <i className="fa-solid fa-leaf section-eyebrow-icon"></i>Shop by Concern <span className="eyebrow-dot">·</span> Targeted Care
          </p>
          <h2 className="section-title">Shop by Problem</h2>
          <p className="section-desc">
            Select a health concern to explore our specialized Ayurvedic juices, capsules, and drops.
          </p>
        </div>

        {/* Circular Category Cards */}
        <div className="hero-cat-track animate-fade-in" style={{ gap: '24px 40px' }}>
          {heroProblems.map((prob) => (
            <a href={prob.link} key={prob.id} className="hero-cat-item">
              <div className="hero-cat-circle" style={{ width: '160px', height: '160px' }}>
                <img src={prob.img} alt={prob.name} className="hero-cat-img" />
              </div>
              <p className="hero-cat-name text-center" style={{ fontSize: '13.5px', fontFamily: '"Poppins", sans-serif', fontWeight: '500', color: '#1f362e' }}>{prob.name}</p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroCategories;
