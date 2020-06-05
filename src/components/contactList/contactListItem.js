import React from 'react';
import PropTypes from 'prop-types';
import styles from './contactListItem.module.css';

const ContactListItem = ({ contact, deleteContact }) => (
  <div className={styles.flexContainer}>
    <div className={styles.contact}>
      <p className={styles.contactText}>{contact.name} </p>
      <p className={styles.contactText}>{contact.number}</p>
    </div>
    <button className={styles.delete} onClick={deleteContact} type="button" />
  </div>
);
ContactListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default ContactListItem;
