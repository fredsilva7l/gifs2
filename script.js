function typeWrite(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function(letra, i){   
    
  setTimeout(function(){
      elemento.innerHTML += letra;
  }, 50 * i)

});
}
const titulo = document.querySelector('.maquinaEscrever');
typeWrite(titulo);
