import React, { useState } from 'react';
import TodoList from './TodoList'

function App() {
  var _ = useState(['Todo 1','Todo 2','Todo 3'])  
  const todos = _[0]
  const setTodos = _[1]
  if (window.debug_flag) debugger; // 這裡是 front end  
  return (
    <TodoList todos={todos}/>  // 若不框上 {} 的 error: JSX value should be either an expression or a quoted JSX text.
  );                           // {todos} 是 ES6 的語法，JSX 利用來與 HTML 相容，
}                              // 否則 HTML 的 todos=todos 等於 todos="todos"  

export default App;
