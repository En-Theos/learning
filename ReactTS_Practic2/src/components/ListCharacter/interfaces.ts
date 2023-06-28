import { Character } from "../../interfaces/globalIntefaces"

export default interface IListCharacterProps {
    dataListCharacter: Character[] | "load" | "error"
}