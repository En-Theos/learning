import {IInfoProps} from "./interfaces"

import "./info.scss";

export default function Info({data}: IInfoProps): JSX.Element {
    const countEmployees = data.length;
    const countEmployeesIncrease = data.filter((obj) => obj.increase).length;

    return (
        <div className="app-info">
            <h1>Бухгалтерський облік працівників у компанії n</h1>
            <h2>Загальна кількість працівників: {countEmployees}</h2>
            <h2>Премію отримає: {countEmployeesIncrease}</h2>
        </div>
    );
}