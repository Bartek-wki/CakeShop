import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import Select from '../../common/Select/Select';
import FormSumup from '../FormSumup/FormSumup';

import styles from './StandardCakeForm.module.scss';

const StandardCakeForm = ({ cartData, setCartData, basePrice }) => {

  const description = {
    small: 'about 12 portions',
    medium: 'about 16 portions',
    large: 'about 20 portions',
  };

  const changeSize = newSize => {
    setCartData(values => ({ ...values, size: newSize }));
  };

  const changeQuantity = newQuantity => {
    if (!isNaN(newQuantity)) {
      setCartData(values => ({ ...values, quantity: newQuantity }));
    }
  };

  useEffect(() => {
    if (cartData.size === 'small') { setCartData(values => ({ ...values, price: basePrice * cartData.quantity })); }
    else if (cartData.size === 'medium') { setCartData(values => ({ ...values, price: (Math.round((basePrice * 1.25)) * cartData.quantity)})); }
    else if (cartData.size === 'large') { setCartData(values => ({ ...values, price: (Math.round((basePrice * 1.5)) * cartData.quantity)})); }
  }, [cartData.size, basePrice, setCartData, cartData.quantity]);

  return (
    <form>
      <Select value={cartData.size} changeValue={changeSize} options={['small', 'medium', 'large']} name='Choose size:' description={description} />
      <FormSumup quantity={cartData.quantity} changeQuantity={changeQuantity} price={cartData.price} />
    </form>
  );
};

StandardCakeForm.propTypes = {
  cartData: PropTypes.object,
  setCartData: PropTypes.func,
  basePrice: PropTypes.number,
};

export default StandardCakeForm;
