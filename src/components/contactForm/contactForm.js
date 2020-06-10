import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './contactForm.module.css';
import Alert from '../alert/alert';

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    contacts: PropTypes.array.isRequired,
  };

  state = {
    name: '',
    number: '',
    isAlert: false,
  };

  openAlert = () => {
    const uniqueName = this.props.contacts.toString().toLowerCase().includes(this.state.name.toLowerCase());

    if (uniqueName) {
      this.setState({
        isAlert: true,
      });
      setTimeout(() => this.closeAlert(), 3000);
    }
  };

  closeAlert = () => {
    this.setState({
      isAlert: false,
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.isAlert) {
      this.resetForm();
      return;
    }
    this.props.onAddContact({ ...this.state });
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    const { name, number, isAlert } = this.state;
    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            Name
            <input className={styles.input} type="text" name="name" value={name} onChange={this.handleChange} />
          </label>
          <label className={styles.label}>
            Number
            <input
              className={styles.input}
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
              name="number"
              placeholder="000-00-00"
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button className={styles.submit} type="submit" onClick={this.openAlert}>
            Add contact
          </button>
        </form>
        {isAlert && <Alert />}
      </>
    );
  }
}
