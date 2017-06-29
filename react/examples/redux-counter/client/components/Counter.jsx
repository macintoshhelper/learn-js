import React from 'react';
import PropTypes from 'prop-types'

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return (
      <div>
        <button onClick={onIncrement}>
          +
        </button>
        <h2>
          {value}
        </h2>
        <button onClick={onDecrement}>
          -
        </button>
      </div>
    )
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export default Counter
