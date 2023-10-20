import React from 'react';
import Devoir from './components/Devoir';

import './App.css'

function App() {
  const devoirs = [
    { nom: 'Devoir 1', lien: 'https://online.flippingbook.com/view/933659523/' },
    { nom: 'Devoir 2', lien: 'https://online.flippingbook.com/view/933659523/' },
    // ... autres devoirs
  ];

  return (
    <div className="app">
      <h1>Bienvenue, <span className="name">Guenaëlle</span> </h1>
      <div className="devoirs">
      {devoirs.map((devoir) => (
        <Devoir key={devoir.nom} nom={devoir.nom} lien={devoir.lien} />
      ))}
      </div>
    </div>
  );
}

export default App;
