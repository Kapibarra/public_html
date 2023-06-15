adaptive();

// ----------------------- DropDown Menu ----------------------

function mainMenuDropDown() {
  const dropDownEl = document.getElementById("dropdown");
  const dropDownSvg = document.querySelector(".main-menu__svg_V");
  if (dropDownEl.classList.contains("show")) {
    dropDownEl.classList.remove("show");
    if (window.innerWidth <= 875) {
      dropDownSvg.src = "image/Vector%206-mobile.svg";
    } else {
      dropDownSvg.src = "image/Vector%206.svg";
    }
  } else {
    dropDownEl.classList.add("show");
    if (window.innerWidth <= 875) {
      dropDownSvg.src = "image/close-mobile.svg";
    } else {
      dropDownSvg.src = "image/close.svg";
    }
  }
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    let href = this.getAttribute("href").substring(1);

    const scrollTarget = document.getElementById(href);

    // const topOffset = document.querySelector('.scrollto').offsetHeight;
    const topOffset = 0; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

window.onclick = function (event) {
  if (
    !event.target.matches(".main-menu") &&
    !event.target.matches(".main-menu__svg") &&
    !event.target.matches(".main-menu__svg_V") &&
    !event.target.matches(".main-menu__text")
  ) {
    const dropdowns = document.getElementsByClassName("header__sub-menu");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
        const dropDownSvg = document.querySelector(".main-menu__svg_V");
        if (window.innerWidth <= 875) {
          dropDownSvg.src = "image/Vector%206-mobile.svg";
        } else {
          dropDownSvg.src = "image/Vector%206.svg";
        }
      }
    }
  }
};

// --------------------------  Infrastructure -------------------------------
const liEls = document.querySelectorAll("ul li.fourth-screen__menu-item");
const infrstrImgs = document.querySelector(".infrastructure-img");
let liElsCount = liEls.length;
for (let i = 0; i < liElsCount; i++) {
  liEls[i].addEventListener("click", function (event) {
    for (let x = 0; x < liElsCount; x++) {
      liEls[x].firstElementChild.classList.remove("active");
    }
    this.firstElementChild.classList.add("active");
    for (let i = 0; i < liElsCount; i++) {
      if (liEls[i].firstElementChild.classList.contains("active")) {
        infrstrImgs.setAttribute("src", "image/infrastructure/" + i + ".jpg");
      }
    }
    event.preventDefault();
    adaptive();
  });
  liEls[i].removeEventListener("click", function (event) {});
}

// function on_click(element){
//     element.addEventListener(
//         'click',
//         function (event){
//             for (let x = 0; x < liElsCount; x++){
//                 liEls[x].firstElementChild.classList.remove('active')
//             }
//             this.firstElementChild.classList.add('active')
//             for(let i = 0; i < liElsCount; i++){
//                 if (liEls[i].firstElementChild.classList.contains('active')){
//                     infrstrImgs.setAttribute('src', 'image/infrastructure/' + i + '.jpg');
//                 }
//             }
//             event.preventDefault();
//             adaptive();
//         }
//     );
//     element.removeEventListener('click', function (event){})
// }

// ------------------------------- Carousels ---------------------------------

const screenHeight = window.screen.height;
const screenWidth = window.screen.width;
const carousel = document.getElementById("carousel");
const carousel2 = document.getElementById("carousel2");
const content = document.getElementById("content");
const next = document.getElementById("next");
window.addEventListener("scroll", function () {
  let scrolledY = window.scrollY;
  let stickyTop = carousel.getBoundingClientRect().top;
  let nextTop = next.getBoundingClientRect().top;
  let padTop = 0.3 * screenHeight;
  let down = screenHeight - 1.659442724458204 * screenHeight;
  let bottom = screenHeight - 0.7 * screenHeight;
  let carousel2start = 0.138202837625 * screenWidth;

  if (stickyTop <= 0 && nextTop > 0.9 * screenHeight) {
    content.style.paddingTop = padTop + "px";
    content.style.position = "fixed";
    content.style.top = scrolledY * 0.001 - 55 + "px";
    content.style.left = stickyTop * 1.55 + "px";
  }
  if (stickyTop > 0) {
    content.style = "";
    content.style.position = "inherit";
  }
  if (nextTop <= 0) {
    carousel2.style.left = carousel2start + nextTop * 0.5 + "px";
  }
  if (nextTop <= 0.9 * screenHeight) {
    content.style = "";
    content.style.position = "absolute";
    content.style.bottom = bottom + "px";
    content.style.left = stickyTop * 0.65 + "px";
  }
});
window.removeEventListener("scroll", function () {});

