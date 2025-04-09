const body = document.body;
const lista1 = document.getElementById('principal');
const ol1 = document.getElementsByClassName('lista')[0];
const contadorExibicao = document.getElementById('contador');
let contador = 0;

function mudarCor(){
    // Definindo o novo background
    //alert(ol1.style);
    lista1.style.transition = "background-color 2s";
    lista1.style.background = generateColor();
    ol1.style.background = "yellow";
    if(body.style.background == "lightblue"){
        body.style.transition = "background-color 1s";
        body.style.background = "purple";
    }else{
        body.style.transition = "background-color 1s";
        body.style.background = "lightblue";
    }
    
}

function somar(){
    //alert("Somando");
    contador++;
    contadorExibicao.innerHTML = contador;
}


function generateColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    //console.log(generateColor()) 
    return color;    
  }

