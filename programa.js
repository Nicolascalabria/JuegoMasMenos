let numeroInicial = getRandomInt(1, 10);
let contenedorNumero = document.getElementById("numeroJuego");
contenedorNumero.innerHTML = numeroInicial;



function Jugar(seleccion) {

  let nuevoNumero = getRandomInt(1, 10);
  console.log(numeroInicial);
  console.log(nuevoNumero);
  contenedorNumero.innerHTML = nuevoNumero;

  let esMayor = nuevoNumero >= numeroInicial;
  let esMenor = nuevoNumero <= numeroInicial;
  if (
    (seleccion == "mayor" && esMayor) ||
    (seleccion == "menor" && esMenor)
  ) {
    numeroInicial = nuevoNumero;
  } else {
  
  document.getElementById('inne').remove();
    document.getElementById('body').innerHTML='<div id="inne"><div class="contenedorMayor"><h1 class="title">PERDISTE</h1><div class="contenedor"><button id="juegoNuevo" onclick="JugarDeNuevo()">JUGAR DE NUEVO</button></div></div></div>';
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function JugarDeNuevo(){
  document.getElementById('inne').remove();
  document.getElementById('body').innerHTML="<div id="+"inne"+"><div class="+"contenedorMayor"+"><h1 class="+"title"+">MAYOR O MENOR</h1><div class="+"contenedorNumero"+"><p id="+"numeroJuego"+" class="+"estiloNumero"+"></p></div><div class="+"contenedor"+"><button id="+"botonMayor"+" onclick="+"Jugar("+"'mayor'"+")"+">MAYOR</button><button id='botonMenor' onclick="+"Jugar("+"'menor'"+")"+">MENOR</button></div></div></div>";
  numeroInicial = getRandomInt(1, 10);
  console.log(numeroInicial);
  contenedorNumero = document.getElementById("numeroJuego");
  contenedorNumero.innerHTML = numeroInicial;
  console.log("entrada pos perdida");
  
}