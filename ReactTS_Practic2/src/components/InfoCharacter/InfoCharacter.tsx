// Імпорти NPM ===========================================================
import { useEffect, useState } from "react";
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
import LoadInfoCharacter from "../LoadBlocks/LoadInfoCharacter/LoadInfoCharacter";
import ErrorInfoCharacter from "../ErrorBlocks/ErrorInfoCharacter/ErrorInfoCharacter";
// =======================================================================

// Імпорти інтерфейсів ===================================================
import IInfoCharacterProps from "./interfaces";
import { ExpandedCharacter } from "../../interfaces/globalIntefaces";
// =======================================================================

// Імпорти стилів=========================================================
import "./infoCharacter.scss";
// =======================================================================

// Імпорти зображень =====================================================
// =======================================================================

export default function InfoCharacter({idCharacter}: IInfoCharacterProps): JSX.Element {
    // Використання useState, дані при зміні яких має змінюватись і сам компонент =====================
    const [componentData, setComponentData] = useState<ExpandedCharacter | "load" | "error">("load");
    // ================================================================================================

    // Використання useRef (дані), дані що мають наскрізне збереження =================================
    // ================================================================================================

    // Використання useRef (елементи), посилання на елементи DOM структурі ============================
    // ================================================================================================

    // Використання useEffect, дії що потрібно виконувати: ============================================
    // При першій загрузці компонента 

    // При зміні якогось state або props
    useEffect(() => {
        setComponentData("load");

        if (idCharacter !== -1) {
            fetch(`https://gateway.marvel.com:443/v1/public/characters/${idCharacter}?apikey=6953019632a49d4f4f7a4c1138ab2248`)
            .then((response) => {
                if (!response.ok && response.status !== 200) {
                    setComponentData("error");
                } else {
                    return response.json();
                }
            }).then((data) => {
                const obj = data.data.results[0];

                setComponentData({
                    id: obj.id,
                    img: obj.thumbnail.path + '.' + obj.thumbnail.extension,
                    name: obj.name,
                    description: obj.description ? obj.description : "This character has no description",
                    comics: obj.comics.items.map((obj: any) => obj.name),
                    homepage: obj.urls[0].url,
                    wiki: obj.urls[1].url
                });
            }).catch(() => {
                setComponentData("error");
            });
        }
    }, [idCharacter]);
    // При видалені компонента із сторінки

    // ================================================================================================
    // Використання useMemo, значення яке потрібно вираховувати: ======================================
    // При першій загрузці компонента 

    // При зміні якогось state або props

    // При видалені компонента із сторінки

    // ================================================================================================

    // Використання useCallback, закешовані функції що передаються в інші компоненти як props =========
    // ================================================================================================

    switch (componentData) {
        case "load":
            return <LoadInfoCharacter/>
        case "error":
            return <ErrorInfoCharacter/>
        default:
            return (
                <aside className="moreInfo">
                    <div className="header">
                        <div className="image">
                            <img src={componentData.img} alt={componentData.name} />
                        </div>
                        <div className="info">
                            <h3 className="name">{componentData.name}</h3>
                            <div className="buttons">
                                <button className="homepage"><a href={componentData.homepage}>HOMEPAGE</a></button>
                                <button className="wiki"><a href={componentData.wiki}>WIKI</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <p>{componentData.description}</p>
                    </div>
                    <div className="comics">
                        <h4>Comics:</h4>
                        <ul>
                            {componentData.comics.map((name: string, i) => {
                                return <li key={i}>{name}</li>
                            })}
                        </ul>
                    </div>
                </aside>
            )
    }
}