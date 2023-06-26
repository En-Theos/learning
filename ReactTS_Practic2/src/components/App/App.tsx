import {useState} from 'react';

import Header from '../Header/Header';
import RandomCharacterBlock from '../RandomCharacterBlock/RandomCharacterBlock';
import ListCharacterBlock from '../ListCharacterBlock/ListCharacterBlock';
import InfoCharacterBlock from '../InfoCharacterBlock/InfoCharacterBlock';

import { Character } from '../../interfaces/globalIntefaces';

import './App.scss';

export default function App(): JSX.Element {
  const [dataListCharacter, setDataListCharacter] = useState<Character[]>([
    {id: 1, img: "image/535feab462a64 1.jpg", name: "ABYSS"},
    {id: 2, img: "image/loki.png", name: "LOKI"},
    {id: 3, img: "image/5202887448860 1.png", name: "Adam Warlock"},
    {id: 4, img: "image/4ce5a25d34245 1.png", name: "Boom Boom"},
    {id: 5, img: "image/4ce59f17087ab 1.png", name: "Calypso"},
    {id: 6, img: "image/52740e24bddb4 1.png", name: "Colleen Wing"},
    {id: 7, img: "image/4ce5a2959ba25 1.png", name: "Daimon Hellstrom"},
    {id: 8, img: "image/4c00404b5e1a2 1.png", name: "Damage Control"},
    {id: 9, img: "image/538615ca33ab0 1.png", name: "HULK"},
  ])


  return (
    <div className="App">
      <div className="limit">
        <Header/>
        <main>
          <RandomCharacterBlock/>
          <div className="moreCharacter">
            <ListCharacterBlock 
              dataListCharacter={dataListCharacter}/>
            <InfoCharacterBlock/>
          </div>
        </main>
      </div>
    </div>
  );
}
