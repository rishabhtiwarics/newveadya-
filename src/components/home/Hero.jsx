import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const Hero = () => {
  const slidesData = [
    {
      id: 1,
      img: "/images/1.jfif"
    },
    {
      id: 2,
      img: "/images/5.jfif"
    },
    {
      id: 3,
      img: "/images/homebanner3.jfif"
    }
  ];

  return (
    <section className="hero-section">
      <div className="hero-container">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          speed={900}
          autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: false }}
          pagination={{ clickable: true }}
          className="swiper-hero"
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              {({ isActive }) => (
                <div className={`hero-slide-content ${isActive ? 'txt-entering' : ''}`}>
                  {/* Full Bleed Image Background */}
                  <div className="hero-slide-bg">
                    <img src={slide.img} alt="Veadya Slideshow" className="hero-bg-img" />
                    <div className="hero-slide-overlay" />
                  </div>
                  
                  {/* Centered Floating Glass Trust Bar (Figma Style) */}
                  <div className="hero-glass-container">
                    <div className="hero-glass justify-center">
                      <div className="trust-bar">
                        <div className="trust-item trust-item-border-r">
                          <div className="trust-icon-wrap"><i className="fa-solid fa-seedling trust-icon"></i></div>
                          <div>
                            <p className="trust-title">100% Natural</p>
                            <p className="trust-desc">Sourced directly from earth's bounty.</p>
                          </div>
                        </div>
                        <div className="trust-item trust-item-border-r">
                          <div className="trust-icon-wrap"><i className="fa-solid fa-shield-halved trust-icon"></i></div>
                          <div>
                            <p className="trust-title">GMP Certified</p>
                            <p className="trust-desc">Highest global safety standards.</p>
                          </div>
                        </div>
                        <div className="trust-item trust-item-border-r">
                          <div className="trust-icon-wrap"><i className="fa-solid fa-flask-vial trust-icon"></i></div>
                          <div>
                            <p className="trust-title">No Chemicals</p>
                            <p className="trust-desc">Pure botanicals, nothing artificial.</p>
                          </div>
                        </div>
                        <div className="trust-item">
                          <div className="trust-icon-wrap"><i className="fa-solid fa-users trust-icon"></i></div>
                          <div>
                            <p className="trust-title">Thousands Trust</p>
                            <p className="trust-desc">Join our community of wellness.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
