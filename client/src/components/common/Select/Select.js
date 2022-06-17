import React from 'react';
import PropTypes from 'prop-types';

import styles from './Select.module.scss';

const Select = ({value, changeValue, options, name, description}) => {
  return (
    <label>
      <p className={styles.title}>{name}</p>
      <select className={styles.select} value={value} onChange={e => changeValue(e.target.value)}>
        {options.map(option => <option key={option} value={option}>{option}</option>)}
      </select>
      {description && <p className={styles.description}>{description[value]}</p>}
    </label>
  );
};

Select.propTypes = {
  value: PropTypes.string,
  changeValue: PropTypes.func,
  options: PropTypes.array,
  name: PropTypes.string,
  description: PropTypes.object,
};

export default Select;
