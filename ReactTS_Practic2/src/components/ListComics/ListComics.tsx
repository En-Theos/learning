// Імпорти NPM ===========================================================
import { ReactNode, useEffect, useState, useRef } from "react";
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
import LoadListComics from "../LoadBlocks/LoadListComics/LoadListComics";
import ErrorListComics from "../ErrorBlocks/ErrorListComics/ErrorListComics";
// =======================================================================

// Імпорти інтерфейсів ===================================================
import { Comics } from "../../interfaces/globalIntefaces";
// =======================================================================

// Імпорти стилів=========================================================
import "./listComics.scss";
// =======================================================================

// Імпорти зображень =====================================================
import loadBtn from "../../images/buttons/loading.gif";
// =======================================================================

// Імпорти функцій =======================================================
import { onAddDataCharacter } from "../services/request";
// =======================================================================

export default function ListComics(): JSX.Element {
    // Використання useState, дані при зміні яких має змінюватись і сам компонент =====================
    const [componentData, setComponentData] = useState<Comics[] | "load" | "error">("load");
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
        fetch(`https://gateway.marvel.com:443/v1/public/comics?limit=8&offset=${offset.current}&apikey=6953019632a49d4f4f7a4c1138ab2248`)
        .then((response) => {
            if (!response.ok && response.status !== 200) {
                setComponentData("error");
            } else {
                return response.json();
            }
        }).then((data) => {
            setComponentData(data.data.results.map((obj: any) => ({
                id: obj.id,
                img: obj.thumbnail.path + '.' + obj.thumbnail.extension,
                title: obj.title,
                price: obj.prices[0].price
            })))
        }).catch(() => {
            setComponentData("error");
        });
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
                    <article key={id} className="card">
                        <div className="image">
                            <img src={img} alt={title} />
                        </div>
                        <div className="text">
                            <h3>{title}</h3>
                            <p>{price ? price : "NOT AVAILABLE"}</p>
                        </div>
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
                    onAddDataCharacter({
                        btn: btn.current, 
                        offset: offset, 
                        comicsData: componentData, 
                        setComicsData: setComponentData
                    })
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