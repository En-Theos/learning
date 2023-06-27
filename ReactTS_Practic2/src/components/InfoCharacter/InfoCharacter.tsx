// Імпорти NPM ===========================================================
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
// =======================================================================

// Імпорти інтерфейсів ===================================================
// =======================================================================

// Імпорти стилів=========================================================
import "./infoCharacter.scss";
// =======================================================================

// Імпорти зображень =====================================================
// =======================================================================

export default function InfoCharacter(): JSX.Element {
    return (
        <aside className="moreInfo">
            <div className="header">
                <div className="image">
                    <img src="image/loki.png" alt="" />
                </div>
                <div className="info">
                    <h3 className="name">LOKI</h3>
                    <div className="buttons">
                        <button className="homepage">HOMEPAGE</button>
                        <button className="wiki">WIKI</button>
                    </div>
                </div>
            </div>
            <div className="description">
                <p>In Norse mythology, Loki is a god or jötunn (or both). Loki is the son of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki is referred to as the father of Váli in the Prose Edda.</p>
            </div>
            <div className="comics">
                <h4>Comics:</h4>
                <ul>
                    <li>All-Winners Squad: Band of Heroes (2011) #3</li>
                    <li>All-Winners Squad: Band of Heroes (2011) #3</li>
                    <li>All-Winners Squad: Band of Heroes (2011) #3</li>
                    <li>All-Winners Squad: Band of Heroes (2011) #3</li>
                    <li>All-Winners Squad: Band of Heroes (2011) #3</li>
                    <li>All-Winners Squad: Band of Heroes (2011) #3</li>
                    <li>All-Winners Squad: Band of Heroes (2011) #3</li>
                </ul>
            </div>
        </aside>
    )
}