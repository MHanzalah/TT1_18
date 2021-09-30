import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import ItemID from './components/DisplayItem/ItemID';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <>
      <Switch>
        <Route path="/item-:id" component={ItemID} />
      </Switch>
    </>
  </Router>
    // <div className="App">
    //   <Products />
    //   <Navbar />
    // </div>
  );
}

export default App;
