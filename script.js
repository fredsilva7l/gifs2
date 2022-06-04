
var texto = document.querySelector(".maquinaEscrever");
var rascunho = texto.textContent;
console.log(rascunho.length);

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 100 * i)

  });
}

const corpo = document.querySelector('body');

const titulo = document.querySelector('.maquinaEscrever');
typeWrite(titulo);

const coração = document.querySelector('.heart')
const eco = document.querySelector('.echo')
const nomeVariavel = document.querySelector('.nameMarcador')

setTimeout(function() {
  corpo.classList.add("corpo");
}, 31000);

setTimeout(function() {
  titulo.classList.add("campoEscrita");
}, 68000);

setTimeout(function() {
  titulo.classList.add("responsivoQuadro");
  coração.classList.add("responsivoCoracao");
  eco.classList.add("responsivoCoracao");
}, 148000);

setTimeout(function() {
  coração.classList.add("halfHeart");
  eco.classList.add("halfEcho");
}, 202000);

setTimeout(function() {
  coração.classList.add("fullHeart");
  eco.classList.add("fullEcho");
}, 225600);

setTimeout(function() {
  coração.classList.add("shadowHeart");
}, 244700);

setTimeout(function() {
  coração.classList.add("fullShadowHeart");
  eco.classList.add("Echo");
}, 253700);

setTimeout(function() {
  nomeVariavel.classList.add("nome");
}, 289000);

setTimeout(function() {
  coração.classList.add("beatHeart");
  eco.classList.add("beatEcho");
}, 429000);


