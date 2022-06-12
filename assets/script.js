const texto = document.querySelector("pre");
const rascunho =  texto.textContent;

console.log(rascunho.length)

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
}, 9850); //344 20820

setTimeout(function() {
  titulo.classList.add("campoEscrita");
}, 14500); //725 14500

setTimeout(function() {
  titulo.classList.add("responsivoQuadro");
  coração.classList.add("responsivoCoracao");
  eco.classList.add("responsivoCoracao");
}, 24800);//1408 24800

setTimeout(function() {
  coração.classList.add("halfHeart");
  eco.classList.add("halfEcho");
}, 35050);//1894 117660

setTimeout(function() {
  coração.classList.add("fullHeart");
  eco.classList.add("fullEcho");
}, 38500);//2096 130260

setTimeout(function() {
  coração.classList.add("shadowHeart");
}, 43200);//2273 140940

setTimeout(function() {
  coração.classList.add("fullShadowHeart");
  eco.classList.add("Echo");
}, 44200);//2348 145500

setTimeout(function() {
  coração.classList.add("beatHeart");
  eco.classList.add("beatEcho");
}, 51150);//3976 246660

$().ready(function () {
  $(".scroll").animate({
    scrollTop: 10000
  }, 55200);
});

$().ready(function () {
  $("body").animate({
    scrollTop: 10000
  }, 24850);
});


