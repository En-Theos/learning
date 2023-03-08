import { ReactNode, useState } from "react";
import { IListEmployeesProps, IItemProps } from "./interfaces";

import "./listEmployees.scss";

export default function ListEmployees({data}: IListEmployeesProps): JSX.Element {
    const items: ReactNode[] = data.map<ReactNode>(({id, name, salary, increase}) => {
        return <Item key={id} name={name} salary={salary} increase={increase}/>
    });

    return (
        <ul className="app-list list-group">
            {items}
        </ul>
    );
}

function Item({name, salary}: IItemProps): JSX.Element {
    const [increase, setIncrease] = useState<boolean>(false);
    const [like, setlike] = useState<boolean>(false);

    function onClickCookie(): void {
        setIncrease(!increase);
    } 

    function onClickLike(): void {
        setlike(!like);
    }

    return (
        <li className={"list-group-item d-flex justify-content-between" + (increase ? " increase" : "") + (like ? " like" : "")}>
            <span className="list-group-item-label" 
                onClick={onClickLike}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-cookie btn-sm "
                    onClick={onClickCookie}>
                    <i className="fas fa-cookie" ></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star" ></i>
            </div>
        </li>
    );
}