// ---------------------- Catalog ----------------------

// const catalog = [
//     {id: 1, title: "Дом", formula: '2+0', totalArea: 40, warmOutline: 30, img: "5-1.jpg", layout: "1.png"},
//     {id: 2, title: "Дом", formula: '2+2', totalArea: 100, warmOutline: 40, img: "1-1.jpg", layout: "2.png"},
//     {id: 3, title: "Дом", formula: '2+2', totalArea: 108, warmOutline: 40, img: "2-1.jpg", layout: "3.png"},
//     {id: 4, title: "Дом", formula: '4+2', totalArea: 74, warmOutline: 64, img: "6-1.jpg", layout: "5.png"},
//     {id: 5, title: "Дом", formula: '2+2', totalArea: 84, warmOutline: 64, img: "6-2.jpg", layout: "6.png"},
//     {id: 6, title: "Дом", formula: '4+2', totalArea: 132, warmOutline: 63, img: "4-1.jpg", layout: "4.png"},
//     {id: 7, title: "Дом", formula: '4+2', totalArea: 128, warmOutline: 96, img: "8-1.jpg", layout: "9.png"},
//     {id: 8, title: "Дом", formula: '2+2', totalArea: 132, warmOutline: 63, img: "8-2.jpg", layout: "8.png"}
// ]
// renderCatalog(catalog);
//
// let selectedIndex = 0;
// const catalogObjs = document.querySelectorAll(".catalog-img");
// const catalogObjsCount = catalogObjs.length
// for (let i = 0; i < catalogObjsCount; i++) {
//     catalogObjs[i].addEventListener (
//         'click',
//         function (event){
//             for (let x = 0; x < catalogObjsCount; x++){
//                 catalogObjs[x].classList.remove('selected')
//             }
//             this.classList.add('selected');
//             selectedIndex = i;
//             renderSelected();
//         }
//     );
//     catalogObjs[i].removeEventListener('click', function (event){});
// }
//
// document.addEventListener(
//     "keyup",
//     (event) => {
//         const keyName = event.key;
//         if (keyName === "ArrowRight") {
//             catalogObjs[selectedIndex].classList.remove('selected')
//             if(selectedIndex < catalogObjsCount - 1){
//                 selectedIndex++
//             } else {
//                 selectedIndex = 0
//             }
//             catalogObjs[selectedIndex].classList.add('selected');
//             renderSelected();
//         }
//         if (keyName === "ArrowLeft") {
//             catalogObjs[selectedIndex].classList.remove('selected')
//             if(selectedIndex > 0){
//                 selectedIndex--
//             } else {
//                 selectedIndex = catalogObjsCount - 1
//             }
//             catalogObjs[selectedIndex].classList.add('selected');
//             renderSelected();
//         }
//     },
//     false
// );

//----------------------- Interior ---------------------

// const interior = [
//     {img: "Гостиная-5.jpg", title: "Гостиная"},
//     {img: "Кухня-1.jpg", title: "Кухня"},
//     {img: "Кухня-2.jpg", title: "Кухня"},
//     {img: "Кухня-3.jpg", title: "Кухня"},
//     {img: "Санузел-1.jpg", title: "Санузел"},
//     {img: "Санузел-6.jpg", title: "Санузел"},
//     {img: "Спальня-3.jpg", title: "Спальня"},
//     {img: "Спальня-5.jpg", title: "Спальня"},
//     {img: "Спальня-7.jpg", title: "Спальня"}
// ]
// const interiorContainer = document.querySelector(".interior-foto-container");
// let leftposition = 0;
//
// renderInterior(interior);
//
// document.addEventListener(
//     "keydown",
//     (event) => {
//         const keyName = event.key;
//         if (keyName === "ArrowRight") {
//             leftposition = +leftposition - 50;
//             interiorContainer.style.left = leftposition + 'px';
//         }
//         if (keyName === "ArrowLeft") {
//             leftposition = +leftposition + 50;
//             interiorContainer.style.left = leftposition + 'px';
//         }
//     },
//     false
// );

