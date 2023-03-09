import { ReactNode } from "react";
import { IListEmployeesProps, IItemProps } from "./interfaces";

import "./listEmployees.scss";

export default function ListEmployees({data, deleteEmployees, changingEmployees}: IListEmployeesProps): JSX.Element {
    const items: ReactNode[] = data.map<ReactNode>((obj) => {
        console.log(obj.id);
        return <Item 
        key={obj.id} 
        obj={obj}
        deleteEmployees={deleteEmployees} 
        changingEmployees={changingEmployees}/>
    });

    return (
        <ul className="app-list list-group">
            {items}
        </ul>
    );
}

function Item({obj, deleteEmployees, changingEmployees}: IItemProps): JSX.Element {
    return (
        <li className={"list-group-item d-flex justify-content-between" + (obj.increase ? " increase" : "") + (obj.like ? " like" : "")}>
            <span className="list-group-item-label" 
                onClick={() => changingEmployees(obj.id, {like: !obj.like})}>{obj.name}</span>
            <input type="text" className="list-group-item-input" defaultValue={obj.salary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={() => changingEmployees(obj.id, {increase: !obj.increase})}>
                    <i className="fas fa-cookie" ></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash" onClick={() => deleteEmployees(obj.id)}></i>
                </button>
                <i className="fas fa-star" ></i>
            </div>
        </li>
    );
}