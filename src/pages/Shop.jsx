import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductCard from '../components/shop/ProductCard';

const ITEMS_PER_PAGE = 6;

const CATEGORIES = ['All', 'Stress Relief', 'Skin Care', 'Cognitive', 'Body Care', 'Hair Care'];

const CATEGORY_ICONS = {
  'All':           'fa-solid fa-spa',
  'Stress Relief': 'fa-solid fa-leaf',
  'Skin Care':     'fa-solid fa-seedling',
  'Cognitive':     'fa-solid fa-brain',
  'Body Care':     'fa-solid fa-droplet',
  'Hair Care':     'fa-solid fa-wind',
};

const ShopPage = () => {
  const allProducts = useSelector((state) => state.products.items);
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage,    setCurrentPage]    = useState(1);

  const filtered = useMemo(() => {
    const list = activeCategory === 'All'
      ? allProducts
      : allProducts.filter((p) => p.category === activeCategory);
    return list;
  }, [allProducts, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated  = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  const handleCategory = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handlePage = (p) => {
    setCurrentPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="shop-page-root">

      {/* ── Hero Banner ── */}
      <section className="shop-hero">
        {/* Decorative floating orbs */}
        <div className="shop-hero-orb shop-hero-orb-1" />
        <div className="shop-hero-orb shop-hero-orb-2" />

        <div className="section-container shop-hero-inner">
          {/* Breadcrumb */}
          <div className="shop-hero-breadcrumb">
            <Link to="/">Home</Link>
            <i className="fa-solid fa-chevron-right" />
            <span>Shop</span>
          </div>

          {/* Eyebrow */}
          <p className="shop-hero-eyebrow">
            <i className="fa-solid fa-seedling" />
            Ancient Wisdom · Modern Form
          </p>

          {/* Heading */}
          <h1 className="shop-hero-title">
            Ritual <em>Essentials</em>
          </h1>

          {/* Subtitle */}
          <p className="shop-hero-subtitle">
            {filtered.length} botanical formulas crafted for your everyday wellness ritual.
          </p>

          {/* Category Filter Pills */}
          <div className="shop-hero-filters">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategory(cat)}
                className={`shop-filter-pill ${activeCategory === cat ? 'shop-filter-pill--active' : ''}`}
              >
                <i className={CATEGORY_ICONS[cat]} />
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section className="shop-grid-section">
        <div className="section-container">

          {/* Results bar */}
          <div className="shop-results-bar">
            <p className="shop-results-count">
              Showing <strong>{paginated.length}</strong> of <strong>{filtered.length}</strong> products
              {activeCategory !== 'All' && <> in <em>{activeCategory}</em></>}
            </p>
            <div className="shop-results-divider" />
          </div>

          {/* Grid */}
          {paginated.length > 0 ? (
            <div className="prod-grid">
              {paginated.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="shop-empty">
              <i className="fa-solid fa-leaf shop-empty-icon" />
              <p className="shop-empty-text">No products found in this category.</p>
              <button className="btn-primary mt-4" onClick={() => handleCategory('All')}>
                View All Products
              </button>
            </div>
          )}

          {/* ── Pagination ── */}
          {totalPages > 1 && (
            <div className="shop-pagination">
              {/* Prev */}
              <button
                className="shop-page-arrow"
                onClick={() => handlePage(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
              >
                <i className="fa-solid fa-arrow-left" />
              </button>

              {/* Page numbers */}
              <div className="shop-page-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => handlePage(p)}
                    className={`shop-page-num ${currentPage === p ? 'shop-page-num--active' : ''}`}
                    aria-label={`Page ${p}`}
                    aria-current={currentPage === p ? 'page' : undefined}
                  >
                    {p}
                  </button>
                ))}
              </div>

              {/* Next */}
              <button
                className="shop-page-arrow"
                onClick={() => handlePage(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
              >
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── Contact Promotion Banner (Connect With Us) ── */}
      <section className="shop-connect-section">
        {/* Horizontal linear absolute layer for seamless blending */}
        <div className="shop-connect-gradient-overlay" />
        
        <div className="shop-connect-grid">
          {/* Left Column: Image Part (50%) */}
          <div className="shop-connect-img-col">
            <img 
              src="/images/homebanner3.jfif" 
              alt="Ayurvedic Ritual Essentials" 
              className="shop-connect-img"
            />
            <div className="shop-connect-img-overlay" />
          </div>

          {/* Right Column: Content Part (50%) */}
          <div className="shop-connect-content-col">
            {/* Soft glowing ambient gold orb background */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '280px',
              height: '280px',
              background: 'rgba(226, 213, 195, 0.05)',
              filter: 'blur(70px)',
              borderRadius: '50%',
              pointerEvents: 'none',
              zIndex: 1
            }} />

            <div style={{ position: 'relative', zIndex: 3 }}>
              <p className="shop-connect-eyebrow">
                <i className="fa-solid fa-feather-pointed" />
                Get In Touch · Connect
              </p>
              <h2 className="shop-connect-title">
                Connect With Us
              </h2>
              
              {/* Premium Gold fading line ornament */}
              <div style={{
                width: '60px',
                height: '1.5px',
                background: 'linear-gradient(90deg, var(--bloom-pale) 0%, rgba(226, 213, 195, 0.1) 100%)',
                margin: '14px 0 22px'
              }} />

              <p className="shop-connect-desc">
                Whether you seek personalized Ayurvedic guidance, order assistance, or wholesale partnerships, our wellness team welcomes your inquiries.
              </p>
              <Link 
                to="/contact" 
                className="btn-primary w-fit"
                style={{
                  background: 'var(--bloom-pale)',
                  color: 'var(--primary)',
                  border: 'none',
                  boxShadow: '0 8px 24px rgba(1, 114, 110, 0.2)',
                  position: 'relative',
                  zIndex: 4
                }}
              >
                <i className="fa-solid fa-feather-pointed mr-2" />
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ShopPage;
