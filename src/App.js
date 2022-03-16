import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Person></Person>
        <Person></Person>
        <Person></Person>
        <Person></Person>

        <h1>Yeah! I have completed React First Project</h1>
        <Friend></Friend>
        <Friend></Friend>
        <Friend></Friend>
        <Friend></Friend>
      </div>
    );
  }
}

function Person(){
  return(
    <div className="person">
      <h1>Name: Masud Rana </h1>
      <h2>Works: PBS </h2>
      <h4>Designation: IT Engineer</h4>
    </div>
  )
}

function Friend(){
  return (
    <div className='friend'>
      <h3>Name: Ajay Devgun</h3>
      <h4>Ocupation: Acting</h4>
      <p>Country: India</p>
    </div>
  )
}

export default App;
