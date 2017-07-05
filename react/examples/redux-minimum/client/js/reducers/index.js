import { combineReducers } from 'redux';
import Users from './users';
import ActiveUser from './active-user';

const allReducers = combineReducers({
  users: Users,
  activeUser: ActiveUser,
});

export default allReducers;
