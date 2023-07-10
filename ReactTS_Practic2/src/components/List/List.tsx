// Імпорти NPM ===========================================================
import { ReactNode, useEffect, useRef } from "react";
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
import LoadListComics from "../LoadBlocks/LoadListComics/LoadListComics";
import LoadListCharacter from "../LoadBlocks/LoadListCharacter/LoadListCharacter";
import ErrorList from "../ErrorBlocks/ErrorList/ErrorList";
// =======================================================================

// Імпорти інтерфейсів ===================================================
import IListProps from "./interfaces";
// =======================================================================

// Імпорти стилів=========================================================
// =======================================================================

// Імпорти зображень =====================================================
import loadBtn from "../../images/buttons/loading.gif";
// =======================================================================

// Імпорти хуків =========================================================
import { useMarvelAPI } from "../../hooks";
// =======================================================================

export default function List<T>({type, mainClass, data, offset, limit, children}: IListProps): JSX.Element {
    // Використання useState, дані при зміні яких має змінюватись і сам компонент =====================
    const {componentData, getData, addData} = useMarvelAPI<T>(data);
    // ================================================================================================

    // Використання useRef (дані), дані що мають наскрізне збереження =================================
    const offsetRef = useRef(offset);
    // ================================================================================================

    // Використання useRef (елементи), посилання на елементи DOM структурі ============================
    const btn = useRef<HTMLButtonElement>(null);
    // ================================================================================================

    // Використання useEffect, дії що потрібно виконувати: ============================================
    // При першій загрузці компонента 
    useEffect(() => {
        getData(`https://gateway.marvel.com:443/v1/public/${type}?limit=${limit}&offset=${offsetRef.current}&apikey=6953019632a49d4f4f7a4c1138ab2248`);
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
    const loadBlock: ReactNode = type === "characters" ? <LoadListCharacter /> : <LoadListComics/>

    switch (componentData) {
        case "load":
        case "error":
            for (let i = 0; i < limit; i++) {
                card.push((
                    <article key={i} className="card">
                        {
                            componentData === "load" ? loadBlock : <ErrorList />
                        }
                    </article>
                ));
            }
            break;
        default:
            card = componentData.map<ReactNode>((obj) => {
                return children(obj);
            });
            break;
    }

    return (
        <section className={mainClass}>
            <div className="cards">
                {card}
            </div>
            <button ref={btn} onClick={() => {
                if (typeof componentData === "object" && btn.current) {
                    offsetRef.current += limit;
                    addData(btn.current, `https://gateway.marvel.com:443/v1/public/${type}?limit=${limit}&offset=${offsetRef.current}&apikey=6953019632a49d4f4f7a4c1138ab2248`)
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