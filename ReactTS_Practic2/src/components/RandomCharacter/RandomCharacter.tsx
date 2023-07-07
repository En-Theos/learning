// Імпорти NPM ===========================================================
import { JSX } from "react/jsx-runtime";
import { useEffect } from "react";
// =======================================================================

// Імпорти компонентів ===================================================
import LoadRandomCharacter from "../LoadBlocks/LoadRandomCharacter/LoadRandomCharacter";
import ErrorRandomCharacter from "../ErrorBlocks/ErrorRandomCaracter/ErrorRandomCaracter";
// =======================================================================

// Імпорти інтерфейсів ===================================================
import { Character } from "../../interfaces/globalIntefaces";
// =======================================================================

// Імпорти стилів=========================================================
import "./randomCharacter.scss";
// =======================================================================

// Імпорти зображень =====================================================
// =======================================================================

// Імпорти хуків =========================================================
import { useMarvelAPI } from "../../hooks";
// =======================================================================

export default function RandomCharacter(): JSX.Element {
    // Використання useState, дані при зміні яких має змінюватись і сам компонент =====================
    const {componentData, getData} = useMarvelAPI<Character>(
        {id: true, img: true, name: true, description: true, homepage: true, wiki: true}
    );
    // ================================================================================================

    // Використання useRef (дані), дані що мають наскрізне збереження =================================
    // ================================================================================================

    // Використання useRef (елементи), посилання на елементи DOM структурі ============================
    // ================================================================================================

    // Використання useEffect, дії що потрібно виконувати: ============================================
    // При першій загрузці компонента 
    useEffect(() => {
        request();
    }, []);
    // При зміні якогось state або props

    // При видалені компонента із сторінки

    // ================================================================================================
    // Використання useMemo, значення яке потрібно вираховувати: ======================================
    // При першій загрузці компонента 

    // При зміні якогось state або props

    // При видалені компонента із сторінки

    // ================================================================================================

    // Використання useCallback, закешовані функції що передаються в інші компоненти як props =========
    // ================================================================================================
                
    function request() {
        const id = Math.floor(Math.random() * (1010789 - 1009146) + 1009146)

        getData(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=6953019632a49d4f4f7a4c1138ab2248`)
    }

    let randomCharacter: JSX.Element = <div></div>;

    switch (componentData) {
        case "load":
            randomCharacter = <LoadRandomCharacter/>
            break;
        case "error":
            randomCharacter = <ErrorRandomCharacter/>
            break;
        default:
            randomCharacter = (
                <>
                    <div className="img" >
                        <img src={componentData[0].img} alt={componentData[0].name} />
                    </div>
                    <div className="info">
                        <h2 className="name">{componentData[0].name}</h2>
                        <p className="description">{componentData[0].description}</p>
                        <div className="btn">
                            <button className="homepage"><a href={componentData[0].homepage}>HOMEPAGE</a></button>
                            <button className="wiki"><a href={componentData[0].wiki}>WIKI</a></button>
                        </div>
                    </div>
                </>
            )
            break;
    }

    return (
        <section className="randomCharacter">
            <article className="infoCharacter">
                {randomCharacter}
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
                <button onClick={request}>TRY IT</button>
            </article>
        </section>
    );
}