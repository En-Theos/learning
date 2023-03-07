import { IDataEmployee } from "../../interfaces/globalInterfaces";

export interface IListEmployeesProps {
    data: IDataEmployee[]
}

export interface IItemProps {
    name: string,
    salary: number,
    increase: boolean
}