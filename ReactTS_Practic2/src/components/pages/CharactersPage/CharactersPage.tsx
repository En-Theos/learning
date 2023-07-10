// Імпорти NPM ===========================================================
import { JSX } from "react/jsx-runtime";
import { useState } from 'react';
// =======================================================================

// Імпорти компонентів ===================================================
import RandomCharacter from '../../RandomCharacter/RandomCharacter';
import List from '../../List/List';
import AdditionalInfo from '../../AdditionalInfo/AdditionalInfo';
import SearchCharacter from "../../SearchCharacter/SearchCharacter";
// =======================================================================

// Імпорти інтерфейсів ===================================================
import { Character } from "../../../interfaces/globalIntefaces";
// =======================================================================

// Імпорти стилів ========================================================
import "./characterList.scss";
// =======================================================================

// Імпорти зображень =====================================================
import bgImage from "../../../images/decoration/bgMain.png";
// =======================================================================

export default function CharactersPage(): JSX.Element {
  const [idCharacter, setIdCharacter] = useState<number>(-1);

  return (
    <main>
      <RandomCharacter />
      <div className="moreCharacter">
        <List<Character> mainClass={"listCharacter"} type={"characters"} data={{ id: true, img: true, name: true }} offset={200} limit={9}>
          {
            ({ id, img, name }) => (
              <article key={id} className="card bg anim" onClick={() => setIdCharacter(id)}  >
                <div className="image">
                  <img src={img} alt={name} />
                </div>
                <div className="text">
                  <h3>{name}</h3>
                </div>
              </article>
            )
          }
        </List>
        <div>
          <AdditionalInfo idCharacter={idCharacter} />
          <SearchCharacter />
        </div>
      </div>
      <div className="bgImage"><img src={bgImage} alt="bg" /></div>
    </main>
  )
}