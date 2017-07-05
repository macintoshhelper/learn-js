import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.activeUser,
});

class UserDetail extends React.Component {
  render() {
    console.log(this.props.user);
    if (!this.props.user) return (<div>Select a user</div>);
    return (
      <div>
        <h2>{this.props.user.username}</h2>
        <p>{this.props.user.bio}</p>
      </div>
    )
  }
}

export default connect(mapStateToProps)(UserDetail);
