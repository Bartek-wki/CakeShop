import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllCakes, loadAllCakesRequest } from '../../../redux/cakesRedux';

import ProductsPage from '../../pages/ProductsPage/ProductsPage';

const Cakes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllCakesRequest());
  }, [dispatch]);

  const allCakes = useSelector(state => getAllCakes(state));
  const [categories] = useState([]);
  const [tastes] = useState([]);
  const [filters, setFilters] = useState([]);

  let filtredCakes = [];

  for (let cake of allCakes) {
    if (categories.indexOf(cake.category) === -1) {
      categories.push(cake.category);
    }
    for (let taste of cake.taste) {
      if (tastes.indexOf(taste) === -1) {
        tastes.push(taste);
      }
    }
  }

  const changeFilters = (filter) => {
    if (filters.indexOf(filter) === -1) {
      setFilters([...filters, filter]);
    } else {
      setFilters(filters.filter(element => element !== filter));
    }
  };

  if (filters.length !== 0) {
    for (let cake of allCakes) {
      for (let filter of filters) {
        if ((cake.category === filter || cake.taste.indexOf(filter) !== -1) && filtredCakes.indexOf(cake) === -1 ) {
          filtredCakes.push(cake);
        }
      }
    }
  } else {
    filtredCakes = [...allCakes];
  }

  return (
    <ProductsPage
      imageCarouselOne={'cake1.jpg'}
      imageCarouselTwo={'cake2.jpg'}
      imageCarouselThree={'cake3.jpg'}
      title={'Cakes'}
      descripe={'cakes - wedding, standard, communion, baptism, children'}
      products={filtredCakes}
      mainCategory={'cakes'}
      categories={categories}
      tastes={tastes}
      changeFilters={changeFilters}
    />
  );
};

export default Cakes;
