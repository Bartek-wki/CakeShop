import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import styles from './Gallery.module.scss';

const Gallery = ({images, product}) => {

  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    setMainImage(images[0]);
  }, [images]);

  return (
    <div>
      <div className={styles.mainImageWrapper}>
        <img alt='' src={`${process.env.PUBLIC_URL}/images/${product}/${mainImage}`} />
      </div>
      <div className={styles.imagesWrapper}>
        {images.map(image => <div key={image} className={styles.imageWrapper}>
          <img alt='' src={`${process.env.PUBLIC_URL}/images/${product}/${image}`} onClick={ e => setMainImage(image) } />
        </div>)}
      </div>
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.array,
  product: PropTypes.string,
};

export default Gallery;
