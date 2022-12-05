import React from 'react';
import Button from './Button';
import Listitem from './ListItem';
import { useState } from 'react';


const Form = () => {
 
  // const [todo, setTodo] = useState("");
  // const [todos, setTodos] = useState([]);

const inputTexthandler = (e) => {
console.log(e.target.value);
};
 

  // const handleSubmit = (e) => {
  //   console.log();
  //   e.preventDefault();

  //   if (todo !== '') {
  //     setTodos([{id:`${todo}-${Date.now()}`, todo }, ...todos]);

  //   }
  // };
return (
    <div className='formSection'>
      <form className='formInnerSection'>
        <input
          type="Search"
          className='input-box'
          placeholder='Enter a todo'
          // onChange={(e) => setTodo(e.target.value)}
          onChange={inputTexthandler}
        />
        <Button />

        </form>
      <hr />
     
        {/* <ul className='allTodos'>
          {todos.map((t) => (
            <li className='singleTodo'>
              <span className='todoText'>{t.todo}</span>
              <Listitem />
            </li>
          ))}
        </ul> */}

        {/* {taskList.map((task) => (
          <Listitem data={task}/>
        ))} */}
    </div>
  );
};

export default Form;