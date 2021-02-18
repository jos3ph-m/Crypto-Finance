import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

let url =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

function App() {
  return (
    <div className="App">
      <h1>Crypto api</h1>
    </div>
  );
}

export default App;
