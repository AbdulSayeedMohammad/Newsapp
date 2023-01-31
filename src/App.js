// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import News from './components/News';
import React, { Component } from "react";

function App() {
  return (
  <>
    <Navbar/>
    <News pageSize={6} country="in" category="general"/>

  </>
  );
}

export default App;
