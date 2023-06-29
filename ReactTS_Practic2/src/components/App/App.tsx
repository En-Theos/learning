// Імпорти NPM ===========================================================
import { JSX } from "react/jsx-runtime";
import { useCallback, useEffect, useState, useMemo, useRef } from 'react';
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

// Імпорти стилів ========================================================
import './App.scss';
// =======================================================================

// Імпорти зображень =====================================================
// =======================================================================

export default function App(): JSX.Element {
  // Використання useState, дані при зміні яких має змінюватись і сам компонент =====================
  const [dataListCharacter, setDataListCharacter] = useState<Character[] | "load" | "error">("load");
  // ================================================================================================

  // Використання useRef (дані), дані що мають наскрізне збереження =================================
  const offset = useRef(200);
  // ================================================================================================

  // Використання useRef (елементи), посилання на елементи DOM структурі ============================
  // ================================================================================================

  // Використання useEffect, дії що потрібно виконувати: ============================================
  // При першій загрузці компонента 

  // При зміні якогось state або props

  // При видалені компонента із сторінки

  // ================================================================================================
  // Використання useMemo, значення яке потрібно вираховувати: ======================================
  // При першій загрузці компонента 

  // При зміні якогось state або props

  // При видалені компонента із сторінки

  // ================================================================================================

  // Використання useCallback, закешовані функції що передаються в інші компоненти як props =========
  // ================================================================================================


  

  const [dataListComics, setDataListComics] = useState<Comics[]>([
    { id: 1, img: "image/UW.png", name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB", price: 9.99 },
    { id: 2, img: "image/x-men.png", name: "X-Men: Days of Future Past", price: 0 },
    { id: 3, img: "image/UW.png", name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB ", price: 9.99 },
    { id: 4, img: "image/x-men.png", name: "X-Men: Days of Future Past", price: 0 },
    { id: 5, img: "image/UW.png", name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB ", price: 9.99 },
    { id: 6, img: "image/x-men.png", name: "X-Men: Days of Future Past", price: 0 },
    { id: 7, img: "image/UW.png", name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB", price: 9.99 },
    { id: 8, img: "image/x-men.png", name: "X-Men: Days of Future Past", price: 0 },
  ])

  return (
    <div className="App" >
      <div className="limit">
        <Header />
        <main>
          <RandomCharacter />
          <div className="moreCharacter">
            <ListCharacter />
            <InfoCharacter />
          </div>
        </main>
      </div>
    </div>
  );
}
