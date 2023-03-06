const main = document.querySelector('main');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

header.innerHTML = `
        <h1>Troca cores 1.0</h1>
        <ul>
            <a href="#">
                <li><span class="material-symbols-outlined">bolt</span>troca cores</li>
            </a>
            <a href="temas.html">
                <li><span class="material-symbols-outlined">brightness_medium</span>tema escuro e claro</li>
            </a>
        </ul>
`;
main.innerHTML = `
        <h2>clique no botão abaixo para mudar a cor da página</h2>
        <button class="botao" onclick="mudarDeCor()">Mudar!</button>
`;


footer.innerHTML = `
        <p>criado por Diogo Henrique.</p>
`;



let cores = ['var(--corClara)' , 'var(--corSecundaria)' , 'var(--branco)' , '#B836D9' , '#DAA069', '#DBD217' , '#A0E1C1' , '#4F9DA9']

function mudarDeCor() {
    const randomNumber =getRandomNumber();

    main.style.background = cores[randomNumber];
};

function getRandomNumber() {
    return Math.floor(Math.random() * cores.length)
}

