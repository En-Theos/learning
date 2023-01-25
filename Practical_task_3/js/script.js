"use strict";
const parentButtonsTabs = document.querySelector(".tabheader__items");
const buttonsTabs = document.querySelectorAll(".tabheader__items .tabheader__item");
const tabContents = document.querySelectorAll(".tabcontainer .tabcontent");
parentButtonsTabs === null || parentButtonsTabs === void 0 ? void 0 : parentButtonsTabs.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("tabheader__item") && !target.classList.contains("tabheader__item_active")) {
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
const daysBox = document.querySelector(".timer__block #days");
const hoursBox = document.querySelector(".timer__block #hours");
const minutesBox = document.querySelector(".timer__block #minutes");
const secondsBox = document.querySelector(".timer__block #seconds");
const interval = setInterval(() => {
    const t = new Date("2023-01-22").getTime() - new Date().getTime();
    const days = Math.floor(t / 1000 / 60 / 60 / 24);
    const hours = Math.floor(t / 1000 / 60 / 60 % 24);
    const minutes = Math.floor(t / 1000 / 60 % 60);
    const seconds = Math.floor(t / 1000 % 60);
    if (daysBox && hoursBox && minutesBox && secondsBox && t > 0) {
        daysBox.textContent = days < 10 ? "0" + days : days + "";
        hoursBox.textContent = hours < 10 ? "0" + hours : hours + "";
        minutesBox.textContent = minutes < 10 ? "0" + minutes : minutes + "";
        secondsBox.textContent = seconds < 10 ? "0" + seconds : seconds + "";
    }
    else {
        clearInterval(interval);
    }
}, 1000);
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector("[data-close]");
const btnsShowModal = document.querySelectorAll("[data-modal]");
const timerShowModal = setTimeout(() => { if (modal)
    modal.style.display = "block"; }, 300000);
btnsShowModal.forEach(button => {
    button.addEventListener("click", () => {
        if (modal)
            modal.style.display = "block";
        clearTimeout(timerShowModal);
    });
});
btnCloseModal === null || btnCloseModal === void 0 ? void 0 : btnCloseModal.addEventListener("click", () => {
    if (modal)
        modal.style.display = "none";
});
modal === null || modal === void 0 ? void 0 : modal.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("modal")) {
        if (modal)
            modal.style.display = "none";
    }
});
window.addEventListener("scroll", function fun() {
    const top = document.documentElement.scrollTop;
    const wind = document.documentElement.clientHeight;
    const allScroll = document.documentElement.scrollHeight;
    if (top + wind >= allScroll - 1) {
        if (modal)
            modal.style.display = "block";
        window.removeEventListener("scroll", fun);
    }
});
class Card {
    constructor(parent, src, alt, title, descr, price) {
        this.parent = parent;
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr;
        this.price = price;
    }
    generate() {
        const card = document.createElement("div");
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
