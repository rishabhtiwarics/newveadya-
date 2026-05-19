import React from 'react';

const heroCategories = [
  {
    id: 1,
    name: 'Juice',
    subtitle: 'Cold-Pressed Elixirs',
    icon: 'fa-droplet',
    img: '/images/9.jfif',
    link: '/shop?category=Juice',
  },
  {
    id: 2,
    name: 'Capsule',
    subtitle: 'Precision Botanicals',
    icon: 'fa-capsules',
    img: '/images/7.jfif',
    link: '/shop?category=Capsule',
  },
  {
    id: 3,
    name: 'Drop',
    subtitle: 'Liquid Extracts',
    icon: 'fa-flask-vial',
    img: '/images/2.jfif',
    link: '/shop?category=Drop',
  },
];

const HeroCategories = () => {
  return (
    <section className="hero-cat-section">
      <div className="section-container">

        {/* Section Header */}
        <div className="section-header">
          <p className="section-eyebrow">
            <i className="fa-solid fa-seedling section-eyebrow-icon"></i>Shop the Ritual <span className="eyebrow-dot">·</span> Ancient Wisdom
          </p>
          <h2 className="section-title">Shop by Format</h2>
          <p className="section-desc">
            Choose the perfect format for your daily wellness ritual.
          </p>
        </div>

        {/* Circular Category Cards */}
        <div className="hero-cat-track">
          {heroCategories.map((cat) => (
            <a href={cat.link} key={cat.id} className="hero-cat-item">
              <div className="hero-cat-circle">
                <img src={cat.img} alt={cat.name} className="hero-cat-img" />
                <div className="hero-cat-overlay" />
                <div className="hero-cat-icon-wrap">
                  <i className={`fa-solid ${cat.icon} hero-cat-icon`}></i>
                </div>
              </div>
              <p className="hero-cat-name">{cat.name}</p>
              <p className="hero-cat-sub">{cat.subtitle}</p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HeroCategories;
