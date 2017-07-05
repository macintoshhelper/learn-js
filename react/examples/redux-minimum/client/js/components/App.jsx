import React from 'react';
import { connect } from 'react-redux';
import UserList from './UserList';
import UserDetail from './UserDetail';

const mapStateToProps = state => ({
  users: state.users,
});

class App extends React.Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h2>Username list:</h2>
        <UserList />
        <h2>User info:</h2>
        <UserDetail />
      </div>);
  }
}

export default connect(mapStateToProps)(App);
