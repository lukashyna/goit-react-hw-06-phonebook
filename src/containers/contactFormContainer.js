import { connect } from 'react-redux';
import * as actions from '../redux/contactAction';
import ContactForm from '../components/contactForm/contactForm';
import { getAllNames } from '../redux/contactsSelectors';

const mapStateToProps = state => ({
  contacts: getAllNames(state),
});
const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(actions.addContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
