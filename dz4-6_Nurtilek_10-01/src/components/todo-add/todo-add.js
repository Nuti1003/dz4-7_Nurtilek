import React from 'react';

class TodoAdd extends React.Component {
   state = {text: ''}

   addTodo = (event) => {
      event.preventDefault()
      this.props.onAddNewTodo(this.state.text)
      this.setState({text: ''})
   }

   render() {
      return (
      <form onSubmit={this.addTodo}>
         <input
         onChange={(event) => this.setState({text: event.target.value})} 
         value={this.state.text}
         type='text' 
         />
         <input type='submit' value='submit' />
      </form>
      );
   }
}

export default TodoAdd;