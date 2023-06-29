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
// =======================================================================

// Імпорти стилів=========================================================
import "./listCharacter.scss";
// =======================================================================

// Імпорти зображень =====================================================
import loadBtn from "../../images/buttons/loading.gif";
// =======================================================================

export default function ListCharacter(): JSX.Element {
    // Використання useState, дані при зміні яких має змінюватись і сам компонент =====================
    const [dataListCharacter, setDataListCharacter] = useState<Character[] | "load" | "error">("load");
    // ================================================================================================

    // Використання useRef (дані), дані що мають наскрізне збереження =================================
    const offset = useRef(200);
    // ================================================================================================

    // Використання useRef (елементи), посилання на елементи DOM структурі ============================
    // ================================================================================================

    // Використання useEffect, дії що потрібно виконувати: ============================================
    // При першій загрузці компонента 
    useEffect(() => {
        fetch("https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=200&apikey=6953019632a49d4f4f7a4c1138ab2248")
            .then((response) => {
                if (!response.ok || response.status !== 200) {
                    setDataListCharacter("error");
                } else {
                    return response.json();
                }
            }).then(data => {
                const newdata: Character[] = data.data.results.map((obj: any) => {
                    return { id: obj.id, img: `${obj.thumbnail.path}.${obj.thumbnail.extension}`, name: obj.name }
                });
                setDataListCharacter(newdata);
            }).catch(() => {
                setDataListCharacter("error");
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
    function addDataCharacter(event: any) {
        let statusButton = 'load';
        event.currentTarget.disabled = true;
        event.currentTarget.classList.add("btnLoad");

        if (typeof dataListCharacter === "object") {
            offset.current += 9;
            // eslint-disable-next-line no-sequences

            fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=${offset.current}&apikey=6953019632a49d4f4f7a4c1138ab2248`)
                .then((response) => {
                    if (!response.ok || response.status !== 200) {
                        statusButton = "error";
                    } else {
                        return response.json();
                    }
                }).then((data) => {
                    const newdata: Character[] = data.data.results.map((obj: any) => {
                        return { id: obj.id, img: `${obj.thumbnail.path}.${obj.thumbnail.extension}`, name: obj.name }
                    });

                    
                    setDataListCharacter([...dataListCharacter, ...newdata]);
                }).catch(() => {
                    statusButton = "error";
                });
        } else if (dataListCharacter === "load") {
            event.target.disabled = true;
            event.target.textContent = "LOADING";
            event.target.classList.add("btnLoad");
        } else {
            statusButton = "error";
        }
    }

    let card: ReactNode[] = [];

    switch (dataListCharacter) {
        case "load":
        case "error":
            for (let i = 0; i < 9; i++) {
                card.push((
                    <article key={i} className="card">
                        {
                            dataListCharacter === "load" ? <LoadListCharacter /> : <ErrorListCharacter />
                        }
                    </article>
                ));
            }
            break;
        default:
            card = dataListCharacter.map<ReactNode>(({ id, img, name }) => {
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
            <button onClick={addDataCharacter}>
                <span className="default">LOAD MORE</span>
                <span className="load">LOADING </span>
                <span className="error">ERROR </span>
                <img src={loadBtn} alt="loading" />
            </button>
        </section>
    );
}