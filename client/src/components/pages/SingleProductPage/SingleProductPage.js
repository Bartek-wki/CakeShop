import React from 'react';
import PropTypes from 'prop-types';

import styles from './SingleProductPage.module.scss';
import Gallery from '../../features/Gallery/Gallery';
import ProductForm from '../../features/ProductForm/ProductForm';

const SingleProductPage = ({images, text, name, cartData, setCartData, basePrice, confirm, setConfirm}) => (
  <div className={styles.product}>
    {confirm && <div className={styles.confirm}>
      <p>Product was added to your cart</p>
      <button onClick={e => setConfirm(false)}>X</button>
    </div>}
    <div className={styles.productContainer}>
      <div className={styles.descriptionContainer}>
        <Gallery images={images} product={cartData.product} />
        <div className={styles.textContainer}>
          <p>Description</p>
          <p>{text}</p>
        </div>
      </div>
      <div className={styles.formContainer}>
        <p>{name}</p>
        <ProductForm cartData={cartData} setCartData={setCartData} basePrice={basePrice} setConfirm={setConfirm} />
      </div>
    </div>
  </div>
);

SingleProductPage.propTypes = {
  images: PropTypes.array,
  text: PropTypes.string,
  name: PropTypes.string,
  cartData: PropTypes.object,
  setCartData: PropTypes.func,
  basePrice: PropTypes.number,
  confirm: PropTypes.bool,
  setConfirm: PropTypes.func,
};

export default SingleProductPage;
