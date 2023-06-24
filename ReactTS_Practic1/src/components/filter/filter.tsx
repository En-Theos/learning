import { ReactNode, useState } from "react";

import {IFilterProps} from "./interfaces"

import "./filter.scss";

export default function Filter({setFilterParam, filterParam}: IFilterProps): JSX.Element {
    const [search, setSearch] = useState<string>('');

    const btn: {key: number, name: string, text: string}[] = [
        {key: 1, name: "all", text: "Всі працівники"},
        {key: 2, name: "promotion", text: "На повишення"},
        {key: 3, name: "salary", text: "З/П більша 1000$"},
    ];

    const item: ReactNode[] = btn.map(({key, name, text}) => {
        const clazz: string = "btn " + (filterParam === name ? "btn-light" : "btn-outline-light");

        return (
            <button 
                key={key}        
                type="button"
                className={clazz}
                onClick={() => {
                    setFilterParam(name);
                    setSearch('');
                }}>
                {text}
            </button>
        )
    });

    return (
        <div className="search-panel">
            <input type="text"
                className="form-control search-input"
                placeholder="Знайти працівника"
                value={search}
                onChange={(event) => {
                    setFilterParam(event.target.value);
                    setSearch(event.target.value);
                }}/>

            <div className="btn-group">
                {item}
            </div>
        </div>
    );
}