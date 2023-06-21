function temaClaroeEcuro(){
    let iconSun = document.querySelector('.bxs-sun');
    let iconMoon = document.querySelector('.bxs-moon');
    main.style.transition = '.4s'
    if(iconSun){
        iconMoon = false;
        main.style.background = '#e9e9e9';
        main.style.color = "#000000";

      } else if(iconMoon){
        iconSun = false;
        main.style.background = '#303030';
        main.style.color = "#e4e4e4"
    }
}

function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
    
  }