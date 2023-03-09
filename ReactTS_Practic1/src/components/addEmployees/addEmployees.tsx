import { useState } from "react";

import { IAddEmployeesProps } from "./interfaces";

import "./addEmployees.scss";

export default function AddEmployees({addEmployees}: IAddEmployeesProps): JSX.Element {
    const [name, setName] = useState<string>('');
    const [salary, setSalary] = useState<number | ''>('');

    function onPushEmployees(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (name.trim() !== '' && typeof salary === "number") {
            addEmployees({name, salary});
        }
    }

    function onChangeName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function onChangeSalary(event: React.ChangeEvent<HTMLInputElement>) {
        setSalary(+event.target.value);
    }

    return (
        <div className="app-add-form">
            <h3>Додайте нового працівника</h3>
            <form
                className="add-form d-flex"
                onSubmit={onPushEmployees}>
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Як його звати?"
                    value={name} 
                    onChange={onChangeName}/>
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?"
                    value={salary}
                    onChange={onChangeSalary}/>
                <button type="submit"
                    className="btn btn-outline-light">Додати</button>
            </form>
        </div>
    );
}