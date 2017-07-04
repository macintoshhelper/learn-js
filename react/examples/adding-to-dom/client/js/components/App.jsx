import React from 'react';
import PropTypes from 'prop-types';

import TodoList from './TodoList';

// class App extends React.Component {
//   render() {
//     return (
//       <div style={{ textAlign: 'center' }}>
//         <h1>Hello World</h1>
//       </div>);
//   }
// }
class App extends React.Component {
  constructor(props) {
    super(props);

    this.addToList = this.addToList.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    // this.nextTodoId = 0;

    this.state = {
      value: '',
      todos: [],
      todosCount: 0,
    };
  }

  addToList(event) {
    event.preventDefault();
    const newTodo = {
      id: this.state.todosCount + 1,
      text: this.state.value,
    };

    this.setState({
      todos: this.state.todos.concat(
        newTodo,
      ),
      todosCount: newTodo.id,
    });
  }

  removeTodo(id) {
    this.setState({ todos: this.state.todos.filter(x => x.id !== id) });
  }


  render() {
    const todos = this.state.todos;

    return (
      <div>
        <form onSubmit={this.addToList}>
          <input
            value={this.state.value}
            onChange={event =>
              (this.setState({ value: event.target.value }))
            }
          />
          <input type="submit" />
        </form>
        <ul>
          <TodoList todos={todos} removeTodo={this.removeTodo} />
        </ul>
      </div>
    );
  }
}

// App.propTypes = {
//   text: PropTypes.string.isRequired,
// };
//
// App.defaultProps = {
//   text: 'Default text',
// };

export default App;
