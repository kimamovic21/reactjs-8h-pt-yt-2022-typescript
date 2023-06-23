import React from 'react';
import './App15.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Main from './pages/main';
import Login from './pages/login';
import Navbar from './Navbar';
import CreatePost from './pages/create-post';

const App15 = () => {
  return (
    <div className='App15'>
        <Router >
          <Navbar />
          <Routes >
            <Route path='/' element={<Main />} />
            <Route path='/login' element={<Login />}/>
            <Route path='/createposts' element={<CreatePost />}/>
          </Routes>
        </Router>
    </div>
  );
};

export default App15;
