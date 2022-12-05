import React,{useState} from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Item from './components/Item';
import TodoList from './components/TodoList';
// import Item from './components/Item';

const App = () =>{
  const [inputText, setInputText] = useState("");
const [todos, setTodos]= useState([]);

  return (
    <div className="App">
      <div className='wrapper'>
        <Header/>
        <h1>todo{inputText}</h1>
        {/* <Form/>  */}
        {/* <TodoList todos={todos} setTodos={setTodos}
        
        /> */}
        <Item inputText={inputText} todos={todos}setTodos={setTodos}setInputText={setInputText}/>
        <TodoList todos={todos}/>
      </div>
      {/* <Item name="Sneha" subject="Physics" />
      <Item name="neha" subject="Chemistery" />
      <Item name="eha" subject="Biology" /> */}
    </div>
  )
};

export default App;

