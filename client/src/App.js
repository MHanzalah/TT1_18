import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
import Login from './components/Login/Login';
import ItemID from './components/DisplayItem/ItemID'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productId, quantity) => {
    var i;
    if(cart.length === 0){
      setCart([{
        productId: productId,
        quantity: quantity
      }])
    }
    for (i = 0; i < cart.length; i++) {
      if (cart[i].productId === productId) {
        cart[i] = {
          productId: productId,
          quantity: quantity+1
        }
        setCart(cart)
      }
    console.log(cart)
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Products onAddToCart={handleAddToCart}/>
          </Route>
          <Route path="/:id">
            <ItemID/>
          </Route>
          <Route exact path="/cart">
            <ShoppingCart />
          </Route>
          <Route exact path="/login">
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Login />
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

