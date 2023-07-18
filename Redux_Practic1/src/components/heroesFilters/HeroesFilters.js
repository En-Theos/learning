import { useDispatch, useSelector } from 'react-redux';
import classNames from "classnames"
import { activeFilterChanget, selectAll } from '../../slices/filters';

const HeroesFilters = () => {
    const filters = useSelector(selectAll);
    const activeFilter = useSelector(state => state.filters.activeFilter);

    const dispatch = useDispatch();

    const classes = (type) => {
        return ["btn", {
            "btn-outline-dark": type === "all",
            "btn-danger": type === "fire",
            "btn-primary": type === "water",
            "btn-success": type === "wind",
            "btn-secondary": type === "earth",
            "active": activeFilter === type
        }];
    };

    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Відфільтруйте героїв по стихіях</p>
                <div className="btn-group">
                    {
                        filters.map((item, i) => {
                            return <button key={i} className={classNames(classes(item[0]))}
                            onClick={() => dispatch(activeFilterChanget(item[0]))}>
                                {item[1]}</button>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;