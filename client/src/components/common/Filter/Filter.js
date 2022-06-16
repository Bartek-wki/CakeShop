import React from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.scss';

const Filter = ({ content, contentName, changeFilters }) => {
  
  const toggleFilter = e => {
    changeFilters(e.target.value);
    e.target.classList.toggle('active');
  };

  return (
    <div className={styles.filterContainer}>
      <div>
        <p>{contentName}</p>
        <ul className={styles.list}>
          {content.map(element => <li key={element}><button value={element} onClick={e => toggleFilter(e)}>{element}</button></li>)}
        </ul>
      </div>
    </div>
  );
};

Filter.propTypes = {
  content: PropTypes.array,
  contentName: PropTypes.string,
  changeFilters: PropTypes.func,
};

export default Filter;
