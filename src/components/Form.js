import React from 'react';
import Button from './Button';

const Form = () => {
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
        <hr/>
    </div>
  );
};

export default Form;