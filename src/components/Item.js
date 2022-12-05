import React from 'react'

const Item = ({setInputText, todos, setTodos, inputText }) => {

  const inputTexthandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
    };

const submitTodohandler =(e)=> {
  console.log(e);
   e.preventDefault();
   setTodos([...todos, {text:inputText, completed:false, id:Math.random()*1000}])
   setInputText("");
};


  return (
    <div className='formSection'>
    <form className='formInnerSection'>
      <input
        type="Search"
        className='input-box'
        placeholder='Enter a todo'
        // onChange={(e) => setTodo(e.target.value)}
        onChange={inputTexthandler}
        value={inputText}
      />
      <button onClick={submitTodohandler} type='submit' className='btn btn-add'>Add</button>

      </form>
      </div>
  );
};
    
     


export default Item;