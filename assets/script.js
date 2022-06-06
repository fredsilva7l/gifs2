
var texto = document.querySelector(".maquinaEscrever");
var rascunho = texto.textContent;
console.log(rascunho.length);

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
  $(".corpo").animate({ scrollTop: 100}, 500);
  $(".corpo").animate({ scrollTop: 100}, 1000);
  $(".corpo").animate({ scrollTop: 100}, 1500);
  $(".corpo").animate({ scrollTop: 100}, 2000);
  $(".corpo").animate({ scrollTop: 100}, 2500);
  $(".corpo").animate({ scrollTop: 100}, 3000);
  $(".corpo").animate({ scrollTop: 100}, 3500);
  $(".corpo").animate({ scrollTop: 100}, 4000);
  $(".corpo").animate({ scrollTop: 100}, 4500);
  $(".corpo").animate({ scrollTop: 100}, 5000);
  $(".corpo").animate({ scrollTop: 100}, 5500);

  $(".corpo").animate({ scrollTop: 100}, 6000);
  $(".corpo").animate({ scrollTop: 100}, 6500);
  $(".corpo").animate({ scrollTop: 100}, 7000);
  $(".corpo").animate({ scrollTop: 100}, 7500);
  $(".corpo").animate({ scrollTop: 100}, 8000);
  $(".corpo").animate({ scrollTop: 100}, 8500);
  $(".corpo").animate({ scrollTop: 100}, 9000);
  $(".corpo").animate({ scrollTop: 100}, 9500);
  $(".corpo").animate({ scrollTop: 100}, 10000);
  $(".corpo").animate({ scrollTop: 100}, 10500);
  $(".corpo").animate({ scrollTop: 100}, 11000);

  $(".corpo").animate({ scrollTop: 100}, 11500);
  $(".corpo").animate({ scrollTop: 100}, 12000);
  $(".corpo").animate({ scrollTop: 100}, 12500);
  $(".corpo").animate({ scrollTop: 100}, 13000);
  $(".corpo").animate({ scrollTop: 100}, 13500);
  $(".corpo").animate({ scrollTop: 100}, 1400);
  $(".corpo").animate({ scrollTop: 100}, 14500);
  $(".corpo").animate({ scrollTop: 100}, 15000);
  $(".corpo").animate({ scrollTop: 100}, 15500);
  $(".corpo").animate({ scrollTop: 100}, 16000);
  $(".corpo").animate({ scrollTop: 100}, 16500);

  $(".corpo").animate({ scrollTop: 100}, 17000);
  $(".corpo").animate({ scrollTop: 100}, 17500);
  $(".corpo").animate({ scrollTop: 100}, 18000);
  $(".corpo").animate({ scrollTop: 100}, 18500);
  $(".corpo").animate({ scrollTop: 100}, 19000);
  $(".corpo").animate({ scrollTop: 100}, 19500);
  $(".corpo").animate({ scrollTop: 100}, 20000);
  });

