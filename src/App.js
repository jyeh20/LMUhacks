import React from 'react';
import Register from './Components/Register';
import './CSS/App.css';
import Home from './Components/Home';
import Users from  './Components/Users';
import Chat from './Components/ChatComponent';
import Nav from './Components/Nav';
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
          <Route path="/Users" component = {Users}/>
          <Route path="/chatcomponent" exact component = {Chat} />
        </Switch>      
      </div>
    </Router>
  );
}

export default App;


