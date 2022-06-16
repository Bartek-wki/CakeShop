import React from 'react';
import { Link } from 'react-router-dom';

import Ribbon from '../../common/Ribbon/Ribbon';

import styles from './Offers.module.scss';

const Offers = () => {
  return (
    <div className={styles.offersContainer + ' container'}>
      <p className={styles.description}>Check our offers</p>
      <div className={styles.boxesContainer}>
        <Link to={'/cakes'}>
          <div className={styles.leftWrapper}>
            <img alt='' src={`${process.env.PUBLIC_URL}/images/cakes/weddingCake07.jpg`} />
            <div className={styles.overlay}>
              <div className={styles.textWrapper}>
                <p>special occasion cakes</p>
                <p>wedding, communion, baptism</p>
                <p>check our offer</p>
              </div>
            </div>
          </div>
        </Link>
        <div className={styles.rightWrapper}>
          <Link to={'/cakes'}>
            <div className={styles.topWrapper}>
              <img alt='' src={`${process.env.PUBLIC_URL}/images/cakes/babyCake06.jpg`} />
              <div className={styles.overlay}>
                <div className={styles.textWrapper}>
                  <p>cakes for children</p>
                  <p>see the category</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to={'/cakes'}>
            <div className={styles.bottomWrapper}>
              <img alt='' src={`${process.env.PUBLIC_URL}/images/cakes/whiteChocolateCake2.jpg`} />
              <div className={styles.overlay}>
                <div className={styles.textWrapper}>
                  <div>
                    <p>cakes with</p>
                    <p>the print</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offers;
