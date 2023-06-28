// Імпорти NPM ===========================================================
import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
import LoadListCharacter from "../LoadBlocks/LoadListCharacter/LoadListCharacter";
import ErrorListCharacter from "../ErrorBlocks/ErrorListCharacter/ErrorListCharacter";
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
    let card: ReactNode[] = [];

    switch (dataListCharacter) {
        case "load":
        case "error":
            for (let i = 0; i < 9; i++) {
                card.push((
                    <article key={i} className="card">
                        {
                            dataListCharacter === "load" ? <LoadListCharacter/> : <ErrorListCharacter/>
                        }
                    </article>
                ));
            }
            break;
        default:
            card = dataListCharacter.map<ReactNode>(({id, img, name}) => {
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
        
            break;
    }
    
    return (
        <section className="listCharacter">
            <div className="cards">
                {card}
            </div>
            <button>LOAD MORE</button>
        </section>
    );
}