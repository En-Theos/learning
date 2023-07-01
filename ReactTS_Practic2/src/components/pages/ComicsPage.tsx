// Імпорти NPM ===========================================================
import { JSX } from "react/jsx-runtime";
import { useState } from 'react';
// =======================================================================

// Імпорти компонентів ===================================================
import MessageComics from "../MessageComics/MessageComics";
import ListComics from "../ListComics/ListComics";
// =======================================================================

// Імпорти інтерфейсів ===================================================
import { Comics } from '../../interfaces/globalIntefaces';
// =======================================================================

// Імпорти стилів ========================================================
// =======================================================================

// Імпорти зображень =====================================================
// =======================================================================

export default function ComicsPage(): JSX.Element {
    const [dataListComics, setDataListComics] = useState<Comics[]>([
        { id: 1, img: "image/UW.png", name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB", price: 9.99 },
        { id: 2, img: "image/x-men.png", name: "X-Men: Days of Future Past", price: 0 },
        { id: 3, img: "image/UW.png", name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB ", price: 9.99 },
        { id: 4, img: "image/x-men.png", name: "X-Men: Days of Future Past", price: 0 },
        { id: 5, img: "image/UW.png", name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB ", price: 9.99 },
        { id: 6, img: "image/x-men.png", name: "X-Men: Days of Future Past", price: 0 },
        { id: 7, img: "image/UW.png", name: "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB", price: 9.99 },
        { id: 8, img: "image/x-men.png", name: "X-Men: Days of Future Past", price: 0 },
      ])

    return (
        <main>
            <MessageComics/>
            <ListComics dataListComics={dataListComics}/>
        </main>
    )
}