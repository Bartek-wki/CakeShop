import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { getCakesSizeDescription, getCakesTastesToChoose } from '../../../redux/cakesRedux';
import { getPastriesSizeDescription } from '../../../redux/pastriesRedux';
import { addProductToCart } from '../../../redux/ordersRedux';

import Select from '../../common/Select/Select';
import Input from '../../common/Input/Input';
import Textarea from '../../common/Textarea/Textarea';
import FormSumup from '../FormSumup/FormSumup';

import styles from './ProductForm.module.scss';

const ProductForm = ({ cartData, setCartData, basePrice, setConfirm }) => {

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const description = useSelector(state => {
    if (cartData.product === 'cakes') {
      return getCakesSizeDescription(state);
    }
    else if (cartData.product === 'pastries') {
      return getPastriesSizeDescription(state);
    }
  });

  const tastesToChoose = useSelector(state => getCakesTastesToChoose(state));

  const changeSize = newSize => {
    setCartData(values => ({ ...values, size: newSize }));
  };

  const changeQuantity = newQuantity => {
    if (!isNaN(newQuantity)) {
      setCartData(values => ({ ...values, quantity: newQuantity }));
    }
  };

  const selectTaste = newTaste => {
    setCartData(values => ({ ...values, taste: [newTaste] }));
  };

  const changeProductColor = productColor => {
    setCartData(values => ({ ...values, productColor: productColor }));
  };

  const changeDecorationColor = decorationColor => {
    setCartData(values => ({ ...values, decorationColor: decorationColor }));
  };

  const addInscription = inscription => {
    setCartData(values => ({ ...values, inscription: inscription }));
  };

  const addComments = comments => {
    setCartData(values => ({ ...values, comments: comments }));
  };

  useEffect(() => {
    if (cartData.category !== 'wedding cakes') {
      changeSize('small');
    }
    else if (cartData.category === 'wedding cakes') {
      changeSize('two tiers');
    }
  }, [cartData.category]);

  useEffect(() => {
    if (cartData.size === 'small' || cartData.size === 'two tiers') { setCartData(values => ({ ...values, price: basePrice, totalPrice: basePrice * cartData.quantity })); }
    else if (cartData.size === 'medium' || cartData.size === 'three tiers') { setCartData(values => ({ ...values, price: Math.round((basePrice * 1.25)), totalPrice: (Math.round((basePrice * 1.25)) * cartData.quantity)})); }
    else if (cartData.size === 'large' || cartData.size === 'four tiers') { setCartData(values => ({ ...values, price: Math.round((basePrice * 1.5)), totalPrice: (Math.round((basePrice * 1.5)) * cartData.quantity) })); }
    else if (cartData.size === 'five tiers') { setCartData(values => ({ ...values, price: Math.round((basePrice * 2)), totalPrice: (Math.round((basePrice * 2)) * cartData.quantity)})); }
  }, [cartData.size, basePrice, setCartData, cartData.quantity]);

  const handleSubmit = event => {

    event.preventDefault();
    dispatch(addProductToCart(cartData));
    setConfirm(true);
    window.scrollTo(0, 0);
  };

  return (
    <form onSubmit={handleSubmit}>
      {(cartData.category === 'standard cakes' || cartData.category === 'communion cakes' || cartData.category === 'baby cakes')  && <Select value={cartData.size} changeValue={changeSize} options={['small', 'medium', 'large']} name='Choose size:' description={description.standardCakes} />}
      {cartData.category === 'wedding cakes'  && <Select value={cartData.size} changeValue={changeSize} options={['two tiers', 'three tiers', 'four tiers', 'five tiers']} name='Choose size:' description={description.weddingCakes} />}
      {cartData.category === 'pies'  && <Select value={cartData.size} changeValue={changeSize} options={['small', 'medium', 'large']} name='Choose size:' description={description.pies} />}
      {(cartData.category === 'donuts' || cartData.category === 'muffins and cupcakes')  && <Select value={cartData.size} changeValue={changeSize} options={['small', 'medium', 'large']} name='Choose size:' description={description.pieces} />}
      {(cartData.category === 'wedding cakes' || cartData.category === 'baby cakes' || cartData.category === 'communion cakes') && <Select value={cartData.taste[0]} changeValue={selectTaste} options={tastesToChoose} name='Choose taste:' />}
      {(cartData.category === 'wedding cakes' || cartData.category === 'baby cakes' || cartData.category === 'communion cakes') && <Input value={cartData.productColor} changeValue={changeProductColor} name={'Cake color'} />}
      {(cartData.category === 'wedding cakes' || cartData.category === 'baby cakes' || cartData.category === 'communion cakes') && <Input value={cartData.decorationColor} changeValue={changeDecorationColor} name={'Decoration color'} />}
      {(cartData.category === 'baby cakes' || cartData.category === 'communion cakes') && <Input value={cartData.inscription} changeValue={addInscription} name={'Inscription'} />}
      <Textarea name={'Product comments'} value={cartData.comments} changeValue={addComments} />
      <FormSumup quantity={cartData.quantity} changeQuantity={changeQuantity} price={cartData.totalPrice} />
    </form>
  );
};

ProductForm.propTypes = {
  cartData: PropTypes.object,
  setCartData: PropTypes.func,
  basePrice: PropTypes.number,
  setConfirm: PropTypes.func,
};

export default ProductForm;
