import React from 'react';

function sayHello() {
  alert('Hello!');
}    


const Button = () => {
  return (
    <div>
        <button type='Submit' className='btn btn-add' onClick={sayHello}
        
        >Add
        {/* <i className='fa-d'></i> */}
        
        </button>
    </div>
  )
}

export default Button;
