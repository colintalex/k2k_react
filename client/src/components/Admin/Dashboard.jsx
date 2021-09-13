import React, { Component } from "react";
import { Redirect, Switch, Route, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import "./dashboard.css";
import NotFound from "../NotFound/NotFound";
import Books from "../Books/Books";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogout: false
    };
  }
  signOut = () => {
    localStorage.removeItem("token");
    this.setState({
      islogout: true
    });
  };
  render() {
    if (this.state.islogout) {
      return <Redirect to="/login" />;
    }
    const { match } = this.props;
    return (
      <div>
        <ul className='admin-nav'>
          <li>
            <NavLink to='/admin'>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to='/admin/books'>Books</NavLink>
          </li>
          <li>
            <NavLink to='/blog'>Blog</NavLink>
          </li>
          <li className="push-right">
            <button onClick={this.signOut} href="#">
              Sign Out
            </button>
          </li>
        </ul>
        <main role="main">
          <div className="main">
            <Switch>
              <Route path="/admin/books">
                <Books />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}
 
export default withRouter(Dashboard);