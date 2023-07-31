//function ativaLetra(elemento) { 
      //  const arrTexto = elemento.innerHTML.split(''); 
  //      elemento.innerHTML= ''; 
  //      arrTexto.forEach((letra, i)=>{
  //          setTimeout(()=>{
  //              elemento.innerHTML += letra;
  //          }, 75 * i);
  //          
  //      });

//const titulo = ducument.querySelector('.digitando');
//ativaLetra(titulo);

document.addEventListener("DOMContentLoaded", function() { //funcionou
    function ativaLetra(elemento) {
      const arrTexto = elemento.innerHTML.split('');
      elemento.innerHTML = '';
      arrTexto.forEach((letra, i) => {
        setTimeout(() => {
          elemento.innerHTML += letra;
        }, 75 * i);
      });
    }
  
    function escrevendoLetra() {
      const titulo = document.querySelector('.digitando');
      ativaLetra(titulo);
    }
  
    escrevendoLetra();
  });