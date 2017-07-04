import React from 'react';
import PropTypes from 'prop-types';

// class TodoList extends React.Component
const TodoList = ({ todos, removeTodo }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>
        {todo.text}
        <button
          onClick={(event) => {
            event.preventDefault();
            removeTodo(todo.id);
          }}
        >
        X
        </button>
      </li>
    ))}
  </ul>
);


TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
  removeTodo: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
  todos: [{
    id: 1,
    text: 'Sample todo item',
  }],
};

export default TodoList;
