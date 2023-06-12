import React from 'react';
import './App14.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Contact from './Contact';
import Home from './Home';
import Login from './Login';
import { Provider } from 'react-redux';
import { store } from './store';

const App14 = () => {
  return (
    <div className='App14'>
        <Provider store={store}>
            <Router>
                <Link to="/" style={{textDecoration:'none'}}>Home</Link>
                <Link to="/login" style={{marginLeft: '10px', textDecoration:'none'}}>Login</Link>
                <Link to="/contact" style={{marginLeft: '10px', textDecoration:'none'}}>Contact</Link>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </Router>
        </Provider>
    </div>
  );
};

export default App14;
