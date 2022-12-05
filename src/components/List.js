import React from 'react'
import Listitem from './ListItem';


const List = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <Listitem/>
      ))}
    </ul>
  );
}

export default List;

// let taskList = [
//   {
//     taskName: 'Example task',
//     date: '22-10-2022',
//     completed: false
//   },
//   {
//     taskName: 'task1',
//     date: "22-10-2022",
//     completed: false
//   },
//   {
//     taskName: 'task1',
//     date: "22-10-2022",
//     completed: false
//   }
// ]
 // const changeText = (e) =>{
  //    console.log(e.target.value)
  // }
   // const [active, setActive] = useState(types[0]);
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (!value) return;
  //   addTodo(value);
  //   setValue("");
  // };