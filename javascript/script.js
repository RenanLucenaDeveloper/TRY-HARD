function initClickOutside() {
    
}

function initMenuMobile() {
    const botaoAbrir = document.querySelector('[data-menuMobile="abrir"]');
    const botaoFechar = document.querySelector('[data-menuMobile="fechar"]');
    const menuMobile = document.querySelector('[data-menuMobile="menu"]');
    const linkMenu = document.querySelectorAll('[data-menuMobile="linkMenu"]');
    const eventos = ['click', 'touchstart'];

    function abrirMenu() {
        menuMobile.classList.add('ativo');
        botaoAbrir.classList.add('ativo');
    }

    function fecharMenu() {
        menuMobile.classList.remove('ativo');
        botaoAbrir.classList.remove('ativo');
    }

    botaoAbrir.addEventListener('touchstart', abrirMenu);
    botaoFechar.addEventListener('touchstart', fecharMenu);
    linkMenu.forEach((i) => { i.addEventListener('touchstart', fecharMenu) }
)
}
initMenuMobile();

function initFiltrar() {
    const botaoAbrir = document.querySelector('[data-navMobile="abrir"]');
    const menuFiltrar = document.querySelector('[data-navMobile="menuFiltrar"]');
    
    function ativaFiltrar() {
        menuFiltrar.classList.toggle('ativo');
        botaoAbrir.classList.toggle('ativo');
    }

    botaoAbrir.addEventListener('touchstart', ativaFiltrar);
}

initFiltrar()