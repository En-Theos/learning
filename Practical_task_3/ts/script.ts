type span = HTMLSpanElement | null;
type div = HTMLDivElement | null;
type form = HTMLFormElement | null;

interface DataCard {
    img: string,
    altimg: string, 
    title: string, 
    descr: string, 
    price: number
}

const parentButtonsTabs: div = document.querySelector(".tabheader__items");
const buttonsTabs: NodeListOf<HTMLDivElement> = document.querySelectorAll(".tabheader__items .tabheader__item");
const tabContents: NodeListOf<HTMLDivElement> = document.querySelectorAll(".tabcontainer .tabcontent");

parentButtonsTabs?.addEventListener("click", (event) => {
    const target: HTMLDivElement = (event.target as HTMLDivElement);

    if (target.classList.contains("tabheader__item") && !target.classList.contains("tabheader__item_active") ) {
        buttonsTabs.forEach((item, i) => {
            item.classList.remove("tabheader__item_active");
            tabContents[i].classList.remove("activeTab");

            if (target === item) {
                item.classList.add("tabheader__item_active");
                tabContents[i].classList.add("activeTab");
            }
        });
    }
});

const daysBox: span = document.querySelector(".timer__block #days");
const hoursBox: span = document.querySelector(".timer__block #hours");
const minutesBox: span = document.querySelector(".timer__block #minutes");
const secondsBox: span = document.querySelector(".timer__block #seconds");

const interval = setInterval(() => {
    const t: number = new Date("2023-01-22").getTime() - new Date().getTime();
    
    const days: number = Math.floor(t / 1000 / 60 / 60 / 24);
    const hours: number = Math.floor(t / 1000 / 60 / 60 % 24);
    const minutes: number = Math.floor(t / 1000 / 60 % 60);
    const seconds: number = Math.floor(t / 1000 % 60);

    if (daysBox && hoursBox && minutesBox && secondsBox && t > 0) {
        daysBox.textContent = days < 10 ? "0" + days : days + "";
        hoursBox.textContent = hours < 10 ? "0" + hours : hours + "";
        minutesBox.textContent = minutes < 10 ? "0" + minutes : minutes + "";
        secondsBox.textContent = seconds < 10 ? "0" + seconds : seconds + "";
    } else {
        clearInterval(interval);
    }
}, 1000);

const modal: div = document.querySelector(".modal");
const btnCloseModal: div = document.querySelector("[data-close]");
const btnsShowModal: NodeListOf<HTMLDivElement> = document.querySelectorAll("[data-modal]");

let timerShowModal: number = setTimeout(() => {if (modal) modal.style.display = "block"}, 300000);

function showModal(): void {
    if (modal) modal.style.display = "block";
    clearTimeout(timerShowModal);
}

function hideModal(): void {
    if (modal) {
        modal.style.display = "none"
        modal.querySelector("p.modal__title")?.remove();
        const form = modal.querySelector("form");
        clearTimeout(timerShowModal);
        
        if (form) {
            form.style.display = "block";
        }
    };
}

btnsShowModal.forEach(button => {
    button.addEventListener("click", () => {
        showModal();
    });
});

btnCloseModal?.addEventListener("click", () => {
    hideModal();
});

modal?.addEventListener("click", (event) => {
    const target: HTMLDivElement = (event.target as HTMLDivElement);

    if (target.classList.contains("modal")) {
        hideModal();
    }
});

window.addEventListener("scroll", function fun() {
    const top: number = document.documentElement.scrollTop;
    const wind: number = document.documentElement.clientHeight;
    const allScroll: number = document.documentElement.scrollHeight;

    if (top + wind >= allScroll - 1) {
        showModal();
        window.removeEventListener("scroll", fun);
    }
});

class Card {
    constructor(
        public parent: Element,
        public src: string,
        public alt: string,
        public title: string,
        public descr: string,
        public price: number,
    ) {}

    generate(): void {
        const card: HTMLDivElement = document.createElement("div");
        card.classList.add("menu__item");
        card.innerHTML = `
            <img src=${this.src} alt=${this.alt}>
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Ціна:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        `;
        this.parent.append(card);
    }
}

const parentCard = document.querySelector(".menu__field .container");

if (parentCard) {
    fetch("http://localhost:3000/menu").then((data) => {
        if (data.ok && data.status === 200) {
            return data.json();
        } else {
            parentCard.textContent = "Не вдалось загрузити меню"
        }
    }).then((data) => {
        data.forEach(({img, altimg, title, descr, price}: DataCard) => {
            new Card(parentCard, img, altimg, title, descr, price).generate();
        });
    }).catch(() => {
        parentCard.textContent = "Не вдалось загрузити меню"
    });
}  

const form: NodeListOf<HTMLFormElement> = document.querySelectorAll("form"); 

form.forEach(item => {
    item.addEventListener('submit', (e) => {
        e.preventDefault();
        const loadImg: HTMLImageElement = document.createElement("img");
        loadImg.src = "../img/spinner.svg";
        loadImg.style.display = "block";
        loadImg.style.margin = "0 auto";
        item.insertAdjacentElement("beforeend" , loadImg);
    
        const formData: FormData = new FormData(item);
    
        let postJSON: {
            name: string,
            phone: string
        } = {
            name: "",
            phone: ""
        };
    
        formData.forEach((value, key) => {
            switch (key) {
                case "name":
                    postJSON.name = value.toString();
                    break;
                case "phone":
                    postJSON.phone = value.toString();
                    break;
            }
        });

        fetch("http://localhost:3000/requests", {
            method: "POST", 
            headers: {
                "Content-type": "aplication/json"
            }, 
            body: JSON.stringify(postJSON)
        }).then((data) => {
            if (data.ok && data.status === 200) {
                generateMessage("Відправлено");
                item.reset();
                return data.text();
            }
        }).then((data) => {
            console.log(data);
        }).catch(() => {
            generateMessage("Помилка");
        }).finally(() => {
            loadImg.remove();
        });
    });
});

