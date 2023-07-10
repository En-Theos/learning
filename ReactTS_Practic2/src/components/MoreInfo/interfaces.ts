export default interface IMoreInfoProps {
    url: "comics" | "characters" | string,
    data: {
        id?: boolean, img?: boolean,
        title?: boolean, name?: boolean,
        price?: boolean, description?: boolean,
        language?: boolean, pages?: boolean,
        homepage?: boolean, wiki?: boolean,
        comics?: boolean
    }
}