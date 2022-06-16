import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getAllPastries, loadAllPastriesRequest } from '../../../redux/pastriesRedux';

import ProductsPage from '../../pages/ProductsPage/ProductsPage';

const Pastries = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllPastriesRequest());
  }, [dispatch]);

  const allPastries = useSelector(state => getAllPastries(state));
  const [categories] = useState([]);
  const [tastes] = useState([]);
  const [filters, setFilters] = useState([]);

  let filtredPastries = [];

  for (let pastry of allPastries) {
    if (categories.indexOf(pastry.category) === -1) {
      categories.push(pastry.category);
    }
    for (let taste of pastry.taste) {
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
    for (let pastry of allPastries) {
      for (let filter of filters) {
        if ((pastry.category === filter || pastry.taste.indexOf(filter) !== -1) && filtredPastries.indexOf(pastry) === -1 ) {
          filtredPastries.push(pastry);
        }
      }
    }
  } else {
    filtredPastries = [...allPastries];
  }

  return (
    <ProductsPage
      imageCarouselOne={'pastries1.jpg'}
      imageCarouselTwo={'pastries2.jpg'}
      imageCarouselThree={'pastries3.jpg'}
      title={'Pastries'}
      descripe={'pastries - pies, donuts, muffins, cupcakes'}
      products={filtredPastries}
      mainCategory={'pastries'}
      categories={categories}
      tastes={tastes}
      changeFilters={changeFilters}
    />
  );
};

export default Pastries;
