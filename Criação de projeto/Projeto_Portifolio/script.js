
//Função escrevendo letras titulo 2
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
//Função escrevendo letras titulo 1
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
          const titulo = document.querySelector('.ola');
          ativaLetra(titulo);
        }
        escrevendoLetra();
      
    });



//funçao ativa menu hamburguer 

function menuMobol(){ 
  const ativaMenu = document.querySelector('.fa-bars');
  const navMenu=document.querySelector('header .navegação-primaria')

  ativaMenu.addEventListener('click',()=>{
  ativaMenu.classList.toggle('fa-x');
  navMenu.classList.toggle('ativado');
});

}
menuMobol();

//função sobremim (expericencia/education)
function sobreMim() {
    const divExperiencia = document.querySelectorAll('.experience_content div');
    const liExperiencia = document.querySelectorAll('.experience_content ul lu');
    const divEducation = document.querySelectorAll('.education_content div');
    const liEducation = document.querySelectorAll('.education_content ul lu');

    divExperiencia[0].classList.add('ativo')
    divEducation[0].classList.add('ativo')
    liExperiencia[0].classList.add('ativo')
    liEducation[0].classList.add('ativo')


    function slideShow(index) { 
      divExperiencia.forEach((div)=> { 
          div.classList.remove('ativo');

      });
      liExperiencia.forEach((botao)=>{
        botao.classList.remove('ativo');
      })
      divExperiencia[index].classList.add('ativo');
      liExperiencia[index].classList.add('ativo');

    }

    function slideShow2(index) { 
      divEducation.forEach((div)=> { 
          div.classList.remove('ativo');

      });
      liEducation.forEach((botao)=>{
        botao.classList.remove('ativo');
      })
      divEducation[index].classList.add('ativo');
      liEducation[index].classList.add('ativo');
    }

    liExperiencia.forEach((event,index)=> { 
      event.addEventListener('click' , ()=>{ 
          slideShow(index)
      });
    });


    liEducation.forEach((event,index)=> { 
      event.addEventListener('click' , ()=>{ 
          slideShow2(index)
      });
    });
}
sobreMim(); 