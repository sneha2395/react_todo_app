import React from 'react';

const Listitem = (props) => {
  console.log(props)
  return (
    <div className='listItem'>
      <p className="listItemName">{props.data.taskName}</p>
      <button className='btn delete-btn'>
        <i class="fa-solid fa-trash-can" font-size="1rem">
        </i></button>
        </div>
  )
}

export default Listitem;
