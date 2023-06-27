// Імпорти NPM ===========================================================
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
// =======================================================================

// Імпорти інтерфейсів ===================================================
// =======================================================================

// Імпорти стилів=========================================================
import "./infoComics.scss";
// =======================================================================

// Імпорти зображень =====================================================
// =======================================================================

export default function InfoComics():JSX.Element {
    return (
        <div className="comics">
            <div className="image">
                <img src="image/x-men.png" alt="" />
            </div>
            <div className="info">
                <h3>X-Men: Days of Future Past</h3>
                <p className="description">Re-live the legendary first journey into the dystopian future of 2013 - where Sentinels stalk the Earth, and the X-Men are humanity's only hope...until they die! Also featuring the first appearance of Alpha Flight, the return of the Wendigo, the history of the X-Men from Cyclops himself...and a demon for Christmas!?</p>
                <p className="pages">144 pages</p>
                <p className="language">Language: en-us</p>
                <p className="price">9.99$</p>
            </div>
            <div className="link">
                <span className="back">Back to all</span>
            </div>
        </div>
    )    
}