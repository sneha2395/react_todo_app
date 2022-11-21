import React from 'react'

const Item = (props) => {
    console.log(props);
  return (
    <div> Hello {props.name} studies {props.subject}</div>
     
  );
};

export default Item;