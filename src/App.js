import React, { useState } from 'react';
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState(['Todo 1','Todo 2'])  
  return (
    <TodoList todos={todos}/>
  );
}

export default App;
