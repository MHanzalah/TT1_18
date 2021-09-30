import axios from 'axios';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import ShoppingCart from './components/ShoppingCart/ShoppingCart'
// import Detail from './components/Detail/Detail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState({});

  const handleAddToCart = async (productId, quantity) => {
    useEffect(() => {
      axios.get('http://localhost:5000/exercises/')
          .then(response => {
            setCart({
              productId: response.data,
              quantity: response.data
            })
          })
          .catch((err) => {
              console.log(err)
          })
    }, [])
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route exact path="/cart">
            <ShoppingCart />
          </Route>
          {/* <Route exact path="/detail">
            <Detail />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
