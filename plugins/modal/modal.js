Element.prototype.appendAfter = function (element) {
    element.parentNode.insertBefore(this, element.nextSibling)
}

function noop() {}

function _createModalFooter(buttons = []){
    if(buttons.length === 0) {
        return document.createElement('div')
    }
    const wrap = document.createElement('div')
    wrap.classList.add('modal-footer')

    buttons.forEach(btn => {
        const $btn = document.createElement('input')
        $btn.value = btn.text
        $btn.classList.add('modal-btn')
        $btn.setAttribute('id', 'send' + btn.id)
        $btn.setAttribute('disabled', 'disabled')
        $btn.type = btn.type || 'submit'
        $btn.onclick = btn.handler || noop

        wrap.appendChild($btn)
    })

    return wrap
}

function  _createModal(options) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.id = "myModal";
    modal.insertAdjacentHTML('afterbegin', `
    <div data-close="true" class="modal__shadow">
        <div class="modal__window" role="dialog" aria-modal="true">
        ${options.closable ? `
            <button data-close="true" class="modal__close">
                <svg data-close="true" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg" class="modal__close-svg">
                    <line data-close="true" x1="1.70985" y1="41.1737" x2="40.9442" y2="1.93939" stroke="#D0BDAE" stroke-width="3"/>
                    <line data-close="true" x1="2.9967" y1="1.93934" x2="42.231" y2="41.1737" stroke="#D0BDAE" stroke-width="3"/>
                </svg>
            </button>` : ''}
            <img src="image/modal/${options.img || 'callback.jpg'}" alt="Изображение" class="modal-img"/>
            <h2 class="modal-header">${options.title || ''}</h2>  
            <form action="" method="post">
               <fieldset> 
                  <div class="modal-body" data-content>
                     ${options.content || ''}
                  </div>
               </fieldset>
            </form>
        </div>
    </div>
    `)
    const footer = _createModalFooter(options.footerButtons)
    footer.appendAfter(modal.querySelector('[data-content]'))
    document.body.appendChild(modal)
    return modal
}


$.modal = function(options) {
    const animationSpeed = 200;
    const $modal = _createModal(options);
    let closing = false;
    let destroyed = false;

    const modal = {
        open() {
            if (destroyed) {
                return console.log('Modal is destroyed')
            }
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true;
            $modal.classList.remove('open');
            $modal.classList.add('hiding');
            setTimeout(() => {
                $modal.classList.remove('hiding')
                closing = false;
                if (typeof options.onClose === 'function') {
                    options.onClose()
                }
            }, animationSpeed);
        },
    }

    const listener = event => {
        if (event.target.dataset.close) {
            modal.close()
        }
    }

    $modal.addEventListener('click', listener)
    return Object.assign(modal, {
        destroy() {
            $modal.parentNode.removeChild($modal)
            $modal.removeEventListener('click', listener)
            destroyed = true;
        },
        setContent(html) {
            $modal.querySelector('[data-content]').innerHTML = html
        }
    })
}
