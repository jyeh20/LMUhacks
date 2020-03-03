import React from 'react';
import Register from './Register';
import './App.css';
import Home from './Home';
import Users from  './Users';
import Chat from './ChatComponent';
import Nav from './Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component = {Home}/>
          <Route path="/register" component = {Register}/> 
          <Route path="/users" component = {Users}/>
          <Route path="/chatcomponent" component = {Chat} />
        </Switch>      
      </div>
    </Router>
  );
}

export default App;