// ---------------------- Footer -----------------------
const addressBtn = document.querySelectorAll(".address__header");
const addressBtnCount = addressBtn.length;
const twelfthBackground = document.querySelector(".twelfth-screen__background");
for (let i = 0; i < addressBtnCount; i++) {
  addressBtn[i].addEventListener("click", function (event) {
    let addressVisible = document.querySelector(".address__visible");
    let addressInactive = document.querySelector(".address__inactive");
    addressVisible.classList.remove("address__visible");
    // addressVisible.classList.add('address__invisible');
    addressInactive.classList.remove("address__inactive");
    this.nextElementSibling.classList.add("address__visible");
    // this.classList.remove('address__inactive');
    for (let i = 0; i < addressBtnCount; i++) {
      addressBtn[i].classList.add("address__inactive");
      if (
        addressBtn[i].nextElementSibling.classList.contains("address__visible")
      ) {
        twelfthBackground.setAttribute("src", "image/map" + i + ".jpg");
      }
    }
    this.classList.remove("address__inactive");
    event.preventDefault();
    adaptive();
  });
  addressBtn[i].removeEventListener("click", function () {});
}

// ------------------------ MODAL -----------------------
const modalCallBack = $.modal({
  title: "Обратный звонок",
  closable: true,
  img: "callback.jpg",
  content: `
          <div class="userName">
             <label for="name">ФИО&nbsp;</label>
             <input id="nameCallBack" type="text" name="name" onkeyup="check('CallBack');"/>
          </div>   
          <div class="userTel">
             <label>+7&nbsp;(
             <input id="tel1CallBack" name="tel1" type="tel" pattern="[0-9]{3}" aria-label="3-digit area code" size="1" onkeyup="check('CallBack');"/>) -
             <input id="tel2CallBack" name="tel2" type="tel" pattern="[0-9]{7}" aria-label="7-digit number" size="12" onkeyup="check('CallBack');"/>
             </label>
          </div>  
    `,
  footerButtons: [
    {
      text: "Заказать звонок",
      type: "submit",
      id: "CallBack",
      handler() {
        let inputName = document.getElementById("nameCallBack");
        let inputTelCode = document.getElementById("tel1CallBack");
        let inputTelNumber = document.getElementById("tel2CallBack");
        let form = "Обратный звонок";
        // console.log('User: ' + inputName.value + ' phone: ' + inputTelCode.value + inputTelNumber.value);
        sendData(
          inputName.value,
          inputTelCode.value,
          inputTelNumber.value,
          form
        ).then((response) => response.json());
        modalCallBack.close();
      },
    },
  ],
});

const modalPresentation = $.modal({
  title: "Скачать<br>презентацию",
  closable: true,
  img: "finmodel.jpg",
  content: `
          <div class="userName">
             <label for="name">ФИО&nbsp;</label>
             <input id="namePresentation" type="text" name="name" onkeyup="check('Presentation');"/>
          </div>   
          <div class="userTel">
             <label>+7&nbsp;(
             <input id="tel1Presentation" name="tel1" type="tel" pattern="[0-9]{3}" aria-label="3-digit area code" size="1" onkeyup="check('Presentation');"/>) -
             <input id="tel2Presentation" name="tel2" type="tel" pattern="[0-9]{7}" aria-label="7-digit number" size="12" onkeyup="check('Presentation');"/>
             </label>
          </div>  
    `,
  footerButtons: [
    {
      text: "Скачать",
      type: "submit",
      id: "Presentation",
      handler() {
        let inputName = document.getElementById("namePresentation");
        let inputTelCode = document.getElementById("tel1Presentation");
        let inputTelNumber = document.getElementById("tel2Presentation");
        let form = "Скачать презентацию";
        // console.log('User: ' + inputName.value + ' phone: ' + inputTelCode.value + inputTelNumber.value);
        sendData(
          inputName.value,
          inputTelCode.value,
          inputTelNumber.value,
          form
        ).then((response) => response.json());
        window.open("https://t.me/whiteresort_bot");
        modalPresentation.close();
      },
    },
  ],
});

