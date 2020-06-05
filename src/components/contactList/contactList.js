import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import ContactListItem from './contactListItem';
import styles from './contactList.module.css';
import slideTransition from '../../transitions/slide.module.css';

const ContactList = ({ contacts, deleteContact }) => (
  <>
    {/* {contacts.length > 0 && ( */}
    <TransitionGroup component="ul" className={styles.contactList}>
      {contacts &&
        contacts.map(contact => (
          <CSSTransition key={contact.id} timeout={250} unmountOnExit classNames={slideTransition}>
            <li className={styles.contactListItem} key={contact.id}>
              <ContactListItem deleteContact={() => deleteContact(contact.id)} contact={contact.contact} />
            </li>
          </CSSTransition>
        ))}
    </TransitionGroup>
    {/* )} */}
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
