// Імпорти NPM ===========================================================
import { JSX } from "react/jsx-runtime";
import {useEffect, useState} from 'react';
// =======================================================================

// Імпорти компонентів ===================================================
import Header from '../Header/Header';
import RandomCharacter from '../RandomCharacter/RandomCharacter';
import ListCharacter from '../ListCharacter/ListCharacter';
import InfoCharacter from '../InfoCharacter/InfoCharacter';
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
  const [dataListCharacter, setDataListCharacter] = useState<Character[] | "load" | "error">("load");

  useEffect(() => {
      fetch("https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=200&apikey=6953019632a49d4f4f7a4c1138ab2248")
      .then((response) => {
        if (!response.ok || response.status !== 200) {
          setDataListCharacter("error");
        }
        return response.json();
      }).then(data => {
        const newdata: Character[] = data.data.results.map((obj: any) => {
            return {id: obj.id, img: `${obj.thumbnail.path}.${obj.thumbnail.extension}`, name: obj.name}
        });
        setDataListCharacter(newdata);
      }).catch(() => {
        setDataListCharacter("error");
      });
  },[]);

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
          <RandomCharacter/>
          <div className="moreCharacter">
            <ListCharacter dataListCharacter={dataListCharacter}/>
            <InfoCharacter/>
          </div>
        </main>
      </div>
    </div>
  );
}
