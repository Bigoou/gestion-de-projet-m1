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
      {devoirs.map((devoir) => (
        <Devoir key={devoir.nom} nom={devoir.nom} lien={devoir.lien} />
      ))}
    </div>
  );
}

export default App;
