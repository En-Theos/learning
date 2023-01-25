type span = HTMLSpanElement | null;
type div = HTMLDivElement | null;

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

const timerShowModal: number = setTimeout(() => {if (modal) modal.style.display = "block"}, 300000);

btnsShowModal.forEach(button => {
    button.addEventListener("click", () => {
        if (modal) modal.style.display = "block";
        clearTimeout(timerShowModal);
    });
});

btnCloseModal?.addEventListener("click", () => {
    if (modal) modal.style.display = "none";
});

modal?.addEventListener("click", (event) => {
    const target: HTMLDivElement = (event.target as HTMLDivElement);

    if (target.classList.contains("modal")) {
        if (modal) modal.style.display = "none";
    }
});

window.addEventListener("scroll", function fun() {
    const top: number = document.documentElement.scrollTop;
    const wind: number = document.documentElement.clientHeight;
    const allScroll: number = document.documentElement.scrollHeight;

    if (top + wind >= allScroll - 1) {
        if (modal) modal.style.display = "block";
        window.removeEventListener("scroll", fun);
    }
});

class Card {
    public parent: Element;
    public src: string;
    public alt: string;
    public title: string;
    public descr: string;
    public price: number;

    constructor(parent: Element, src: string, alt: string, title: string, descr: string, price: number) {
        this.parent = parent;
        this.src = src;
        this.alt = alt
        this.title = title;
        this.descr = descr;
        this.price = price;
    }

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
    new Card(parentCard, "img/tabs/vegy.jpg", "vegy", "Меню 'Фитнес'", "Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!", 210).generate();
    new Card(parentCard, "img/tabs/post.jpg", "post", "Меню 'Постное'", "Меню 'Постное' - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.", 240).generate();
    new Card(parentCard, "img/tabs/elite.jpg", "elite", "Меню 'Премиум'", "В меню 'Премиум' мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!", 270).generate();
}  
