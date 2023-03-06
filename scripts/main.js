const main = document.querySelector('main');

let cores = ['var(--corClara)' , 'var(--corSecundaria)' , 'var(--branco)' , '#B836D9' , '#DAA069', '#DBD217' , '#A0E1C1' , '#4F9DA9']

function mudarDeCor() {
    const randomNumber =getRandomNumber();

    main.style.background = cores[randomNumber];
};

function getRandomNumber() {
    return Math.floor(Math.random() * cores.length)
}

