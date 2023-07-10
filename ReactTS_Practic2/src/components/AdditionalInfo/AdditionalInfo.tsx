// Імпорти NPM ===========================================================
import { useEffect } from "react";
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
import LoadInfoCharacter from "../LoadBlocks/LoadInfoCharacter/LoadInfoCharacter";
import ErrorInfoCharacter from "../ErrorBlocks/ErrorInfoCharacter/ErrorInfoCharacter";
// =======================================================================

// Імпорти інтерфейсів ===================================================
import IAdditionalInfoProps from "./interfaces";
import { ExpandedCharacter } from "../../interfaces/globalIntefaces";
// =======================================================================

// Імпорти стилів=========================================================
import "./additionalInfo.scss";
// =======================================================================

// Імпорти зображень =====================================================
// =======================================================================

// Імпорти хуків =========================================================
import { useMarvelAPI } from "../../hooks";
// =======================================================================

export default function AdditionalInfo({idCharacter}: IAdditionalInfoProps): JSX.Element {
    // Використання useState, дані при зміні яких має змінюватись і сам компонент =====================
    const {componentData, getData} = useMarvelAPI<ExpandedCharacter>(
        {id: true, img: true, name: true, description: true, comics: true, homepage: true, wiki: true}
    );
    // ================================================================================================

    // Використання useRef (дані), дані що мають наскрізне збереження =================================
    // ================================================================================================

    // Використання useRef (елементи), посилання на елементи DOM структурі ============================
    // ================================================================================================

    // Використання useEffect, дії що потрібно виконувати: ============================================
    // При першій загрузці компонента 

    // При зміні якогось state або props
    useEffect(() => {
        if (idCharacter !== -1) {
            getData(`https://gateway.marvel.com:443/v1/public/characters/${idCharacter}?apikey=6953019632a49d4f4f7a4c1138ab2248`);
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
                <aside className="additionalInfo">
                    <div className="header">
                        <div className="image">
                            <img src={componentData[0].img} alt={componentData[0].name} />
                        </div>
                        <div className="info">
                            <h3 className="name">{componentData[0].name}</h3>
                            <div className="buttons">
                                <button className="homepage"><a href={componentData[0].homepage}>HOMEPAGE</a></button>
                                <button className="wiki"><a href={componentData[0].wiki}>WIKI</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <p>{componentData[0].description}</p>
                    </div>
                    <div className="characterComics">
                        <h4>Comics:</h4>
                        <ul>
                            {componentData[0].comics.map((name: string, i) => {
                                return <li key={i}>{name}</li>
                            })}
                        </ul>
                    </div>
                </aside>
            )
    }
}