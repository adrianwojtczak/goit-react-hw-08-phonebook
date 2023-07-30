import React from 'react';

import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';

import styles from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = ev => {
    dispatch(setFilter(ev.target.value));
  };

  return (
    <label className={styles.label}>
      Filter contacts by name, M'lord:
      <input type="text" onChange={handleChangeFilter} />
    </label>
  );
};

export default Filter;
