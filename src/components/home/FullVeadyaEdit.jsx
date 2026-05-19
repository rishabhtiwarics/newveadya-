import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const veadyaProducts = [
  { id: 1, type: "OILS", name: "Brahmi Scalp Oil", price: "56.00", image: "/images/product/1.jfif" },
  { id: 2, type: "CAPSULES", name: "Shatavari Balance", price: "68.00", image: "/images/product/2.jfif" },
  { id: 3, type: "TEAS", name: "Tulsi Calm Blend", price: "32.00", image: "/images/product/3.jfif" },
  { id: 4, type: "SERUMS", name: "Kumkumadi Glow", price: "74.00", image: "/images/product/4.jfif" },
  { id: 5, type: "HERBS", name: "Triphala Cleanse", price: "42.00", image: "/images/product/6.jfif" },
];

const FullVeadyaEdit = () => {
  // Create an array with enough slides to loop smoothly
  const displayProducts = [...veadyaProducts, ...veadyaProducts, ...veadyaProducts];

  return (
    <section className="py-24 text-white full-veadya-section">
      {/* Background Ambient Glows */}
      <div className="full-veadya-glow-1"></div>
      <div className="full-veadya-glow-2"></div>
      
      {/* Decorative Brand Blobs for Modern Background Depth */}
      <div className="full-veadya-blob-1"></div>
      <div className="full-veadya-blob-2"></div>

      <div className="section-container relative z-10">
        {/* Header Content */}
        <div className="text-center mb-12">
          <p className="text-[#9abcb9] text-[10px] uppercase tracking-[0.25em] font-medium mb-4 flex items-center justify-center gap-2">
            <span className="text-xs">✦</span> THE FULL VEADYA EDIT
          </p>
          <h2 className="font-serif text-[42px] md:text-[56px] leading-[1.1] mb-4 font-normal text-white">
            Ritual Collection
          </h2>
          <p className="text-[#9abcb9] text-[15px] font-light tracking-wide">
            Five pillars of Ayurvedic wellness, distilled into daily ritual.
          </p>
        </div>

        {/* Swiper Carousel */}
        <div className="mb-12">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="w-full border-t border-b border-white/10"
          >
            {displayProducts.map((product, index) => (
              <SwiperSlide key={`product-${index}`} className="border-r border-white/10 h-auto flex">
                <div className="group cursor-pointer flex flex-col w-full h-full bg-white/[0.02] hover:bg-white/[0.06] transition-all duration-500 backdrop-blur-[1px]">
                  {/* Image Container */}
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-[1.05]" 
                    />
                  </div>

                  {/* Content Container */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="w-6 h-[1px] bg-[#9abcb9] mb-4"></div>
                      <p className="text-[#9abcb9] text-[9px] uppercase tracking-[0.2em] font-semibold mb-2">
                        {product.type}
                      </p>
                      <h3 className="font-serif text-[20px] text-white mb-6 transition-colors group-hover:text-[#f3eed5]">
                        {product.name}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-[#f3eed5] font-semibold text-[13px] tracking-wide">
                        ₹ {product.price}
                      </p>
                      <button className="bg-white/5 backdrop-blur-sm border border-white/20 text-white px-4 py-2 text-[9px] uppercase tracking-[0.15em] hover:bg-white hover:text-[var(--bg-deep)] transition-all font-medium rounded-sm cursor-pointer">
                        + CART
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Footer Button */}
        <div className="text-center">
          <Link to="/shop" className="inline-flex items-center gap-3 bg-[#f3eed5] text-[var(--bg-deep)] px-8 py-3.5 rounded-sm font-semibold text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-all shadow-lg">
            → EXPLORE ALL PRODUCTS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FullVeadyaEdit;
