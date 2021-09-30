import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './style.css';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar'
import Product from './components/Products/Products'
import ItemID from './components/DisplayItem/ItemID'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Product} />
        <Route path="/:id" component={ItemID} />
      </Switch>
    </Router>
  );
}

export default App;

{/* <Navbar/>
<Product/>
 Login-component
<div className="auth-wrapper">
  <div className="auth-inner">
    <Login />
  </div>
</div>*/}
