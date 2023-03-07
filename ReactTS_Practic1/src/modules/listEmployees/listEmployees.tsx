import { ReactNode } from "react";
import { IListEmployeesProps, IItemProps } from "./interfaces";

import "./listEmployees.scss";

export default function ListEmployees({data}: IListEmployeesProps): JSX.Element {
    const items: ReactNode[] = data.map<ReactNode>(({name, salary, increase}) => {
        return <Item name={name} salary={salary} increase={increase}/>
    });

    return (
        <ul className="app-list list-group">
            {items}
        </ul>
    );
}

function Item({name, salary, increase}: IItemProps): JSX.Element {
    return (
        <li className={"list-group-item d-flex justify-content-between" + (increase ? " increase" : "")}>
            <span className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );
}