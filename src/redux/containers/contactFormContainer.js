import { connect } from 'react-redux';
import * as actions from '../action';
import ContactForm from '../../components/contactForm/contactForm';

const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(actions.addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
