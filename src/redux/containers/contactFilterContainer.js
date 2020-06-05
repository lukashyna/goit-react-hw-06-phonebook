import { connect } from 'react-redux';
import * as action from '../action';

import ContactFilter from '../../components/contactFilter/contactFilter';

const mapStateToProps = state => ({
  value: state.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: event => dispatch(action.filterContact(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);
