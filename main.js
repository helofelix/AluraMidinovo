function tocaSomPom(idElementoAudio){
document.querySelector(idElementoAudio).play(); 

}

 document.querySelectorAll('.tecla');
 const listaDeTeclas = document.querySelectorAll('.tecla');
    
    listaDeTeclas[contador].onclick = function() {
     tocaSomPom('#som_tecla_splash');
    }

    let contador = 0;

   // Estrutura de repetição - Enquanto
    while(contador< listaDeTeclas.length) {
    const instrumento = listaDeTeclas[contador].classList[1];
     console.log(instrumento);
      listaDeTeclas[contador].onclick = tocaSomPom;
      contador = contador +1;
   console.log(contador);
    }