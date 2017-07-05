import { combineReducers } from 'redux';
import Home from './home';

const allReducers = combineReducers({
  home: Home,
});

export default allReducers;
