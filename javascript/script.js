function initHeaderMobile() {
    const header = document.querySelector('[data-header]');
    let lastScrollTop = 0;

    function toggleClasse() {
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop){
            header.classList.add('escondido');
        } else {
            header.classList.remove('escondido');
        }
        lastScrollTop = st <= 0 ? 0 : st;
    }

    window.addEventListener('scroll', toggleClasse, false);
}
initHeaderMobile()

function initMenuMobile() {
    const botaoAbrir = document.querySelector('[data-menuMobile="abrir"]');
    const botaoFechar = document.querySelector('[data-menuMobile="fechar"]');
    const menuMobile = document.querySelector('[data-menuMobile="menu"]');
    const linkMenu = document.querySelectorAll('[data-menuMobile="linkMenu"]');

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

function initClickOutside() {
    
}

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

function initModalProduto() {
    const imagensDosProdutos = document.querySelectorAll('[data-modalProduto="imagem"]');    
    const botaoDosProdutos = document.querySelectorAll('[data-modalProduto="botao"]');
    const botaoFecharModal = document.querySelector('[data-modalProduto="fechar"]');
    const modalProduto = document.querySelector('[data-modalProduto="modal"]');
    const eventos = ['click', 'touchstart'];

    function abreModal() {
        modalProduto.classList.add('ativo');
    }

    function fechaModal() {
        modalProduto.classList.remove('ativo');
    }

    eventos.forEach((evento) => {
        botaoFecharModal.addEventListener(evento, fechaModal);
    }) 

    imagensDosProdutos.forEach((i) => {i.addEventListener('click', abreModal);})
    botaoDosProdutos.forEach((i) => {i.addEventListener('click', abreModal);})
}
initModalProduto();