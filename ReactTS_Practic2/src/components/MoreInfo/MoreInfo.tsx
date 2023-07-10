// Імпорти NPM ===========================================================
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
import { Page404 } from "../pages";
// =======================================================================

// Імпорти інтерфейсів ===================================================
import IMoreInfoProps from "./interfaces";
// =======================================================================

// Імпорти стилів=========================================================
import "./moreInfo.scss";
// =======================================================================

// Імпорти зображень =====================================================
import loadImage from "../../images/buttons/loading.gif"
// =======================================================================

// Імпорти хуків =========================================================
import { useMarvelAPI } from "../../hooks";
// =======================================================================

export default function MoreInfo<T extends object>({url, data}: IMoreInfoProps):JSX.Element {
    const { id } = useParams();

    // Використання useState, дані при зміні яких має змінюватись і сам компонент =====================
    const {componentData, getData} = useMarvelAPI<T>(data);
    // ================================================================================================

    // Використання useRef (дані), дані що мають наскрізне збереження =================================
    // ================================================================================================

    // Використання useRef (елементи), посилання на елементи DOM структурі ============================
    // ================================================================================================

    // Використання useEffect, дії що потрібно виконувати: ============================================
    // При першій загрузці компонента 

    // При зміні якогось state або props
    useEffect(() => {
        getData(`https://gateway.marvel.com:443/v1/public/${url}/${id}?apikey=6953019632a49d4f4f7a4c1138ab2248`);
    }, [id]);
    // При видалені компонента із сторінки

    // ================================================================================================
    // Використання useMemo, значення яке потрібно вираховувати: ======================================
    // При першій загрузці компонента 

    // При зміні якогось state або props

    // При видалені компонента із сторінки

    // ================================================================================================

    // Використання useCallback, закешовані функції що передаються в інші компоненти як props =========
    // ================================================================================================

    function chekProperty(poperty: string) {
        if (typeof componentData === "object") {
            if (poperty in componentData[0]) {
                return `${componentData[0][poperty as keyof T]}`
            }
        }
    }

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
            const h3 = data.name ? <h3>{chekProperty("name")}</h3> : <h3>{chekProperty("title")}</h3>

            const pages = data.pages ? <p className="pages">{chekProperty("pages")} pages</p> : null;
            const language = data.language ? <p className="language">Language: {chekProperty("language")}</p> : null;
            const price = data.price ? <p className="price">{chekProperty("price")}$</p> : null;

            return (
                <div className="comics">
                    <div className="image">
                        <img src={chekProperty("img")} alt={url} />
                    </div>
                    <div className="info">
                        {h3}
                        <p className="description">{chekProperty("description")}</p>
                        {pages}
                        {language}
                        {price}
                    </div>
                    <div className="link">
                        <Link to={url === "characters" ? "/" : "/comics"}>Back to all</Link>
                    </div>
                </div>
            )   
    }
}
