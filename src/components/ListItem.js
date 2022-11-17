import React from 'react';

const Listitem = (data) => {
  return (
    <div className='itemList'>
      <p className="listItemName">Sample Text</p>
      <button className='btn'>
          <i class="fa-solid fa-trash-can" font-size="1rem"></i></button>
    </div>
  )
}

export default Listitem;