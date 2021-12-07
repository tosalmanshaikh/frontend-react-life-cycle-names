import React from 'react';
import NameItem from './components/NameItem';
import './App.css';

function App() {
  return (
    <>
      <h1>Het laatste rondje is gegeven door: ...</h1>
      <ul>
        <NameItem name="Henk" />
        <NameItem name="Piet" />
        <NameItem name="Jan" />
      </ul>
    </>
  );
}

export default App;
