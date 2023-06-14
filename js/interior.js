function renderInterior (objs = []) {
    if(objs.length === 0) {
        return console.log('Нет объектов для отображения')
    }
    objs.forEach(obj => {
        const $obj = document.createElement('img');
        $obj.setAttribute('src', 'image/interior/' + obj.img);
        $obj.setAttribute('alt', obj.title);
        $obj.classList.add('interior-foto');

        interiorContainer.appendChild($obj);
    })
    return interiorContainer
}