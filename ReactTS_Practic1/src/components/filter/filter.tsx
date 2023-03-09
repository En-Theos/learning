import "./filter.scss";

export default function Filter(): JSX.Element {
    return (
        <div className="search-panel">
            <input type="text"
                className="form-control search-input"
                placeholder="Знайти працівника"/>

            <div className="btn-group">
                <button type="button"
                        className="btn btn-light">
                        Всі працівники
                </button>
                <button type="button"
                        className="btn btn-outline-light">
                        На повишення
                </button>
                <button type="button"
                        className="btn btn-outline-light">
                        З/П більша 1000$
                </button>
            </div>
        </div>
    );
}