const modalInfrastructure = $.modal({
  title: "Аналитическая статья о&nbsp;проекте",
  closable: true,
  img: "finmodel.jpg",
  content: `
          <div class="userName">
             <label for="name">ФИО&nbsp;</label>
             <input id="nameInfrastructure" type="text" name="name" onkeyup="check('Infrastructure');"/>
          </div>   
          <div class="userTel">
             <label>+7&nbsp;(
             <input id="tel1Infrastructure" name="tel1" type="tel" pattern="[0-9]{3}" aria-label="3-digit area code" size="1" onkeyup="check('Infrastructure');"/>) -
             <input id="tel2Infrastructure" name="tel2" type="tel" pattern="[0-9]{7}" aria-label="7-digit number" size="12" onkeyup="check('Infrastructure');"/>
             </label>
          </div>  
    `,
  footerButtons: [
    {
      text: "Узнать больше",
      type: "submit",
      id: "CallBack",
      handler() {
        let inputName = document.getElementById("nameInfrastructure");
        let inputTelCode = document.getElementById("tel1Infrastructure");
        let inputTelNumber = document.getElementById("tel2Infrastructure");
        let form = "Статья о преимуществах";
        // console.log('User: ' + inputName.value + ' phone: ' + inputTelCode.value + inputTelNumber.value);
        sendData(
          inputName.value,
          inputTelCode.value,
          inputTelNumber.value,
          form
        ).then((response) => response.json());
        window.open("https://t.me/whiteresort_bot");
        modalInfrastructure.close();
      },
    },
  ],
});

const modalProjects = $.modal({
  title: "Каталог домов",
  closable: true,
  img: "callback.jpg",
  content: `
          <div class="userName">
             <label for="name">ФИО&nbsp;</label>
             <input id="nameProjects" type="text" name="name" onkeyup="check('Projects');"/>
          </div>   
          <div class="userTel">
             <label>+7&nbsp;(
             <input id="tel1Projects" name="tel1" type="tel" pattern="[0-9]{3}" aria-label="3-digit area code" size="1" onkeyup="check('Projects');"/>) -
             <input id="tel2Projects" name="tel2" type="tel" pattern="[0-9]{7}" aria-label="7-digit number" size="12" onkeyup="check('Projects');"/>
             </label>
          </div>  
    `,
  footerButtons: [
    {
      text: "Смотреть",
      type: "button",
      id: "Projects",
      handler() {
        let inputName = document.getElementById("nameProjects");
        let inputTelCode = document.getElementById("tel1Projects");
        let inputTelNumber = document.getElementById("tel2Projects");
        let form = "Посмотреть проекты";
        // console.log('User: ' + inputName.value + ' phone: ' + inputTelCode.value + inputTelNumber.value);
        sendData(
          inputName.value,
          inputTelCode.value,
          inputTelNumber.value,
          form
        ).then((response) => response.json());
        window.open("https://t.me/whiteresort_bot");
        modalProjects.close();
      },
    },
  ],
});

function check(id) {
  let inputName = document.getElementById("name" + id);
  let inputTelCode = document.getElementById("tel1" + id);
  let inputTelNumber = document.getElementById("tel2" + id);
  console.log(
    "User: " +
      inputName.value +
      " phone: " +
      inputTelCode.value +
      inputTelNumber.value
  );
  document.getElementById("send" + id).disabled =
    inputName.value && inputTelCode.value && inputTelNumber.value
      ? false
      : "disabled";
}

async function sendData(inputName, inputTelCode, inputTelNumber, form) {
  let data = {
    name: inputName,
    phone_1: inputTelCode,
    phone_2: inputTelNumber,
    form: form,
  };

  let response = await fetch("/send_mail.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(data),
  });

  // let result = await response.json();
  // console.log(result.message);
}

document.addEventListener("click", (event) => {
  const btnType = event.target.dataset.modal;
  if (btnType) {
    event.preventDefault();
    if (btnType === "presentation") {
      modalPresentation.open();
    }
    if (btnType === "infrastructure") {
      modalInfrastructure.open();
    }
    if (btnType === "callBack") {
      modalCallBack.open();
    }
    if (btnType === "projects") {
      modalProjects.open();
    }
  }
});
