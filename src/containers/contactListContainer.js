import { connect } from 'react-redux';
import ContactList from '../components/contactList/contactList';
import * as actions from '../redux/contactAction';
import { getFilteredContacts } from '../redux/contactsSelectors';

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  deleteContact: id => dispatch(actions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
