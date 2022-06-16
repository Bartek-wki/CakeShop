import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadTopCakesRequest, getTopCakes } from '../../../redux/cakesRedux';
import { loadTopPastriesRequest, getTopPastries } from '../../../redux/pastriesRedux';

import ProductBox from '../../common/ProductBox/ProductBox';
import Ribbon from '../../common/Ribbon/Ribbon';

import styles from './BestSellers.module.scss';

const BestSellers = () => {
  const dispatch = useDispatch();

  const topCakes = useSelector(state => getTopCakes(state));
  const topPastries = useSelector(state => getTopPastries(state));

  useEffect(() => {
    dispatch(loadTopCakesRequest());
    dispatch(loadTopPastriesRequest());
  }, [dispatch]);

  return (
    <div className={styles.bestSellersContainer + ' container'}>
      <Ribbon text={'TOP CAKES'} />
      <div className={styles.topCakesContainer}>
        {topCakes.map(cake => (<ProductBox key={cake._id} {...cake} mainCategory={ 'cakes' }/> ))}
      </div>
      <Ribbon text={'TOP PASTRIES'} />
      <div className={styles.topPastriesContainer}>
        {topPastries.map(pastry => (<ProductBox key={pastry._id} {...pastry} mainCategory={'pastries'} />))}
      </div>
    </div>
  );
};

export default BestSellers;
