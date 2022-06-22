import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../common/Input/Input';

import styles from './OrderPage.module.scss';

const OrderPage = ({orderer, setOrderer, error, setError, sendOrder}) => (
  <div className={styles.orderContainer}>
    {error && <div className={styles.errorBox}>
      <p>Check that you have filled in all the data correctly</p>
      <button onClick={e => setError(false)}>X</button>
    </div>}
    <div className={styles.formContainer}>
      <p>Add your data</p>
      <form onSubmit={sendOrder}>
        <label>
          <p>Firstname and lastname:</p>
          <input type='text' value={orderer.forename} onChange={e => setOrderer(values => ({ ...values, forename: e.target.value }))} />
        </label>
        <label>
          <p>Email:</p>
          <input type='text' value={orderer.email} onChange={e => setOrderer(values => ({ ...values, email: e.target.value }))} />
        </label>
        <label>
          <p>Phone:</p>
          <input type='text' value={orderer.phone} onChange={e => setOrderer(values => ({ ...values, phone: e.target.value }))} />
        </label>
        <label>
          <p>Delivery address:</p>
          <textarea value={orderer.address} onChange={e => setOrderer(values => ({ ...values, address: e.target.value }))} />
        </label>
        <label>
          <p>Comments on your order</p>
          <textarea value={orderer.orderComments} onChange={e => setOrderer(values => ({ ...values, orderComments: e.target.value }))} />
        </label>
        <button>SEND ORDER</button>
      </form>
    </div>
  </div>
);

OrderPage.propTypes = {
  orderer: PropTypes.object,
  setOrderer: PropTypes.func,
  error: PropTypes.bool,
  setError: PropTypes.func,
  sendOrder: PropTypes.func,
};

export default OrderPage;
