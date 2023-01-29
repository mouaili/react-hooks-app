import React from 'react';
import Counter from './Components/Counter';
import Title from './Components/Title';
import style from './css/App.module.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className={`${style.header}`}>
      <Title>Création d'un compteur en react.js</Title>
      <Counter />
    </div>
  );
}

export default App;
