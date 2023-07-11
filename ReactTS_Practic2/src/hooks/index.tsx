import { useState } from "react";
import { Data } from "../interfaces/globalIntefaces";

export function useMarvelAPI<T>(
    {
        id, img,
        title, name,
        price, description,
        language, pages,
        homepage, wiki,
        comics
    }: Data
): {
    componentData: "load" | "error" | Array<T>;
    getData: (url: string) => void;
    addData: (btn: HTMLButtonElement, url: string) => void
} {
    const [componentData, setComponentData] = useState<Array<T> | "load" | "error">("load");

    function getData(url: string) {
        setComponentData("load");

        fetch(url)
            .then((response) => {
                if (!response.ok && response.status !== 200) {
                    setComponentData("error");
                } else {
                    return response.json();
                }
            }).then((data) => {
                setComponentData(data.data.results.map(filterData))
            }).catch(() => {
                setComponentData("error");
            });
    }

    function addData(btn : HTMLButtonElement, url: string): void {
        btn.disabled = true;
        btn.classList.add("btnLoad");
        btn.classList.remove("btnError");

        fetch(url)
            .then((response) => {
                if (!response.ok || response.status !== 200) {
                    btn.disabled = false;
                    btn.classList.remove("btnLoad");
                    btn.classList.add("btnError");
                } else { 
                    return response.json();
                }
            }).then((data) => {
                btn.disabled = false;
                btn.classList.remove("btnLoad", "btnError");

                if (Array.isArray(componentData)) {
                    setComponentData([...componentData, ...data.data.results.map(filterData)])
                }
            }).catch(() => {
                btn.disabled = false;
                btn.classList.remove("btnLoad");
                btn.classList.add("btnError");
            });
    }

    const filterData = (obj: any) => ({
        id: id ? obj.id : null,
        img: img ? obj.thumbnail.path + '.' + obj.thumbnail.extension : null,
        title: title ? obj.title : null,
        name: name ? obj.name : null,
        price: price ? obj.prices[0].price ? obj.prices[0].price + "$" : obj.prices[0].price : null,
        description: description ? obj.description ? obj.description : "No description found" : null,
        language: language ? obj.textObjects[0].language : null,
        pages: pages ? obj.pageCount : null,
        homepage: homepage ? obj.urls[0].url : null,
        wiki: wiki ? obj.urls[1].url : null,
        comics: comics ? obj.comics.items.map((obj: any) => obj.name) : null,
    })

    return { componentData, getData, addData };
}