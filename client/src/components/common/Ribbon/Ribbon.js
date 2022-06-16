import React from 'react';
import PropTypes from 'prop-types';

import styles from './Ribbon.module.scss';

const Ribbon = ({text}) => (
  <div className={styles.ribbon}>
    <p>{text}</p>
  </div>
);

Ribbon.propTypes = {
  text: PropTypes.string,
};

export default Ribbon;
