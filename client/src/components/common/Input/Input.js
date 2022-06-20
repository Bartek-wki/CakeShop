import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.module.scss';

const Input = ({name, value, changeValue}) => {
  return (
    <label>
      <p className={styles.title}>{name}</p>
      <input type='text' className={styles.input} value={value} onChange={e => changeValue(e.target.value)} />
    </label>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  changeValue: PropTypes.func,
};

export default Input;
