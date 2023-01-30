type span = HTMLSpanElement | null;
type div = HTMLDivElement | null;
type form = HTMLFormElement | null;

interface dataCard {
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
        data.forEach(({img, altimg, title, descr, price}: dataCard) => {
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