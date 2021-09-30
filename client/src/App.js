import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar'
import Product from './components/Products/Products'
function App() {
  return (
    <>
      <Navbar/>
      <Product/>
      {/* Login-component
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Login />
        </div>
      </div>*/}
      
    </>
  );
}

export default App;
