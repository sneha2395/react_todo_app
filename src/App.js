import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Item from './components/Item';
import TodoList from './components/TodoList';


const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);


  return (
    <div className="App">
      <nav className='navbar'>
        <div className='change-theme'> Change theme
        <button >
          <i className="fa-solid fa-bars"></i>
        </button>
        <div class="select">
        <select name="todos" class="filter-todo">
          <option value="all">All</option>
          <option value="pictures">Pictures</option>
          <option value="themes">Themes</option>
        </select>
      </div>
        </div>
      </nav>
      <div className='main-container'>
        
      <div className='wrapper'>
        * <Header />
        <Item inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
      </div>
    </div>
  )
};

export default App;

