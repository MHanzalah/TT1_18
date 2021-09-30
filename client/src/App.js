import itemID from './ItemID';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <>
        <Switch>
          <Route path="/item-:id" component={itemID} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
