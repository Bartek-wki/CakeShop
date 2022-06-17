import React from 'react';
import PropTypes from 'prop-types';

import Select from '../../common/Select/Select';
//import FormSumup from '../FormSumup/FormSumup';

import styles from './StandardCakeForm.module.scss';

const StandardCakeForm = ({ cartData, setCartData }) => {

  const description = {
    small: 'about 12 portions',
    medium: 'about 16 portions',
    large: 'about 22 portions',
  };

  const changeSize = newSize => {
    setCartData(values => ({ ...values, size: newSize }));
  };

  return (
    <form>
      <Select value={cartData.size} changeValue={changeSize} options={['small', 'medium', 'large']} name='Choose size:' description={description} />
    </form>
  );
};

StandardCakeForm.propTypes = {
  cartData: PropTypes.object,
  setCartData: PropTypes.func,
};

export default StandardCakeForm;
