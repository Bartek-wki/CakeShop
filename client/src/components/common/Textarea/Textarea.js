import React from 'react';
import PropTypes from 'prop-types';

import styles from './Textarea.module.scss';

const Textarea = ({name, value, changeValue}) => (
  <label>
    <p className={styles.title}>{name}</p>
    <textarea className={styles.textarea} value={value} onChange={e => changeValue(e.target.value)} />
  </label>
);

Textarea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  changeValue: PropTypes.func,
};


export default Textarea;
