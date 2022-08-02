import React from 'react';
import RoutesApp from './Routes';
import './App.css';
import MyProvider from './context/Provider';

function App() {

  return (
    <MyProvider>
      <RoutesApp/>
    </MyProvider>
  );
}

export default App;
