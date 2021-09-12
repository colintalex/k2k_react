import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={() => <Home name='Colin'/>}/>
      </Switch>
    </Router>
  );
}

export default App;
