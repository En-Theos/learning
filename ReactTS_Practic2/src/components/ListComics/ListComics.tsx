// Імпорти NPM ===========================================================
import { ReactNode, useEffect, useState, useRef } from "react";
import { JSX } from "react/jsx-runtime";
import { Link } from "react-router-dom";
// =======================================================================

// Імпорти компонентів ===================================================
import LoadListComics from "../LoadBlocks/LoadListComics/LoadListComics";
import ErrorListComics from "../ErrorBlocks/ErrorListComics/ErrorListComics";
// =======================================================================

// Імпорти інтерфейсів ===================================================
import { Comic } from "../../interfaces/globalIntefaces";
// =======================================================================

// Імпорти стилів=========================================================
import "./listComics.scss";
// =======================================================================

// Імпорти зображень =====================================================
import loadBtn from "../../images/buttons/loading.gif";
// =======================================================================

// Імпорти хуків =========================================================
import { useMarvelAPI } from "../../hooks";
// =======================================================================

export default function ListComics(): JSX.Element {
    // Використання useState, дані при зміні яких має змінюватись і сам компонент =====================
    const {componentData, getData, addData} = useMarvelAPI<Comic>({id: true, img: true, title: true, price: true});
    // ================================================================================================

    // Використання useRef (дані), дані що мають наскрізне збереження =================================
    const offset = useRef(10);
    // ================================================================================================

    // Використання useRef (елементи), посилання на елементи DOM структурі ============================
    const btn = useRef<HTMLButtonElement>(null);
    // ================================================================================================

    // Використання useEffect, дії що потрібно виконувати: ============================================
    // При першій загрузці компонента 
    useEffect(() => {
        getData(`https://gateway.marvel.com:443/v1/public/comics?limit=8&offset=${offset.current}&apikey=6953019632a49d4f4f7a4c1138ab2248` );
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
            for (let i = 0; i < 8; i++) {
                card.push((
                    <article key={i} className="card">
                        {
                            componentData === "load" ? <LoadListComics /> : <ErrorListComics />
                        }
                    </article>
                ));
            }
            break;
        default:
            card = componentData.map<ReactNode>(({id, img, title, price}) => {
                return (
                    <article key={id} className="card anim">
                        <Link to={`${id}`}>
                            <div className="image">
                                <img src={img} alt={title} />
                            </div>
                            <div className="text">
                                <h3>{title}</h3>
                                <p>{price ? price : "NOT AVAILABLE"}</p>
                            </div>
                        </Link>
                    </article>
                )
            });
            break;
    }

    return (
        <section className="listComics">
            <div className="cards">
                {card}
            </div>
            <button ref={btn} onClick={() => {
                if (typeof componentData === "object" && btn.current) {
                    offset.current += 8;
                    addData(btn.current, `https://gateway.marvel.com:443/v1/public/comics?limit=8&offset=${offset.current}&apikey=6953019632a49d4f4f7a4c1138ab2248`)
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