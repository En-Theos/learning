// Імпорти NPM ===========================================================
import { Link } from "react-router-dom";
import { JSX } from "react/jsx-runtime";
// =======================================================================

// Імпорти компонентів ===================================================
import MessageComics from "../../MessageComics/MessageComics";
import List from "../../List/List";
// =======================================================================

// Імпорти інтерфейсів ===================================================
import { Comic } from "../../../interfaces/globalIntefaces";
// =======================================================================

// Імпорти стилів ========================================================
import "./comicList.scss"
// =======================================================================

// Імпорти зображень =====================================================
// =======================================================================

export default function ComicsPage(): JSX.Element {
    return (
        <main>
            <MessageComics />
            <List<Comic>
                mainClass={"listComics"}
                type={"comics"}
                data={{ id: true, img: true, title: true, price: true }}
                offset={9}
                limit={8}>
                {
                    ({ id, img, title, price }) => (
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
                }
            </List>
        </main>
    )
}