import React from 'react';
import './App.css';
// import Form from './components/Form';
// import Header from './components/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';




function App() {
  return (
    <div className="App">
      {/* <div className='wrapper'>
        <Header />
        <Form />
        </div> */}
        
      <Router>
        <Sidebar/>
        <Routes>
          <Route path='/'/>
          </Routes>
      </Router>
    
    </div>
  );
}

export default App;
