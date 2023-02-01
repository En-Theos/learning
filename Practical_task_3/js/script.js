"use strict";
var _a, _b;
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
let timerShowModal = setTimeout(() => { if (modal)
    modal.style.display = "block"; }, 300000);
function showModal() {
    if (modal)
        modal.style.display = "block";
    clearTimeout(timerShowModal);
}
function hideModal() {
    var _a;
    if (modal) {
        modal.style.display = "none";
        (_a = modal.querySelector("p.modal__title")) === null || _a === void 0 ? void 0 : _a.remove();
        const form = modal.querySelector("form");
        clearTimeout(timerShowModal);
        if (form) {
            form.style.display = "block";
        }
    }
    ;
}
btnsShowModal.forEach(button => {
    button.addEventListener("click", () => {
        showModal();
    });
});
btnCloseModal === null || btnCloseModal === void 0 ? void 0 : btnCloseModal.addEventListener("click", () => {
    hideModal();
});
modal === null || modal === void 0 ? void 0 : modal.addEventListener("click", (event) => {
    const target = event.target;
    if (target.classList.contains("modal")) {
        hideModal();
    }
});
window.addEventListener("scroll", function fun() {
    const top = document.documentElement.scrollTop;
    const wind = document.documentElement.clientHeight;
    const allScroll = document.documentElement.scrollHeight;
    if (top + wind >= allScroll - 1) {
        showModal();
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
    fetch("http://localhost:3000/menu").then((data) => {
        if (data.ok && data.status === 200) {
            return data.json();
        }
        else {
            parentCard.textContent = "Не вдалось загрузити меню";
        }
    }).then((data) => {
        data.forEach(({ img, altimg, title, descr, price }) => {
            new Card(parentCard, img, altimg, title, descr, price).generate();
        });
    }).catch(() => {
        parentCard.textContent = "Не вдалось загрузити меню";
    });
}
const form = document.querySelectorAll("form");
form.forEach(item => {
    item.addEventListener('submit', (e) => {
        e.preventDefault();
        const loadImg = document.createElement("img");
        loadImg.src = "../img/spinner.svg";
        loadImg.style.display = "block";
        loadImg.style.margin = "0 auto";
        item.insertAdjacentElement("beforeend", loadImg);
        const formData = new FormData(item);
        let postJSON = {
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
const generateMessage = (message) => {
    var _a;
    showModal();
    const form = modal === null || modal === void 0 ? void 0 : modal.querySelector("form");
    if (form && modal) {
        form.style.display = "none";
        (_a = modal.querySelector(".modal__content")) === null || _a === void 0 ? void 0 : _a.insertAdjacentHTML("afterbegin", `<p class="modal__title">${message}</p>`);
        timerShowModal = setTimeout(() => {
            hideModal();
        }, 3000);
    }
};
const sliderType = document.querySelector(".tapeSlide");
const slides = document.querySelectorAll(".offer__slide");
const sliderNavigation = document.querySelector(".navigationSlider");
const buttonPrev = document.querySelector(".offer__slider-prev");
const buttonNext = document.querySelector(".offer__slider-next");
const currentSlideBox = document.querySelector("#current");
const totalSlideBox = document.querySelector("#total");
const widthSlide = parseInt(window.getComputedStyle(slides[0]).width);
let currentSlide = 0;
if (totalSlideBox) {
    totalSlideBox.textContent = "0" + slides.length;
}
const navigableElements = [];
for (const _ of slides) {
    const navElement = document.createElement("div");
    navElement.classList.add("navBtn");
    sliderNavigation === null || sliderNavigation === void 0 ? void 0 : sliderNavigation.append(navElement);
    navigableElements.push(navElement);
}
navigableElements[0].classList.add("activeNavBtn");
function switchSlide(step) {
    currentSlide += step;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    else if (currentSlide > slides.length - 1) {
        currentSlide = 0;
    }
    navigableElements.forEach(elem => elem.classList.remove("activeNavBtn"));
    navigableElements[currentSlide].classList.add("activeNavBtn");
    if (sliderType && currentSlideBox) {
        currentSlideBox.textContent = currentSlide < 9 ? "0" + (currentSlide + 1) : (currentSlide + 1) + "";
        ;
        sliderType.style.transform = `translateX(-${currentSlide * widthSlide}px)`;
    }
}
buttonPrev === null || buttonPrev === void 0 ? void 0 : buttonPrev.addEventListener("click", () => {
    switchSlide(-1);
});
buttonNext === null || buttonNext === void 0 ? void 0 : buttonNext.addEventListener("click", () => {
    switchSlide(1);
});
navigableElements.forEach((element, index) => {
    element.addEventListener("click", () => {
        currentSlide = 0;
        switchSlide(index);
    });
});
const gender = document.querySelector("#gender");
const baseParams = document.querySelector(".calculating__choose_medium");
const activity = document.querySelector(".calculating__choose_big");
const activitys = document.querySelectorAll(".calculating__choose_big .calculating__choose-item");
const objParamsForCalc = {
    gender: localStorage.getItem("gender") || "female",
    height: 0,
    weight: 0,
    age: 0,
    activity: parseFloat(localStorage.getItem("activity") || "0")
};
(_a = document.querySelector(`#${objParamsForCalc.gender}`)) === null || _a === void 0 ? void 0 : _a.classList.add("calculating__choose-item_active");
(_b = document.querySelector(`[data-coefficient="${objParamsForCalc.activity}"]`)) === null || _b === void 0 ? void 0 : _b.classList.add("calculating__choose-item_active");
gender === null || gender === void 0 ? void 0 : gender.addEventListener("click", (event) => {
    var _a, _b;
    const target = event.target;
    if (target.id === "female") {
        objParamsForCalc.gender = "female";
        (_a = document.querySelector("#male")) === null || _a === void 0 ? void 0 : _a.classList.remove("calculating__choose-item_active");
        target.classList.add("calculating__choose-item_active");
        сountingСalories(objParamsForCalc);
        localStorage.setItem("gender", "female");
    }
    if (target.id === "male") {
        objParamsForCalc.gender = "male";
        (_b = document.querySelector("#female")) === null || _b === void 0 ? void 0 : _b.classList.remove("calculating__choose-item_active");
        target.classList.add("calculating__choose-item_active");
        сountingСalories(objParamsForCalc);
        localStorage.setItem("gender", "male");
    }
});
baseParams === null || baseParams === void 0 ? void 0 : baseParams.addEventListener("input", (event) => {
    const target = event.target;
    target.value = target.value.replace(/\D/g, "");
    if (target.id === "height") {
        objParamsForCalc.height = parseInt(event.target.value);
    }
    if (target.id === "weight") {
        objParamsForCalc.weight = parseInt(event.target.value);
    }
    if (target.id === "age") {
        objParamsForCalc.age = parseInt(event.target.value);
    }
    сountingСalories(objParamsForCalc);
});
activity === null || activity === void 0 ? void 0 : activity.addEventListener("click", (event) => {
    if (event.target.closest(".calculating__choose_big")) {
        const value = event.target.getAttribute("data-coefficient");
        if (value) {
            activitys.forEach(item => item.classList.remove("calculating__choose-item_active"));
            event.target.classList.add("calculating__choose-item_active");
            objParamsForCalc.activity = parseFloat(value);
            сountingСalories(objParamsForCalc);
            localStorage.setItem("activity", value);
        }
    }
});
function сountingСalories({ gender, height, weight, age, activity }) {
    const resultBox = document.querySelector(".calculating__result span");
    let result = 0;
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
    }
    else {
        if (resultBox) {
            resultBox.textContent = "0";
        }
    }
}
