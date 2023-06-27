// Імпорти NPM ===========================================================
import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
// =======================================================================

// Імпорти інтерфейсів ===================================================
import IListCharacterProps from "./interfaces"
// =======================================================================

// Імпорти стилів=========================================================
import "./listCharacter.scss";
// =======================================================================

// Імпорти зображень =====================================================
// =======================================================================

export default function ListCharacter({dataListCharacter}: IListCharacterProps): JSX.Element {
    const card: ReactNode[] = dataListCharacter.map<ReactNode>(({id, img, name}) => {
        return (
            <article key={id} className="card">
                <div className="image">
                    <img src={img} alt={name} />
                </div>
                <div className="text">
                    <h3>{name}</h3>
                </div>
            </article>
        )
    });

    return (
        <section className="listCharacter">
            <div className="cards">
                {card}
            </div>
            <button>LOAD MORE</button>
        </section>
    );
}