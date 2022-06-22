import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


import styles from './CartPage.module.scss';

const CartPage = ({cart, changeQuantity, deleteProduct, totalPrice, addToOrder}) => (
  <div className={styles.cartContainer}>
    {cart.length > 0 && <div>
      {cart.map(product =>
        <div key={product.id} className={styles.productContainer}>
          <div className={styles.description}>
            <p><strong>Name:</strong> {product.name}</p>
            <p><strong>Taste:</strong> {product.taste.map(element => <span key={element}>{element}</span>)}</p>
            <p><strong>Size:</strong> {product.size}</p>
            <p><strong>Price:</strong> ${product.totalPrice}</p>
            {(product.category === 'wedding cakes' || product.category === 'communion cakes' || product.category === 'babys cakes') && <p><strong>Cake color:</strong> {product.productColor}</p>}
            {(product.category === 'wedding cakes' || product.category === 'communion cakes' || product.category === 'babys cakes') && <p><strong>Decoration color:</strong> {product.decorationColor}</p>}
            {(product.category === 'communion cakes' || product.category === 'babys cakes') && <p><strong>Inscription:</strong> {product.inscription || 'no'}</p>}
            <p><strong>Product comments:</strong> {product.comments || 'no'}</p>
          </div>
          <div className={styles.image}>
            <div className={styles.imageWrapper}>
              <img alt='' src={`${process.env.PUBLIC_URL}/images/${product.product}/${product.image}`} />
            </div>
          </div>
          <div className={styles.productSumup}>
            <input type='number' value={product.quantity} onChange={e => changeQuantity(e.target.value, product.id)} />
            <button onClick={e => deleteProduct(product.id)}><FontAwesomeIcon icon={faTrashCan}/></button>
          </div>
        </div>
      )}
      <div className={styles.cartSumup}>
        <p>To be paid: ${totalPrice()}</p>
        <button onClick={e => addToOrder()}>GO TO ORDER</button>
      </div>
    </div>}
    {cart.length === 0 && <div className={styles.cartEmpty}>
      <p>Your cart is empty</p>
    </div>}
  </div>
);

CartPage.propTypes = {
  cart: PropTypes.array,
  changeQuantity: PropTypes.func,
  deleteProduct: PropTypes.func,
  totalPrice: PropTypes.func,
  addToOrder: PropTypes.func,
};

export default CartPage;
