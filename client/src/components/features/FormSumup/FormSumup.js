import React from 'react';
import PropTypes from 'prop-types';

import styles from './FormSumup.module.scss';

const FormSumup = ({ quantity = 1, changeQuantity, price }) => {
  return (
    <div className={styles.sumupContainer}>
      <input className={styles.quantity} type='text' value={quantity} onChange={e => changeQuantity(e.target.value)} />
      <div className={styles.priceWrapper}>
        <p>SUM:</p>
        <p>${price}</p>
      </div>
      <button>ADD TO CART</button>
    </div>
  );
};

FormSumup.propTypes = {
  quantity: PropTypes.number,
  changeQuantity: PropTypes.func,
  price: PropTypes.number,
};

export default FormSumup;
