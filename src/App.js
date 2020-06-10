import React, { Component } from 'react';
import ContactForm from './containers/contactFormContainer';
import ContactFilter from './containers/contactFilterContainer';
import ContactList from './containers/contactListContainer';
import styles from './app.module.css';
import Logo from './components/logo/logo';

export default class App extends Component {
  state = {
    isMounted: false,
  };

  componentDidMount() {
    this.setState({
      isMounted: true,
    });
  }

  render() {
    const { isMounted } = this.state;

    return (
      <div className={styles.container}>
        <div className={styles.contactForm}>
          <Logo title="Phonebook" isMounted={isMounted} />
          <ContactForm />
        </div>
        <div>
          <div>
            <ContactFilter />
            <ContactList />
          </div>
        </div>
      </div>
    );
  }
}
