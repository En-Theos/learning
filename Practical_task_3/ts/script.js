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
setInterval(() => {
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
}, 1000);
