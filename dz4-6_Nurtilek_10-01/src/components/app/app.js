import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import TodoAdd from '../todo-add';

import './app.css';


class App extends React.Component {
  state = {
    todos: [
      { id: 1, label: 'Drink vine', important: false, done: false },
      { id: 3, label: 'Make Awesome vodka', important: true, done: true },
      { id: 2, label: 'Have a dinner', important: true, done: false },
    ],
    searchText: '',
    statusFilter: 'all',
  }

  onDelete = (id) => {
    this.setState((oldState) => {
      const new_todos = oldState.todos.filter((todo) => todo.id != id)
      return {todos: new_todos}
    })
  }

  onImportant = (id) => {
    this.setState((oldState) => {

      const newTodos = oldState.todos.map((todo) => {
        if (todo.id == id) {
          return {...todo, important: !todo.important}
        }
        else {
          return {...todo}
        }
      })

      return {todos: newTodos}
    })
  }

  onSearch = (text) => {
    this.setState({
      searchText: text
    })
  }

  onSearchFilter = (filterText, todos) => {
    const filteredTodos = todos.filter((todo) => todo.label.includes(filterText))

    return filteredTodos;
  }

  onAddNewTodo = (text) => {
    this.setState((oldState) => {  
      const ids = oldState.todos.map((todo) => todo.id) // [1, 2, 3]
      let maxId = Math.max(...ids) // 3
      const newTodo = { 
        id: ++maxId, 
        label: text,
        important: false,
        done: false 
      }
    
      return {
        todos: [...oldState.todos, newTodo]
      }
    })
  }

  onDone = (id) => {
    this.setState((oldState) => {

      const newTodos = oldState.todos.map((todo) => {
        if (todo.id == id) {
          return {...todo, done: !todo.done}
        }
        else {
          return {...todo}
        }
      })

      return {todos: newTodos}
    })
  }

  onFilter = (status) => {
    this.setState({statusFilter: status})
  }

  onStatusFilter = (todos, filterText) => {
    if (filterText === 'active') {
      return todos.filter((todo) => todo.done == false)
    } else if (filterText === 'done') {
      return todos.filter((todo) => todo.done == true)
    } else {
      return todos
    }
  }

  render() {
    const filteredTodos = this.onSearchFilter(this.state.searchText, this.state.todos)
    const filteredByStatus = this.onStatusFilter(filteredTodos, this.state.statusFilter)

    const toDo = this.state.todos.filter(todo => todo.done === true).length
    const toDone = this.state.todos.filter(todo => todo.done === false).length

    return (
      <div className="todo-app">
        <AppHeader toDo={toDone} done={toDo} />
        <div className="top-panel d-flex">
          <SearchPanel onSearch={this.onSearch} />
          <ItemStatusFilter onFilter={this.onFilter} />
        </div>
        <TodoList 
          todos={filteredByStatus}
          onDone={this.onDone}
          onDelete={this.onDelete} 
          onImportant={this.onImportant} 
        />
        {/* <input type='button' value='Change state' onClick={this.onChangeState} /> */}
        <TodoAdd onAddNewTodo={this.onAddNewTodo} />
      </div>
    );
  };
}


export default App;
