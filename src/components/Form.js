import React from 'react';
import Button from './Button';
import Listitem from './ListItem';
import {useState} from 'react';



let taskList = [
  {
    taskName: 'Example task',
    date: '22-10-2022',
    completed: false
  },
  {
    taskName: 'task1',
    date: "22-10-2022",
    completed: false
  },
  {
    taskName: 'task1',
    date: "22-10-2022",
    completed: false
  }
]


const Form = () => {
  // const [active, setActive] = useState(types[0]);
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (!value) return;
  //   addTodo(value);
  //   setValue("");
  // };

  return (
    <div className='formSection'>
      <div className='formInnerSection'>
        <input
          type="Search"
          className='input-box'
          placeholder='Enter a todo'
        />
        <Button/>
       
      
      </div>
      <hr />
      <div className='form-page'>
        {taskList.map((task) => (
          <Listitem data={task}/>
        ))}
      </div>
    </div>
  );
};

export default Form;