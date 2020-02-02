import React from 'react';
import Register from './Register';
import './App.css';
import Home from './Home';
import Users from  './Users';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Function() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <ul>
              <h5 className="Links">
              <Link to="/home">Home</Link>
              </h5>
            </ul>
            <ul>
              <h5 className="Links">
              <Link to="/register">Register</Link>
              </h5>
            </ul>
            <ul>
              <h5 className="Links">
              <Link to="/users">Members</Link>
              </h5>
            </ul>
            {/* <ul>
              <h5 className="Links">
              <Link to="/chat">Chat Room</Link>
              </h5>
            </ul> */}
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          {/* <Route path="/Chat">
            <Chat />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}



