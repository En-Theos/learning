export interface Character {
    id: number,
    img: string,
    name: string,
    description?: string,
    homepage?: string,
    wiki?: string
}

export interface ExpandedCharacter {
    id: number,
    img: string,
    name: string,
    description: string,
    comics: string[],
    homepage: string,
    wiki: string
}

export interface Comic {
    id: number,
    img: string,
    title: string,
    price: number,
    description?: string,
    pages?: string,
    language?: string
}