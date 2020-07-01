import React from 'react';
import './App.css';
import Main from './components/Main';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>Header</h1>
      <p>Some text</p>
      <Main />
    </div>
  );
}

export default App;
