import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartPage.module.scss';

const CartPage = ({cart, changeQuantity}) => (
  <div className={styles.cartContainer}>
    {cart.map(product =>
      <div key={product.id} className={styles.productContainer}>
        <div className={styles.description}>
          <p><strong>Name:</strong> {product.name}</p>
          <p><strong>Taste:</strong> {product.taste.map(element => <span key={element}>{element}</span>)}</p>
          <p><strong>Size:</strong> {product.size}</p>
          {(product.category === 'wedding cakes' || product.category === 'communion cakes' || product.category === 'babys cakes') && <p><strong>Cake color:</strong> {product.productColor}</p>}
          {(product.category === 'wedding cakes' || product.category === 'communion cakes' || product.category === 'babys cakes') && <p><strong>Decoration color:</strong> {product.decorationColor}</p>}
          {(product.category === 'communion cakes' || product.category === 'babys cakes') && <p><strong>Inscription:</strong> {product.inscription}</p>}
          <form>
            <label>
              <strong>Quantity:</strong>
              <input type='number' value={product.quantity} onChange={e => changeQuantity(e.target.value, product.id)} />
            </label>
          </form>
        </div>
        <div className={styles.image}>
          <div className={styles.imageWrapper}>
            <img alt='' src={`${process.env.PUBLIC_URL}/images/${product}/${product.image}`} />
          </div>
        </div>
      </div>
    )}
  </div>
);

CartPage.propTypes = {
  cart: PropTypes.array,
  changeQuantity: PropTypes.func,
};

export default CartPage;
