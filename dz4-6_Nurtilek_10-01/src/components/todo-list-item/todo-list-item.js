import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ id, label, onDelete, onDone, onImportant, important, done }) => {

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal',
    textDecoration: done ? 'line-through': null,
  };

  return (
    <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        onClick={() => onDone(id)}
        style={style}>
        {label}
      </span>

      <button type="button"
              onClick={() => onImportant(id)}
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              onClick={() => onDelete(id)}
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
