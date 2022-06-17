import React from 'react';
import PropTypes from 'prop-types';

import styles from './SingleProductPage.module.scss';
import Gallery from '../../features/Gallery/Gallery';
import StandardCakeForm from '../../features/StandardCakeForm/StandardCakeForm';

const SingleProductPage = ({images, product, text, name, cartData, setCartData}) => (
  <div className={styles.product}>
    <div className={styles.productContainer}>
      <div className={styles.descriptionContainer}>
        <Gallery images={images} product={product} />
        <div className={styles.textContainer}>
          <p>Description</p>
          <p>{text}</p>
        </div>
      </div>
      <div className={styles.formContainer}>
        <p>{name}</p>
        <StandardCakeForm cartData={cartData} setCartData={setCartData} />
      </div>
    </div>
  </div>
);

SingleProductPage.propTypes = {
  images: PropTypes.array,
  product: PropTypes.string,
  text: PropTypes.string,
  name: PropTypes.string,
  cartData: PropTypes.object,
  setCartData: PropTypes.func,
};

export default SingleProductPage;
