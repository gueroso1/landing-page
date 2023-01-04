// função pra mudar o celular
function imgSlider(e) {
    document.querySelector('#phone').src = e
}

//função pra mudar a cor do circulo
function circleChange(color) {
    const circle = document.querySelector('#circle');
    circle.style.background = color
}

// menu hamburguinho
function mudouTamanho() {
    if (window.innerWidth>=769) {
        itens_menu.style.display = 'block'
    } else {
        itens_menu.style.display = 'none'
    }
}

function clickMenu() {
    if (itens_menu.style.display == 'block') {
    itens_menu.style.display = 'none'
   } else {
    itens_menu.style.display = 'block'
   }
}