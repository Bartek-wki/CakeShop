import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderResponsePage.module.scss';

const OrderResponsePage = ({ orderId }) => (
  <div className={styles.responseContainer}>
    {orderId && <p>
      Your order with id <strong>{orderId}</strong> has been accepted. We will contact you within two business days
      to discuss the details of your order.
    </p>}
    {!orderId && <p>
      <strong>Oops!</strong> Something went wrong. Please contact us to resolve the issue.
    </p>}
  </div>
);

OrderResponsePage.propTypes = {
  orderId: PropTypes.string,
};

export default OrderResponsePage;
