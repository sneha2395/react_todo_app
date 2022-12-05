import React from 'react'

const Todo = ({text}) => {
  return (
    <div className='todo'>
      <div className='todo-itemList'></div>
        <li className='todo-item'>{text}
        <div className='button-group'>
        <button className='complete-button'>
            <i className='fas fa-check'></i>
        </button>
        <button className='trash-button'>
        <i className='fas fa-trash'></i>
        </button>
        </div>
        </li>
    </div>


  );
};

export default Todo;