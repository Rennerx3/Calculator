const d = document;
const BASE_URL = window.location.href.replace(/\/$/, '');

const $calculo = d.querySelector(".calculo"),
     $resultado = d.querySelector(".resultado"),
     $out = d.querySelector(".out"),
     $outDos = d.querySelector(".outDos"),
     $outTres = d.querySelector(".outTres"),
     $outCuatro = d.querySelector(".outCuatro"),
     $botonesContenido = d.querySelectorAll(".botones div p");

let acumulador = '';
let resultado = 0;
let numeros = [];
let signos = [];

d.addEventListener('click', (e) => {
     
     if (e.target.innerText === 'C'){
          resultado = 0;
          acumulador = '';
          numeros = [];
          signos = [];
          $calculo.firstElementChild.textContent = ''
          return $resultado.firstElementChild.textContent = 0;
     }

     if (e.target === $out ) {
          $calculo.firstElementChild.textContent = '';
          return $resultado.firstElementChild.textContent= 'Happy Day';
      }
      
      if (e.target === $outDos ) {
          $calculo.firstElementChild.textContent = '';
          $resultado.firstElementChild.textContent= 'Happy Day';
       }   
      
      if (e.target === $outTres ) {
          $calculo.firstElementChild.textContent = '';
          $resultado.firstElementChild.textContent= 'You are big';
       }   
      
      if (e.target === $outCuatro ) {
          $calculo.firstElementChild.textContent = '';
          $resultado.firstElementChild.textContent= 'You are big';
       }   

     if (e.target.innerText === '=') {
          try {
               if(numeros.length === 1 && numeros[0] !== ''){
               $resultado.firstElementChild.textContent = numeros[0];
               } else if(numeros.length > 1){

               $calculo.firstElementChild.textContent = numeros[0] + signos[0] + numeros[numeros.length - 1] + ' ='

               $resultado.firstElementChild.textContent = resultado;

               } else if(signos.length > 0 && numeros.length === 0 || acumulador !== ''){
                    $resultado.firstElementChild.textContent = ''
               } else{
                    $resultado.firstElementChild.textContent = 0;
               }
               
          } catch (error) {
               
               $resultado.firstElementChild.textContent = `${error}`;
          }
          if(resultado != 0){
               acumulador = resultado
          } else{
               acumulador = ''
          }
          $resultado.firstElementChild.textContent = '';
          
          numeros = [resultado];
          if(numeros.length ===1){
               $resultado.firstElementChild.textContent = resultado
          }

          signos = [];
     } else if (e.target.closest(".botones div")) {
     

          acumulador += e.target.innerText; 
          
          
          numeros = acumulador.match(/\d+(,\d+)?/g).map((cadena) => {
               return Number(cadena.replace(',', '.'));
           });

          $resultado.firstElementChild.textContent = numeros[numeros.length - 1];


          signos = acumulador.match(/[*+\/%-]/g);

         
          resultado = numeros[0];
         

          for(let i = 0; i < numeros.length; i++){

               if(signos[i] === '+'){
                    $calculo.firstElementChild.textContent = numeros[i] + signos[i] ;

                    if(numeros.length > 1){
                         resultado += numeros[numeros.length -1];
                         if(e.target.innerText === '+'){
                              $calculo.firstElementChild.textContent = resultado + ' +';
                              $resultado.firstElementChild.textContent = resultado
                              acumulador = `${resultado}+`
                              numeros = [resultado]; 
                         }
                    }
               } else if(signos[i] === '*'){
                    $calculo.firstElementChild.textContent = numeros[i] + signos[i];

                    if(numeros.length > 1){
                         resultado *= numeros[numeros.length -1];
                         if(e.target.innerText === '*'){
                              $calculo.firstElementChild.textContent = resultado + ' *';
                              $resultado.firstElementChild.textContent = resultado
                              acumulador = `${resultado}*`
                              numeros = [resultado]; 
                         }
                    }
               } else if(signos[i] === '/'){
                    $calculo.firstElementChild.textContent = numeros[i] + signos[i];

                    if(numeros.length > 1){
                         resultado /= numeros[numeros.length -1];
                         if(e.target.innerText === '/'){
                              $calculo.firstElementChild.textContent = resultado + ' /';
                              $resultado.firstElementChild.textContent = resultado
                              acumulador = `${resultado}/`
                              numeros = [resultado]; 
                         }
                    }
               } else if(signos[i] === '-'){
                    $calculo.firstElementChild.textContent = numeros[i] + signos[i];

                    if(numeros.length > 1){
                         resultado -= numeros[numeros.length -1];
                         if(e.target.innerText === '-'){
                              $calculo.firstElementChild.textContent = resultado + ' -';
                              $resultado.firstElementChild.textContent = resultado
                              acumulador = `${resultado}-`
                              numeros = [resultado]; 
                         }
                    }
               } else if(signos[i] === '%'){
                    $calculo.firstElementChild.textContent = numeros[i] + signos[i];

                    if(numeros.length > 1){
                         resultado %= numeros[numeros.length -1];
                         if(e.target.innerText === '%'){
                              $calculo.firstElementChild.textContent = resultado + ' %';
                              $resultado.firstElementChild.textContent = resultado
                              acumulador = `${resultado}%`
                              numeros = [resultado]; 
                         }
                    }
               } 

               if(signos.length > 1){
                    signos = [signos[signos.length - 1]] ;
                    acumulador = resultado + signos;
                    $calculo.firstElementChild.textContent = resultado + signos;
                    $resultado.firstElementChild.textContent = resultado;
                    numeros = [resultado];
               }
          }

          console.log(resultado)
          console.log(acumulador)
          console.log(numeros)
          console.log(signos)

          
     }
     
});