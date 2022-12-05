import React, {useState}from 'react';

// function adding() {
//   // alert('Hello!');
// }    


const Button = () => {
  const [btnState, setBtnState] = useState(false);
  return (
    <div>
        <button type='submit' className='btn btn-add'
        
        >Add
        {/* <i className='fa-d'></i> */}
        
        </button>
    </div>
  )
}

export default Button;
{/* <Button type="submit" onClick={() => setTodo(todo + 1)} /> */}
