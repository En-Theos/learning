import React from 'react';

import Header from '../Header/Header';
import RandomCharacterBlock from '../RandomCharacterBlock/RandomCharacterBlock';

import './App.scss';

export default function App() {
  return (
    <div className="App">
      <div className="limit">
        <Header></Header>
        <main>
          <RandomCharacterBlock></RandomCharacterBlock>
        </main>
      </div>
    </div>
  );
}
