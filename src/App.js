import React, { Component } from 'react';
import ContactForm from './redux/containers/contactFormContainer';
import ContactFilter from './redux/containers/contactFilterContainer';
import ContactList from './redux/containers/contactListContainer';
import styles from './app.module.css';
import Alert from './components/alert/alert';
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
          <Alert />
        </div>
      </div>
    );
  }
}
