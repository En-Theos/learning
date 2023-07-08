// Імпорти NPM ===========================================================
import { JSX } from "react/jsx-runtime";
import { useState } from 'react';
// =======================================================================

// Імпорти компонентів ===================================================
import RandomCharacter from '../RandomCharacter/RandomCharacter';
import ListCharacter from '../ListCharacter/ListCharacter';
import InfoCharacter from '../InfoCharacter/InfoCharacter';
import SearchCharacter from "../SearchCharacter/SearchCharacter";
// =======================================================================

// Імпорти інтерфейсів ===================================================
// =======================================================================

// Імпорти стилів ========================================================
// =======================================================================

// Імпорти зображень =====================================================
import bgImage from "../../images/decoration/bgMain.png";
// =======================================================================

export default function CharactersPage():JSX.Element {
  const [idCharacter, setIdCharacter] = useState<number>(-1);

  return (
      <main>
        <RandomCharacter />
        <div className="moreCharacter">
          <ListCharacter setIdCharacter={setIdCharacter}/>
          <div>
            <InfoCharacter idCharacter={idCharacter}/>
            <SearchCharacter/>
          </div>
        </div>
        <div className="bgImage"><img src={bgImage} alt="bg" /></div>
      </main>
  )
}