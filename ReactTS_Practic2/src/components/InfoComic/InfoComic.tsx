// Імпорти NPM ===========================================================
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
import { Page404 } from "../pages";
// =======================================================================

// Імпорти інтерфейсів ===================================================
import { Comic } from "../../interfaces/globalIntefaces";
// =======================================================================

// Імпорти стилів=========================================================
import "./infoComic.scss";
// =======================================================================

// Імпорти зображень =====================================================
import loadImage from "../../images/buttons/loading.gif"
// =======================================================================

export default function InfoComic():JSX.Element {
    const { idComic } = useParams();

    // Використання useState, дані при зміні яких має змінюватись і сам компонент =====================
    const [componentData, setComponentData] = useState<Comic | "load" | "error">("load");
    // ================================================================================================

    // Використання useRef (дані), дані що мають наскрізне збереження =================================
    // ================================================================================================

    // Використання useRef (елементи), посилання на елементи DOM структурі ============================
    // ================================================================================================

    // Використання useEffect, дії що потрібно виконувати: ============================================
    // При першій загрузці компонента 

    // При зміні якогось state або props
    useEffect(() => {
            fetch(`https://gateway.marvel.com:443/v1/public/comics/${idComic}?apikey=6953019632a49d4f4f7a4c1138ab2248`)
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
                    title: obj.title,
                    description: obj.description ? obj.description : "This comic has no description",
                    price: obj.prices[0].price,
                    language: obj.textObjects[0].language,
                    pages: obj.pageCount
                });
            }).catch(() => {
                setComponentData("error");
            });
    }, [idComic]);
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
            return (
                <div className="loadComic">
                    <img src={loadImage} alt="loading" />
                </div>
            )
        case "error":
            return (
                <Page404/>
            )
        default:
            return (
                <div className="comics">
                    <div className="image">
                        <img src={componentData.img} alt={componentData.title} />
                    </div>
                    <div className="info">
                        <h3>{componentData.title}</h3>
                        <p className="description">{componentData.description}</p>
                        <p className="pages">{componentData.pages} pages</p>
                        <p className="language">Language: {componentData.language}</p>
                        <p className="price">{componentData.price}$</p>
                    </div>
                    <div className="link">
                        <Link to={"/comics"}>Back to all</Link>
                    </div>
                </div>
            )   
    }
}