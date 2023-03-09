import { IDataEmployee } from "../../interfaces/globalInterfaces";

export interface IListEmployeesProps {
    data: IDataEmployee[], 
    deleteEmployees(id: number): void, 
    changingEmployees(id: number, obj: {increase: boolean} | {like: boolean}): void
}

export interface IItemProps {
    obj: IDataEmployee,
    deleteEmployees(id: number): void, 
    changingEmployees(id: number, obj: {increase: boolean} | {like: boolean}): void
}