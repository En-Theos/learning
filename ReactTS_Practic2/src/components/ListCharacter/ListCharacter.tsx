// Імпорти NPM ===========================================================
import { ReactNode, useEffect, useRef, useState } from "react";
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
import LoadListCharacter from "../LoadBlocks/LoadListCharacter/LoadListCharacter";
import ErrorListCharacter from "../ErrorBlocks/ErrorListCharacter/ErrorListCharacter";
// =======================================================================

// Імпорти інтерфейсів ===================================================
import { Character } from "../../interfaces/globalIntefaces";
import IListCharacter from "./interfaces";
// =======================================================================

// Імпорти стилів=========================================================
import "./listCharacter.scss";
// =======================================================================

// Імпорти зображень =====================================================
import loadBtn from "../../images/buttons/loading.gif";
// =======================================================================

// Імпорти хуків =========================================================
import { useMarvelAPI } from "../../hooks";
// =======================================================================

export default function ListCharacter({setIdCharacter}: IListCharacter): JSX.Element {
    // Використання useState, дані при зміні яких має змінюватись і сам компонент =====================
    const {componentData, getData, addData} = useMarvelAPI<Character>(
        {id: true, img: true, name: true}
    );
    // ================================================================================================

    // Використання useRef (дані), дані що мають наскрізне збереження =================================
    const offset = useRef(200);
    // ================================================================================================

    // Використання useRef (елементи), посилання на елементи DOM структурі ============================
    const btn = useRef<HTMLButtonElement>(null);
    // ================================================================================================

    // Використання useEffect, дії що потрібно виконувати: ============================================
    // При першій загрузці компонента 
    useEffect(() => {
        getData(`https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=${offset.current}&apikey=6953019632a49d4f4f7a4c1138ab2248`);
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
    let card: ReactNode[] = [];

    switch (componentData) {
        case "load":
        case "error":
            for (let i = 0; i < 9; i++) {
                card.push((
                    <article key={i} className="card">
                        {
                            componentData === "load" ? <LoadListCharacter /> : <ErrorListCharacter />
                        }
                    </article>
                ));
            }
            break;
        default:
            card = componentData.map<ReactNode>(({ id, img, name }) => {
                return (
                    <article key={id} className="card anim" onClick={() => setIdCharacter(id)}  >
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
            <button ref={btn} onClick={() => {
                if (typeof componentData === "object" && btn.current) {
                    offset.current += 9;
                    addData(btn.current, `https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=${offset.current}&apikey=6953019632a49d4f4f7a4c1138ab2248`)
                }
            }}>
                <span className="default">LOAD MORE</span>
                <span className="load">LOADING </span>
                <span className="error">ERROR </span>
                <img src={loadBtn} alt="loading" />
            </button>
        </section>
    );
}