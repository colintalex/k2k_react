import React, { Component } from "react";
import { Redirect, Switch, Route, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import "./dashboard.css";
import NotFound from "../NotFound/NotFound";
import Books from "../Books/Books";
import AdminNav from "./AdminNav";
import Blog from '../Blog/Blog'

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
        <main role="main">
          <div className="main">
            <AdminNav signOut={this.signOut} />
            <Switch>
              <Route path="/admin/books">
                <Books />
              </Route>
              <Route path="/admin/blog">
                <Blog />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}
 
export default withRouter(Dashboard);