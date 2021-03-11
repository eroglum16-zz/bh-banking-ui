import React from "react";
import {Route, Switch, Router} from 'react-router';
import './App.css';
import Layout from "./app/layout/Layout";


function App() {
  return (
      <Switch>
        <Route component={Layout}/>
      </Switch>
  )
}

export default App;
