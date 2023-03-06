const main = document.querySelector('main');
const footer = document.querySelector('footer');
const botao = document.querySelector('.botao')

function mudarDeCor(){
    if(main.style.background == 'var(--branco)'){
        main.style.transition = '0.5s';
        main.style.background = '#252525';
        main.style.color = 'var(--branco)';
        footer.style.background = 'var(--corEscura)';
        footer.style.transition = '0.5s';
        botao.style.background = 'var(--corEscura)';
        botao.style.transition = '0.5s'
    } else {
        main.style.background = 'var(--branco)';
        main.style.color = 'var(--preto)';
        footer.style.background = 'var(--corNeutra)';
        botao.style.background = 'var(--corClara)';
    }
}