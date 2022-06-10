import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.css';
import { Carousel } from 'react-responsive-carousel';
import PropTypes from 'prop-types';

import styles from './Carousel.module.scss';

const CarouselComponent = ({ image_1, image_2, image_3, title, describe }) => (
  <div className={styles.carouselContainer}>
    <div className={styles.textWrapper}>
      <p>{title}</p>
      <p>{ describe }</p>
    </div>
    <Carousel interval={5000} showThumbs={false} showStatus={false} autoPlay={true} autoFocus={true} infiniteLoop={true} >
      <div className={styles.slideWrapper}>
        <img src={image_1} alt='' />

      </div>
      <div className={styles.slideWrapper}>
        <img src={image_2} alt='' />
      </div>
      <div className={styles.slideWrapper}>
        <img src={image_3} alt='' />
      </div>
    </Carousel>
  </div>

);

CarouselComponent.propTypes = {
  image_1: PropTypes.string,
  image_2: PropTypes.string,
  image_3: PropTypes.string,
  title: PropTypes.string,
  describe: PropTypes.string,
};

export default CarouselComponent;
