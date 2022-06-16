import React from 'react';
import PropTypes from 'prop-types';

import CarouselComponent from '../../features/CarouselComponent/CarouselComponent';
import ProductBox from '../../common/ProductBox/ProductBox';
import Filter from '../../common/Filter/Filter';

import styles from './ProductsPage.module.scss';

const ProductsPage = ({imageCarouselOne, imageCarouselTwo, imageCarouselThree, title, descripe, products, mainCategory, categories, tastes, changeFilters}) => (
  <div>
    <CarouselComponent
      image_1={`${process.env.PUBLIC_URL}/images/carousel/${imageCarouselOne}`}
      image_2={`${process.env.PUBLIC_URL}/images/carousel/${imageCarouselTwo}`}
      image_3={`${process.env.PUBLIC_URL}/images/carousel/${imageCarouselThree}`}
      title={title}
      describe={descripe}
    />
    <div className={styles.layout + ' container'}>
      <div className={styles.leftWrapper}>
        <Filter content={categories} contentName={'Categories'} changeFilters={changeFilters}/>
        <Filter content={tastes} contentName={'Tastes'} changeFilters={changeFilters}/>
      </div>
      <div className={styles.rightWrapper}>
        {products.map(product => <ProductBox key={product._id} {...product} mainCategory={mainCategory}/>)}
      </div>
    </div>
  </div>
);

ProductsPage.propTypes = {
  imageCarouselOne: PropTypes.string,
  imageCarouselTwo: PropTypes.string,
  imageCarouselThree: PropTypes.string,
  title: PropTypes.string,
  descripe: PropTypes.string,
  products: PropTypes.array,
  mainCategory: PropTypes.string,
  categories: PropTypes.array,
  tastes: PropTypes.array,
  changeFilters: PropTypes.func,
};

export default ProductsPage;
