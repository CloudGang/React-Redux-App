import React from 'react';
import './App.css';
import Price from './components/Price';
import NewCoin from './components/Input';
import GoingDark from './components/GoingDark';

function App() {

  return (

    <div className="App">
      <GoingDark />
      <Price Crypto />
      <NewCoin />

    </div>

  );
  
}

export default App;