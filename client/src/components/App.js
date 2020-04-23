import React from 'react';
import {  Switch,  Route} from "react-router-dom";
import About from "./about";
import Home from "./home";
import Login from './RegisterLogin';
import Register from './RegisterLogin/register'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