const generateMessage = (message: string) => {
    showModal();
    const form = modal?.querySelector("form");
    if (form && modal) {
        form.style.display = "none";
        modal.querySelector(".modal__content")?.insertAdjacentHTML("afterbegin" ,`<p class="modal__title">${message}</p>`);
    
        timerShowModal = setTimeout(() => {
            hideModal();
        }, 3000);
    }
}

const sliderType: div = document.querySelector(".tapeSlide");
const slides: NodeListOf<HTMLDivElement> = document.querySelectorAll(".offer__slide");
const sliderNavigation: div = document.querySelector(".navigationSlider");

const buttonPrev: div = document.querySelector(".offer__slider-prev");
const buttonNext: div = document.querySelector(".offer__slider-next");

const currentSlideBox: span = document.querySelector("#current");
const totalSlideBox: span = document.querySelector("#total");

const widthSlide: number = parseInt(window.getComputedStyle(slides[0]).width);
let currentSlide: number = 0;
if (totalSlideBox) {
    totalSlideBox.textContent = "0" + slides.length;
}

const navigableElements: HTMLDivElement[] = [];

for (const _ of slides) {
    const navElement = document.createElement("div");
    navElement.classList.add("navBtn");
    sliderNavigation?.append(navElement);
    navigableElements.push(navElement);
}
navigableElements[0].classList.add("activeNavBtn");

function switchSlide(step: number): void {
    currentSlide += step;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }

    navigableElements.forEach(elem => elem.classList.remove("activeNavBtn"));
    navigableElements[currentSlide].classList.add("activeNavBtn");

    if (sliderType && currentSlideBox) {
        currentSlideBox.textContent = currentSlide < 9 ? "0" + (currentSlide + 1) : (currentSlide + 1) + "";;
        sliderType.style.transform = `translateX(-${currentSlide * widthSlide}px)`;
    }
}

buttonPrev?.addEventListener("click", () => {
    switchSlide(-1);
});

buttonNext?.addEventListener("click", () => {
    switchSlide(1);
});

navigableElements.forEach((element, index) => {
    element.addEventListener("click", () => {
        currentSlide = 0;
        switchSlide(index);
    });
});

const gender: div = document.querySelector("#gender");
const baseParams: div = document.querySelector(".calculating__choose_medium");
const activity: div = document.querySelector(".calculating__choose_big");
const activitys: NodeListOf<Element> = document.querySelectorAll(".calculating__choose_big .calculating__choose-item");

interface IObjParamsForCalc {
    gender: string,
    height: number,
    weight: number,
    age: number,
    activity: number
}

const objParamsForCalc: IObjParamsForCalc = {
    gender: localStorage.getItem("gender") || "female",
    height: 0,
    weight: 0,
    age: 0,
    activity: parseFloat(localStorage.getItem("activity") || "0") 
}

document.querySelector(`#${objParamsForCalc.gender}`)?.classList.add("calculating__choose-item_active");
document.querySelector(`[data-coefficient="${objParamsForCalc.activity}"]`)?.classList.add("calculating__choose-item_active");

gender?.addEventListener("click", (event) => {
    const target = (event.target as Element);

    if (target.id === "female") {
        objParamsForCalc.gender = "female";
        document.querySelector("#male")?.classList.remove("calculating__choose-item_active");
        target.classList.add("calculating__choose-item_active");
        сountingСalories(objParamsForCalc);
        localStorage.setItem("gender", "female");
    }
    if (target.id === "male") {
        objParamsForCalc.gender = "male";
        document.querySelector("#female")?.classList.remove("calculating__choose-item_active");
        target.classList.add("calculating__choose-item_active");
        сountingСalories(objParamsForCalc);
        localStorage.setItem("gender", "male");
    }
});

baseParams?.addEventListener("input", (event) => {
    const target = (event.target as HTMLInputElement);

    target.value = target.value.replace(/\D/g, "");
    if (target.id === "height") {
        objParamsForCalc.height = parseInt((event.target as HTMLInputElement).value);
    }
    if (target.id === "weight") {
        objParamsForCalc.weight = parseInt((event.target as HTMLInputElement).value);
    }
    if (target.id === "age") {
        objParamsForCalc.age = parseInt((event.target as HTMLInputElement).value);
    }
    сountingСalories(objParamsForCalc);
});

activity?.addEventListener("click", (event) => {
    if ((event.target as Element).closest(".calculating__choose_big")) {
        const value: string | null = (event.target as HTMLInputElement).getAttribute("data-coefficient");

        if (value) {
            activitys.forEach(item => item.classList.remove("calculating__choose-item_active"));
            (event.target as Element).classList.add("calculating__choose-item_active");
            objParamsForCalc.activity = parseFloat(value);
            сountingСalories(objParamsForCalc);
            localStorage.setItem("activity", value);
        }
    }
});

function сountingСalories({gender, height, weight, age, activity}: IObjParamsForCalc) {
    const resultBox: div = document.querySelector(".calculating__result span");
    let result: number = 0;

    if (gender && height && weight && age && activity) {
        if (gender === "male") {
            result = (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activity;
        }
        if (gender === "female") {
            result = (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activity;
        }

        if (resultBox) {
            resultBox.textContent = Math.round(result) + "";
        }
    } else {
        if (resultBox) {
            resultBox.textContent = "0";
        }
    }
}