// Імпорти NPM ===========================================================
import { ReactNode, useEffect, useRef, useState } from "react";
import { JSX } from "react/jsx-runtime";
import { Transition } from 'react-transition-group';
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

// Імпорти функцій =======================================================
import { onAddDataCharacter } from "../../services/request";
// =======================================================================

export default function ListCharacter({setIdCharacter}: IListCharacter): JSX.Element {
    // Використання useState, дані при зміні яких має змінюватись і сам компонент =====================
    const [componentData, setComponentData] = useState<Character[] | "load" | "error">("load");
    const [IN, setIN] = useState<boolean>(false);
    // ================================================================================================

    // Використання useRef (дані), дані що мають наскрізне збереження =================================
    const offset = useRef(200);
    // ================================================================================================

    // Використання useRef (елементи), посилання на елементи DOM структурі ============================
    const btn = useRef<HTMLButtonElement>(null);
    const nodeRef = useRef(null);
    // ================================================================================================

    // Використання useEffect, дії що потрібно виконувати: ============================================
    // При першій загрузці компонента 
    useEffect(() => {
        fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=${offset.current}&apikey=6953019632a49d4f4f7a4c1138ab2248`)
            .then((response) => {
                if (!response.ok || response.status !== 200) {
                    setComponentData("error");
                } else {
                    return response.json();
                }
            }).then(data => {
                const newdata: Character[] = data.data.results.map((obj: any) => {
                    return { id: obj.id, img: `${obj.thumbnail.path}.${obj.thumbnail.extension}`, name: obj.name }
                });
                setComponentData(newdata);
            }).catch(() => {
                setComponentData("error");
            });
    }, []);
    // При зміні якогось state або props
    useEffect(() => {
       if (typeof componentData === 'object') {
            setIN(true);
       }
    }, [componentData]);
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

    const defaultStyle: any = {
        transition: `transform 400 ms ease-in-out`,
        transform: 'scale(0.5)'
    }

    const transitionStyles: any = {
        entering: { transform: 'scale(1)' },
        entered:  { transform: 'scale(1)' },
        exiting:  { transform: 'scale(1)' },
        exited:  { transform: 'scale(0.5)' },
    };
    
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
                    <Transition nodeRef={nodeRef} in={IN} timeout={{
                        appear: 300,
                        enter: 300,
                        exit: 50000000,
                       }} key={id} mountOnEnter>
                        {state => (
                                <article ref={nodeRef} className="card" onClick={() => setIdCharacter(id)} style={{
                                    ...defaultStyle,
                                    ...transitionStyles[state]
                                  }} >
                                    <div className="image">
                                        <img src={img} alt={name} />
                                    </div>
                                    <div className="text">
                                        <h3>{name}</h3>
                                    </div>
                                </article>
                            )
                        }
                    </Transition>
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
                    setIN(false);
                    onAddDataCharacter({
                        btn: btn.current, 
                        offset: offset, 
                        charactersData: componentData, 
                        setCharactersData: setComponentData
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