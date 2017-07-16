import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Text from state',
    };
  }

  render() {
    const text = this.state.text;

    return (
      <div>
        <h2>{text || this.props.text }</h2>
        <input onChange={event => (this.setState({ text: event.target.value }))} />
      </div>
    );
  }
}

App.propTypes = {
  text: PropTypes.string.isRequired,
};

App.defaultProps = {
  text: 'Default text',
};

export default App;
