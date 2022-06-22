import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import { getOrdersData, sendOrderRequest } from '../../../redux/ordersRedux';

import OrderPage from '../../pages/OrderPage/OrderPage';

const Order = () => {
  const orderData = useSelector(state => getOrdersData(state));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [orderer, setOrderer] = useState({
    forename: '',
    email: '',
    phone: '',
    address: '',
    orderComments: '',
  });

  const [error, setError] = useState(false);

  const sendOrder = async event => {
    event.preventDefault();
    window.scrollTo(0, 0);
    if (orderer.forename.length < 3 || orderer.email.length < 3 || orderer.phone.length < 3 || orderer.address.length < 3) {
      setError(true);
    } else {
      await dispatch(sendOrderRequest({ orderer: orderer, order: orderData }));
      navigate('/order/response');
    }
  };

  if (orderData.length === 0) {
    return <Navigate to={'/'} />;
  }

  return (
    <OrderPage orderer={orderer} setOrderer={setOrderer} error={error} setError={setError} sendOrder={sendOrder} />
  );
};

export default Order;
