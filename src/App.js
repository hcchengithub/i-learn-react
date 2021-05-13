import React, { useState } from 'react';
import TodoList from './TodoList'

function App() {
  var _ = useState(['Todo 1','Todo 2','Todo 3'])  
  const todos = _[0]
  const setTodos = _[1]
  return (
    <TodoList todos={todos}/>
  );
}

export default App;
