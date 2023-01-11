// menu hamburguinho
function mudouTamanho() {
    if (window.innerWidth>=1200) {
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