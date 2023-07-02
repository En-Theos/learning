// Імпорти NPM ===========================================================
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
// =======================================================================

// Імпорти інтерфейсів ===================================================
// =======================================================================

// Імпорти стилів=========================================================
import "./errorListCharacter.scss";
// =======================================================================

// Імпорти зображень =====================================================
import errorGif from "../image/error.gif";
// =======================================================================

export default function ErrorListCharacter(): JSX.Element {
    return (
        <div className="errorCharacter">
            <img className="errorImg" src={errorGif} alt="error gif" />
        </div>
    )
}