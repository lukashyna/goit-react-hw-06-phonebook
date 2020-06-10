import { connect } from 'react-redux';
import * as action from '../redux/contactAction';
import { getFilter, getContactsLength } from '../redux/contactsSelectors';
import ContactFilter from '../components/contactFilter/contactFilter';

const mapStateToProps = state => ({
  value: getFilter(state),
  count: getContactsLength(state),
});

const mapDispatchToProps = dispatch => ({
  changeFilter: event => dispatch(action.filterContact(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
