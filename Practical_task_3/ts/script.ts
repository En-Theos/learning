const parentButtonsTabs: HTMLDivElement | null = document.querySelector(".tabheader__items");
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

type span = HTMLSpanElement | null;

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