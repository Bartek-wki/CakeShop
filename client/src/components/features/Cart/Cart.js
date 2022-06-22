import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getCart, editProductQuantity, removeProductFromCart, addProductsToOrder } from '../../../redux/ordersRedux';

import CartPage from '../../pages/CartPage/CartPage';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(state => getCart(state));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeQuantity = (quantity, id) => {
    if (!isNaN(quantity) && quantity >= 0) {
      dispatch(editProductQuantity({quantity: parseInt(quantity), id: id}));
    }
  };

  const deleteProduct = id => {
    dispatch(removeProductFromCart(id));
  };

  const totalPrice = () => {
    let sum = 0;

    for (let product of cart) {
      sum += product.totalPrice;
    }
    return sum;
  };

  const addToOrder = () => {
    let orderData = [];

    for (let product of cart) {
      orderData.push({
        name: product.name,
        taste: product.taste,
        price: product.totalPrice,
        size: product.size,
        quantity: product.quantity,
        productColor: product.productColor,
        decorationColor: product.decorationColor,
        inscription: product.inscription,
        comments: product.comments,
      });
    }
    dispatch(addProductsToOrder(orderData));
    navigate('/order');
  };

  return (
    <CartPage cart={cart} changeQuantity={changeQuantity} deleteProduct={deleteProduct} totalPrice={totalPrice} addToOrder={ addToOrder } />
  );
};

export default Cart;


