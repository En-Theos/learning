// Імпорти NPM ===========================================================
import { JSX } from "react/jsx-runtime";
import {useState} from 'react';
// =======================================================================

// Імпорти компонентів ===================================================
import Header from '../Header/Header';
import RandomCharacter from '../RandomCharacter/RandomCharacter';
import ListCharacter from '../ListCharacter/ListCharacter';
import InfoCharacter from '../InfoCharacter/InfoCharacter';
import Skeleton from "../Skeleton/Skeleton";
import MessageComics from "../MessageComics/MessageComics";
import ListComics from "../ListComics/ListComics";
import InfoComics from "../InfoComics/InfoComics";
// =======================================================================

// Імпорти інтерфейсів ===================================================
import { Character, Comics } from '../../interfaces/globalIntefaces';
// =======================================================================

// Імпорти стилів=========================================================
import './App.scss';
// =======================================================================

// Імпорти зображень =====================================================
// =======================================================================

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

  const [dataListComics, setDataListComics] = useState<Comics[]>([
    {id: 1, img: "image/UW.png", name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB", price: 9.99},
    {id: 2, img: "image/x-men.png", name: "X-Men: Days of Future Past", price: 0},
    {id: 3, img: "image/UW.png", name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB ", price: 9.99},
    {id: 4, img: "image/x-men.png", name: "X-Men: Days of Future Past", price: 0},
    {id: 5, img: "image/UW.png", name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB ", price: 9.99},
    {id: 6, img: "image/x-men.png", name: "X-Men: Days of Future Past", price: 0},
    {id: 7, img: "image/UW.png", name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB", price: 9.99},
    {id: 8, img: "image/x-men.png", name: "X-Men: Days of Future Past", price: 0},
  ])

  return (
    <div className="App" style={{backgroundImage: "none"}}>
      <div className="limit">
        <Header/>
        <main>
          <MessageComics/>
          <InfoComics/>
        </main>
      </div>
    </div>
  );
}
