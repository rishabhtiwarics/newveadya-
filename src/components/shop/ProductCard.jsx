import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';
import { toggleCart } from '../../store/slices/uiSlice';

const ProductCard = ({ product }) => {
  const dispatch   = useDispatch();
  const cartItems  = useSelector((state) => state.cart.items);
  const isInCart   = cartItems.some((item) => item.id === product.id);

  const handleAddToCart = () => {
    if (isInCart) return;
    dispatch(addToCart(product));
    dispatch(toggleCart());
  };

  return (
    <div className="prod-card group">
      {/* Image */}
      <div className="prod-card-img-outer">
        <Link to={`/product/${product.id}`} className="prod-card-img-wrap" style={{ display: 'block', textDecoration: 'none' }}>
          <img
            src={product.image}
            alt={product.name}
            className="prod-card-img"
          />
          {/* In-cart badge */}
          {isInCart && (
            <div
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 10px rgba(1,114,110,0.35)',
              }}
              className="animate-in zoom-in duration-300"
            >
              <i className="fa-solid fa-check" style={{ fontSize: '9px', color: '#fff' }}></i>
            </div>
          )}
        </Link>
      </div>

      {/* Body */}
      <div className="prod-card-body">
        <span className="prod-card-cat">{product.tag}</span>
        <h3 className="prod-card-name">
          <Link to={`/product/${product.id}`} style={{ color: 'inherit', textDecoration: 'none' }} className="contact-link-hover">
            {product.name}
          </Link>
        </h3>

        <p className="prod-card-desc" style={{ fontSize: '13px', color: 'var(--text-mid)', marginTop: '8px', marginBottom: '4px', display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {product.shortDescription}
        </p>

        <div className="prod-card-footer">
          <span className="prod-card-price">₹{product.price}</span>

          <button
            className="prod-card-add-text"
            onClick={handleAddToCart}
            disabled={isInCart}
            aria-label={isInCart ? 'In Bag' : 'Add to Cart'}
            style={{
              padding: '10px 16px',
              fontSize: '10px',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              background: isInCart ? 'var(--surface)' : 'var(--primary)',
              color: isInCart ? 'var(--text-dark)' : '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: isInCart ? 'default' : 'pointer',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {isInCart ? (
              <>
                <i className="fa-solid fa-check" style={{ fontSize: '10px' }}></i> In Bag
              </>
            ) : (
              'Add to Cart'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
