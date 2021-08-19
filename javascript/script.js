const eventos = ['click', 'touchstart'];

function initHeaderMobile() {
    const header = document.querySelector('[data-header]');
    let lastScrollTop = 0;

    function toggleClasse() {
        var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
        if (st > lastScrollTop) {
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

    //Guarda o document.documentElement  e o atributo data-outside em uma constante
    const html = document.documentElement;
    const outside = 'data-outside'

    function abrirMenu(e) {
        menuMobile.classList.add('ativo');
        botaoAbrir.classList.add('ativo');
        initClickOutside(menuMobile, eventos, fecharMenu);
    }

    function fecharMenu() {
        menuMobile.classList.remove('ativo');
        botaoAbrir.classList.remove('ativo');

        //Remove os event listeners e o atributo
        events.forEach((e) => {
            html.removeEventListener(e, removeClasse);
        })
        html.removeAttribute(outside);
    };

    function initClickOutside(element, events, callback) {

        //Verifica se o elemento não tem o atributo data-outside para evitar de adicionar muitos event listeners no html
        if (!html.hasAttribute(outside)) {

            //Adiciona os event listeners no html e logo adiciona o atributo data-outside
            events.forEach((e) => {
                setTimeout(() => { html.addEventListener(e, removeClasse) }, 0);
            })
            html.setAttribute(outside, '');
        }

        function fecharMenu() {
            menuMobile.classList.remove('ativo');
            botaoAbrir.classList.remove('ativo');

            //Remove os event listeners e o atributo
            events.forEach((e) => {
                html.removeEventListener(e, removeClasse);
            })
            html.removeAttribute(outside);
        };

        //Função que remove a classe ativo usando a callback que o ativador desta função passar
        function removeClasse(event) {

            //Verifica se o click foi fora do elemento
            if (!element.contains(event.target)) {

                //Remove os event listeners e o atributo
                events.forEach((e) => {
                    html.removeEventListener(e, removeClasse);
                })
                html.removeAttribute(outside);

                //Ativa a callback passada pelo parâmetro (callback)
                fecharMenu();
                console.log('ativou o outside');
            }
        }

        botaoFechar.addEventListener('click', fecharMenu);
        linkMenu.forEach((i) => { i.addEventListener('click', fecharMenu) }
        )
    }

    botaoAbrir.addEventListener('click', abrirMenu);
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

function initModalProduto() {
    const imagensDosProdutos = document.querySelectorAll('[data-modalProduto="imagem"]');
    const botaoDosProdutos = document.querySelectorAll('[data-modalProduto="botao"]');
    const botaoFecharModal = document.querySelector('[data-modalProduto="fechar"]');
    const modalProduto = document.querySelector('[data-modalProduto="modal"]');

    const botaoAdicionarItem = document.querySelector('[data-modalProduto="adicionarItem"]');
    const botaoRemoverItem = document.querySelector('[data-modalProduto="removerItem"]');
    const spanItem = document.querySelector('[data-modalProduto="spanItem"]');

    const eventos = ['click', 'touchstart'];

    function abreModal() {
        modalProduto.classList.add('ativo');
    }

    function fechaModal() {
        modalProduto.classList.remove('ativo');
    }

    function adicionarItem() {
        let quantidadeDeItens = +spanItem.innerText;
        spanItem.innerText = quantidadeDeItens + 1;
    }

    function removerItem() {
        let quantidadeDeItens = +spanItem.innerText;
        if (quantidadeDeItens === 1) {

        } else {
            spanItem.innerText = quantidadeDeItens - 1;
        }
    }

    eventos.forEach((evento) => {
        botaoFecharModal.addEventListener(evento, fechaModal);
    })

    imagensDosProdutos.forEach((i) => { i.addEventListener('click', abreModal); });
    botaoDosProdutos.forEach((i) => { i.addEventListener('click', abreModal); });

    botaoAdicionarItem.addEventListener('click', adicionarItem);
    botaoRemoverItem.addEventListener('click', removerItem);

}
initModalProduto();

new SimpleAnime();