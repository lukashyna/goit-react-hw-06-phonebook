import React from 'react';
import { CSSTransition } from 'react-transition-group';
import slideTransition from '../../transitions/slide.module.css';
import styles from './alert.module.css';

const Alert = () => (
  <CSSTransition timeout={250} classNames={slideTransition}>
    <div className={styles.alert}>
      <p className={styles.alertText}>Already in the contact list</p>
    </div>
  </CSSTransition>
);

export default Alert;
