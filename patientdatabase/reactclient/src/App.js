import React from 'react';
//import logo from './BePatient.svg';
import './App.css';
import Patient from "./components/Patient";
import Hook from "./components/PatientHook";
import PatientTable from "./components/PatientTable";
import Header from "./components/Header";
import ToDo from "./components/ToDo";
import Credits from "./components/Credits";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Patient} />
        <Route exact path="/patients" component={PatientTable} />
        <Route exact path="/credits" component={Credits}/>
        <Route component={ToDo} />
      </Switch>
    </Router>
  );
}

export default App;
