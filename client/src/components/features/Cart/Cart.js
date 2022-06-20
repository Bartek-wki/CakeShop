import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getCart, editProductQuantity } from '../../../redux/ordersRedux';

import CartPage from '../../pages/CartPage/CartPage';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => getCart(state));

  const changeQuantity = (quantity, id) => {
    if (!isNaN(quantity) && quantity >= 0) {
      dispatch(editProductQuantity({quantity: parseInt(quantity), id: id}));
    }
  };

  return (
    <CartPage cart={cart} changeQuantity={changeQuantity} />
  );
};

export default Cart;


