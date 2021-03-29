import React from 'react';
import NameItem from './components/NameItem';
import './App.css';

function App() {
  return (
    <>
      <h1>De actieve naam is: ...</h1>
      <NameItem name="Henk" />
      <NameItem name="Piet" />
      <NameItem name="Jan" />
    </>
  );
}

export default App;
