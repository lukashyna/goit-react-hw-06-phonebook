import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import styles from './contactFilter.module.css';
import slideTransition from '../../transitions/slide.module.css';

const ContactFilter = ({ changeFilter, value, count }) =>
  count >= 2 && (
    <CSSTransition in={count >= 2} timeout={250} classNames={slideTransition}>
      <div className={styles.filter}>
        <label className={styles.findContacts}>
          Find contacts by name
          <input className={styles.findContactInput} onChange={changeFilter} value={value} type="text" name="search" />
        </label>
      </div>
    </CSSTransition>
  );

ContactFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default ContactFilter;
