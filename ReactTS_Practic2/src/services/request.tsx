import { Character, Comic } from "../interfaces/globalIntefaces";

export function onAddDataCharacter({
    btn, offset, charactersData, comicsData, setCharactersData, setComicsData
}: {
    btn: HTMLButtonElement,
    offset: React.MutableRefObject<number>,
    charactersData?: Character[],
    comicsData?: Comic[],
    setCharactersData?: React.Dispatch<React.SetStateAction<Character[] | "load" | "error">>,
    setComicsData?: React.Dispatch<React.SetStateAction<Comic[] | "load" | "error">>
}) {
    const limit = charactersData ? 9 : 8;
    const url = charactersData ? "characters" : "comics";
    offset.current += charactersData ? 9 : 8;

    btn.disabled = true;
    btn.classList.add("btnLoad");
    btn.classList.remove("btnError");

    fetch(`https://gateway.marvel.com:443/v1/public/${url}?limit=${limit}&offset=${offset.current}&apikey=6953019632a49d4f4f7a4c1138ab2248`)
        .then((response) => {
            if (!response.ok || response.status !== 200) {
                btn.disabled = false;
                btn.classList.remove("btnLoad");
                btn.classList.add("btnError");
            } else {
                return response.json();
            }
        }).then((data) => {
            let newDataCharacters: Character[]  = [];
            let newDataComics: Comic[] = [];

            btn.disabled = false;
            btn.classList.remove("btnLoad", "btnError");

            if (charactersData && setCharactersData) {
                newDataCharacters = data.data.results.map((obj: any) => ({ 
                    id: obj.id, 
                    img: `${obj.thumbnail.path}.${obj.thumbnail.extension}`, 
                    name: obj.name 
                }));

                setCharactersData([...charactersData, ...newDataCharacters])
            } else if (comicsData && setComicsData) {
                newDataComics = data.data.results.map((obj: any) => ({
                    id: obj.id,
                    img: obj.thumbnail.path + '.' + obj.thumbnail.extension,
                    title: obj.title,
                    price: obj.prices[0].price ? obj.prices[0].price + "$": obj.prices[0].price
                }))

                setComicsData([...comicsData, ...newDataComics]); 
            }
        }).catch(() => {
            btn.disabled = false;
            btn.classList.remove("btnLoad");
            btn.classList.add("btnError");
        });
}