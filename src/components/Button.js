import React, {useState}from 'react';

function adding() {
  // alert('Hello!');
}    


const Button = () => {
  const [btnState, setBtnState] = useState(false);
  return (
    <div>
        <button type='Submit' className='btn btn-add' onClick={adding()}
        
        >Add
        {/* <i className='fa-d'></i> */}
        
        </button>
    </div>
  )
}

export default Button;
