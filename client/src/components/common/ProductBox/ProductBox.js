import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faStarHalfStroke} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

import styles from './ProductBox.module.scss';

const ProductBox = ({ basePrice, images, name, raitings, mainCategory, _id }) => {

  return (
    <Link to={`/${mainCategory}/${_id}`}>
      <div className={styles.productContainer}>
        <div className={styles.imageWrapper}>
          <img alt='' src={`${process.env.PUBLIC_URL}/images/${mainCategory}/${images[0]}`} />
        </div>
        <div className={styles.textWrapper}>
          <p>{name}</p>
          <p>${basePrice}</p>
          <div className={styles.starContainer}>
            {[1, 2, 3, 4, 5].map(i => (
              <span key={i}>
                {i <= Math.round(raitings - 0.3) && <FontAwesomeIcon icon={faStar} />}
                {i > Math.round(raitings - 0.3) && i === Math.round(raitings + 0.2) && (<FontAwesomeIcon icon={faStarHalfStroke} />)}
                {i > Math.round(raitings + 0.2) && <FontAwesomeIcon icon={farStar} />}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.overlay}>
          <p>
            See more
          </p>
        </div>
      </div>
    </Link>
  );
};

ProductBox.propTypes = {
  basePrice: PropTypes.number,
  images: PropTypes.array,
  name: PropTypes.string,
  raitings: PropTypes.number,
  mainCategory: PropTypes.string,
  _id: PropTypes.string,
};

export default ProductBox;
