// Імпорти NPM ===========================================================
import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
// =======================================================================

// Імпорти інтерфейсів ===================================================
import IListComicsProps from "./interfaces"
// =======================================================================

// Імпорти стилів=========================================================
import "./listComics.scss";
// =======================================================================

// Імпорти зображень =====================================================
// =======================================================================

export default function ListComics({dataListComics}: IListComicsProps): JSX.Element {
    const card: ReactNode[] = dataListComics.map<ReactNode>(({id, img, name, price}) => {
        return (
            <article key={id} className="card">
                <div className="image">
                    <img src={img} alt={name} />
                </div>
                <div className="text">
                    <h3>{name}</h3>
                    <p>{price ? price : "NOT AVAILABLE"}</p>
                </div>
            </article>
        )
    });

    return (
        <section className="listComics">
            <div className="cards">
                {card}
            </div>
            <button>LOAD MORE</button>
        </section>
    );
}