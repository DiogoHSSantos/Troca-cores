const main = document.querySelector('main');
const footer = document.querySelector('footer');
const botao = document.querySelector('.botao');
const header = document.querySelector('header');

header.innerHTML = `
        <h1>Troca cores 1.0</h1>
        <ul>
            <a href="index.html">
                <li><span class="material-symbols-outlined">bolt</span>troca cores</li>
            </a>
            <a href="#">
                <li><span class="material-symbols-outlined">brightness_medium</span>tema escuro e claro</li>
            </a>
        </ul>`;

main.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias autem dignissimos suscipit, dicta quasi quibusdam dolorem similique quia fugiat officiis in illum tenetur vel iusto cupiditate. Ipsa consectetur aliquam quia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero iusto nesciunt eius nemo esse adipisci quos obcaecati odio dolor quo molestias exercitationem, quam maiores porro itaque. Exercitationem animi quia eveniet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat voluptatum similique perferendis cupiditate quisquam iste recusandae, rerum tenetur dolores repellat saepe, iure ipsum fuga at non dicta, inventore et autem.</p>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia hic veritatis laboriosam fuga nesciunt illum, sint doloribus quaerat, impedit a laudantium aperiam ipsam tempore quam eius dignissimos? Quisquam, iure? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure earum maxime aut totam dolor nemo accusantium iste, cum placeat? Id, totam. Ipsam porro iure perferendis natus, sint impedit delectus magnam.</p>
        

<h2>tema escuro/claro</h2>
<button class="botao" onclick="mudarDeCor()">Mudar!</button>`;

footer.innerHTML = `
    <p>criado por Diogo Henrique.</p>
`

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