import { ReactNode } from "react";
import IListCharacterBlockProps from "./interfaces"

import "./listCharacterBlock.scss";

export default function ListCharacterBlock({dataListCharacter}: IListCharacterBlockProps): JSX.Element {
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