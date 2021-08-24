// import logo from './logo.png';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/home';
import Info from './Pages/info';
import OUR from './Pages/OUR';


function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/info' exact component={Info} />
        <Route path='/OUR' exact component={OUR} />
      </Switch>
    </Router>
  );
}

export default App;
