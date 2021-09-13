import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import Books from './components/Books/Books'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Blog from './components/Blog/Blog'
import Admin from './components/Admin/Admin'
import Login from './components/Admin/Login'
import Nav from './components/Nav/Nav'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route exact path='/' component={() => <Home name='Colin'/>}/>
          <Route path='/books' component={Books}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/login' component={Login}/>
          <Route path='/admin' component={Admin}/>
          <Route default component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
