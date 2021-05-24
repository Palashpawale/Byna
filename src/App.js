import React, { useState, useEffect } from 'react';
import logo from './logo.svg'; 
import './App.css';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import NavBar from './NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Card from './components/card';


function App() {
  return(
    <>
   <Router>
     <NavBar/>
     <Card />
   </Router>
    </>
  )
}


export default App;

