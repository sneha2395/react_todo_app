import React from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
// import Item from './components/Item';

const App = () =>{
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <Form/> 

      </div>
      {/* <Item name="Sneha" subject="Physics" />
      <Item name="neha" subject="Chemistery" />
      <Item name="eha" subject="Biology" /> */}
    </div>
  )
};

export default App;

