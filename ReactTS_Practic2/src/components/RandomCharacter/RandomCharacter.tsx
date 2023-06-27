// Імпорти NPM ===========================================================
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
// =======================================================================

// Імпорти інтерфейсів ===================================================
// =======================================================================

// Імпорти стилів=========================================================
import "./randomCharacter.scss";
// =======================================================================

// Імпорти зображень =====================================================
import plug from '../../images/randomCharacter/plug.png';
// =======================================================================

export default function RandomCharacter(): JSX.Element {
    return (
        <section className="randomCharacter">
            <article className="infoCharacter">
                <div className="img" >
                    <img src={plug} alt="character" />
                </div>
                <div className="info">
                    <h2 className="name">THOR</h2>
                    <p className="description">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</p>
                    <div className="btn">
                        <button className="homepage">HOMEPAGE</button>
                        <button className="wiki">WIKI</button>
                    </div>
                </div>
            </article>
            <article className="infoEvent">
                <p className="text">
                    <span>
                        Random character for today! <br />
                        Do you want to get to know him better?
                    </span>
                    <span>
                        Or choose another one
                    </span>
                </p>
                <button>TRY IT</button>
            </article>
        </section>
    );
}