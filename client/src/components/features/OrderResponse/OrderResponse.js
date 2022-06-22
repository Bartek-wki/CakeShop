import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

import { getOrderId } from '../../../redux/ordersRedux';

import OrderResponsePage from '../../pages/OrderResponse/OrderResponsePage';

const OrderResponse = () => {
  const orderId = useSelector(state => getOrderId(state));

  return (
    <OrderResponsePage orderId={orderId} />
  );
};

export default OrderResponse;
