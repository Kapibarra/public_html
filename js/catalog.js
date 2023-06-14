const selectedTitle = document.querySelector(".selected-title");
const selectedImg = document.querySelector(".selected-img");
const infBlock = document.querySelector(".ninth-screen__information-block");

function renderCatalog (objs = []) {
    if(objs.length === 0) {
        return console.log('В каталоге нет объектов для отображения')
    }
    const ctgContainer = document.querySelector(".catalog-imgs__container")
    objs.forEach(obj => {
        const $obj = document.createElement('img');
        $obj.setAttribute('src', 'image/catalog/' + obj.img);
        $obj.setAttribute('alt', obj.title);
        $obj.setAttribute('data-catid', obj.id);
        $obj.classList.add('catalog-img');

        ctgContainer.appendChild($obj);
    })

    const defaultEl = ctgContainer.firstElementChild;
    defaultEl.classList.add('selected');
    const defaultElId = +defaultEl.dataset.catid;
    const obj = catalog.find(o => o.id === defaultElId);
    selectedTitle.textContent = obj.title;
    selectedImg.setAttribute('src', 'image/catalog/' + obj.img)
    infBlock.innerHTML = `
    <p class="inf-block__content">Формула: ${obj.formula}</p>
    <p class="inf-block__content">Общая площадь: ${obj.totalArea} м</p>
    <p class="inf-block__content">Теплый контур: ${obj.warmOutline} м</p>
    <img src="image/layouts/${obj.layout}" alt="${obj.title}" class="layout">
    `
    return ctgContainer
}

function renderSelected(){
    const selectedElId = +catalogObjs[selectedIndex].dataset.catid;
    const obj = catalog.find(o => o.id === selectedElId);
    selectedTitle.textContent = obj.title + obj.id;
    selectedImg.setAttribute('src', 'image/catalog/' + obj.img);
    infBlock.innerHTML = `
            <p class="inf-block__content">Формула: ${obj.formula}</p>
            <p class="inf-block__content">Общая площадь: ${obj.totalArea} м<sup><small>n</small></sup></p>
            <p class="inf-block__content">Теплый контур: ${obj.warmOutline} м<sup><small>n</small></sup></p>
            <img src="image/layouts/${obj.layout}" alt="${obj.title}" class="layout">
            `
}


