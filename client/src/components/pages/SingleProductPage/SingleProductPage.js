import React from 'react';
import PropTypes from 'prop-types';

import styles from './SingleProductPage.module.scss';
import Gallery from '../../features/Gallery/Gallery';

const SingleProductPage = ({images, product, text}) => (
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

      </div>
    </div>
  </div>
);

SingleProductPage.propTypes = {
  images: PropTypes.array,
  product: PropTypes.string,
  text: PropTypes.string,
};

export default SingleProductPage;
