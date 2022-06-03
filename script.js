function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 1 * i)

  });
  
}


const titulo = document.querySelector('.container');
typeWrite(titulo);

const titulo2 = document.querySelector('.titulo-principal2');


setTimeout(function(){
    typeWrite(titulo2);
},5000);

var texto = document.querySelector('.container');
var somador = texto.textContent;
console.log(somador);
alert(somador.length);


