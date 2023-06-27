// Імпорти NPM ===========================================================
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
// =======================================================================

// Імпорти інтерфейсів ===================================================
// =======================================================================

// Імпорти стилів=========================================================
import "./messageComics.scss";
// =======================================================================

// Імпорти зображень =====================================================
import avengers from "../../images/messageComics/avengers.png";
import avengersLogo from "../../images/messageComics/Avengers logo.png";
// =======================================================================

export default function MessageComics(): JSX.Element {
    return (
        <aside className="message">
            <div className="avengers">
                <img src={avengers} alt="avengers" />
            </div>
            <div className="text">
                <p>New comics every week! <br /> Stay tuned!</p>
            </div>
            <div className="logo">
                <img src={avengersLogo} alt="avengers logo" />
            </div>
        </aside>
    )
}