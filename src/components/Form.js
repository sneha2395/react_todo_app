import React from 'react';
import Button from './Button';
import Listitem from './ListItem';
// import { FaTrashAlt } from "react-icons/fa";



let data = [
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
  // const [value, setValue] = React.useState("");

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
        <Button />

      </div>

      <hr />
      <div className='form-page'>

        {data.map((data) => (
        <Listitem data={data} />
        ))};
       </div>
    </div>
  );
};

export default Form;