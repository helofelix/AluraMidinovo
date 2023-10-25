function tocaSomPom(idElementoAudio){
const elemento = document.querySelector(idElementoAudio);
if (elemento === null){
   alert('Elemento não encontrado');
}
 if (elemento != null){
   elemento.play();
 }

}

 const listaDeTeclas = document.querySelectorAll('.tecla');
   //para
for (let contador = 0;contador < listaDeTeclas.length; contador++) {

   const tecla = listaDeTeclas[contador];
   const instrumento = tecla.classList[1];
   const idAudio = `#som_ ${instrumento}`;

   tecla.onclick = function () {
      tocaSomPom(idAudio);
   };

   tecla.onkeydown = function (evento) {
     console.log(evento.code == 'Space')
     
      if (evento.code === 'Enter' || evento.code === 'Space' ) { 

       tecla.classList.add('ativa');
      }
   }

   tecla.onkeyup = function () {
      tecla.classList.remove('ativa');
   }
}