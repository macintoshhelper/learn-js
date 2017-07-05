import React from 'react';
import { connect } from 'react-redux';
import { USER_SELECT } from '../constants/actionTypes';

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  onUserSelect: payload =>
    dispatch({ type: USER_SELECT, payload }),
});

class UserList extends React.Component {

  userSelect(user) {
    console.log(`You clicked on: ${user.username}`);
    return this.props.onUserSelect(user);
  }

  createListItems() {
    return this.props.users.map((user) => {
      return (
        <li key={user.id} onClick={() => this.userSelect(user)}>{user.username}</li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);
