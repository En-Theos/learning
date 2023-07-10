import { Data } from "../../interfaces/globalIntefaces"

export default interface IListProps {
    type: "characters" | "comics" | string,
    data: Data,
    offset: number,
    limit: number,
    mainClass: string
    children: (obj: any) => JSX.Element
}