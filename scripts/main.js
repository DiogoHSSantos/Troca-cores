const main = document.querySelector('#main');
const botaoTema = document.querySelector('.tema');

let iconTema = document.querySelector('.bx');


botaoTema.addEventListener('click', () => {
    iconTema.classList.toggle('bxs-moon');

    iconTema.classList.toggle('bxs-sun');
    
    temaClaroeEcuro()
     

});


const areaResultado = document.querySelector('.areaResultado');
const botaoMudaCor = document.querySelector('.botaoTrocaCor');

botaoMudaCor.addEventListener('click', ()=>{
    let color = generateColor();

    areaResultado.style.background = color;
    areaResultado.textContent = color;

})




