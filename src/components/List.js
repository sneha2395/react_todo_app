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