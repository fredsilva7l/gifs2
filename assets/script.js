
var texto = document.querySelector(".maquinaEscrever");
var rascunho = texto.textContent;
console.log("23:14");

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 50 * i)

  });
}

const corpo = document.querySelector('body');

const titulo = document.querySelector('.maquinaEscrever');
typeWrite(titulo);

const coração = document.querySelector('.heart')
const eco = document.querySelector('.echo')
const nomeVariavel = document.querySelector('.nameMarcador')
const musica = document.querySelector('.audio')

setTimeout(function() {
  corpo.classList.add("corpo");
}, 17200); //344 20820

setTimeout(function() {
  musica.classList.add("none");
  titulo.classList.add("campoEscrita");
}, 1); //725 36250

setTimeout(function() {
  titulo.classList.add("responsivoQuadro");
  coração.classList.add("responsivoCoracao");
  eco.classList.add("responsivoCoracao");
}, 1);//1408 70400

setTimeout(function() {
  coração.classList.add("halfHeart");
  eco.classList.add("halfEcho");
}, 94700);//1894 117660

setTimeout(function() {
  coração.classList.add("fullHeart");
  eco.classList.add("fullEcho");
}, 104800);//2096 130260

setTimeout(function() {
  coração.classList.add("shadowHeart");
}, 113650);//2273 140940

setTimeout(function() {
  coração.classList.add("fullShadowHeart");
  eco.classList.add("Echo");
}, 117400);//2348 145500

setTimeout(function() {
  nomeVariavel.classList.add("nome");
}, 133550);//2671 165600

setTimeout(function() {
  coração.classList.add("beatHeart");
  eco.classList.add("beatEcho");
}, 198800);//3976 246660

$().ready(function(){
  $(".corpo").animate({ scrollTop: 1000}, 5000);
  $(".corpo").animate({ scrollTop: 1000}, 10000);
  $(".corpo").animate({ scrollTop: 1000}, 15000);
  $(".corpo").animate({ scrollTop: 1000}, 20000);
  $(".corpo").animate({ scrollTop: 1000}, 25000);
  $(".corpo").animate({ scrollTop: 1000}, 30000);
  $(".corpo").animate({ scrollTop: 1000}, 35000);
  $(".corpo").animate({ scrollTop: 1000}, 40000);
  $(".corpo").animate({ scrollTop: 1000}, 45000);
  $(".corpo").animate({ scrollTop: 1000}, 50000);
  $(".corpo").animate({ scrollTop: 1000}, 55000);
  });

