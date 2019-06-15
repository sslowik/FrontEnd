import React from 'react';
//import logo from './BePatient.svg';
import './App.css';
import Patient from "./components/Patient";
import Hook from "./components/PatientHook";
import Header from "./components/Header";
import Page404 from "./components/Page404";
import Credits from "./components/Credits";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Patient} />
        <Route exact path="/hook" component={Hook} />
        <Route exact path="/credits" component={Credits}/>
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
