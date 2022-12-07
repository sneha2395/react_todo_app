import React from 'react';
import moment from 'moment';

const Todo = ({ text, todo, todos, setTodos }) => {

  const deleteHandler = () => {
    console.log({todo, todos});
    setTodos(todos.filter((el) => el.id !== todo.id));
    console.log(todo);

  };

  const completeHandler = () => {
    setTodos(todos.map(item => {
      if(item.id ===todo.id){
        return{...item, completed: !item.completed };
      }
      return item;
    }));
  };
  


  return (

    <div className='todo'>
      {/* <div className='todo-itemList'></div> */}
      <li className='todo-item'><b>{moment().format('MMMM Do YYYY, h:mm:ss a')}</b>{text} </li>
      <div className='button-group'>
        <button onClick={completeHandler} className='trash-button'>
          <i className='fas fa-check'></i>
        </button>
        <button onClick={deleteHandler} className='trash-button' >
          <i className='fas fa-trash'></i>
        </button>
      </div>

    </div>


  );
};

export default Todo;