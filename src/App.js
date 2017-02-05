import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AppearTodoList from './components/AppearTodoList';

class App extends Component {
  render() {
    return (
      <div>
        <div>Appear TodoList</div>
        <AppearTodoList/>
        <div style={{marginTop: '100px'}}>Regular TodoList</div>
        <TodoList/>
      </div>
    );
  }
}

export default App;
