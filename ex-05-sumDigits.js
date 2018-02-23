/**
 * sumDigits()
 *
 *  Write a function called `sumDigits` that accepts a number
 *  and returns a sum total of the value of the digits
 *
 *
 *  Examples:
 *    sumDigits(12) => 3
 *    sumDigits(1112) => 5
 *    sumDigits(406) => 10
 crear una function  que acente un conjunto de valores 
 separa ese conjunto en un arrar
 sumar cada uno de los valores del array 



 **/


function sumDigits (parametros) {
 let letras = parametros.toString();
 let letrasArray = letras.split("")
  //console.log(letrasArray)
  let suma = 0
  let resultado = 0

  for(let i = 0; i < letrasArray.length; i++ ){
   //console.log(letrasArray[i])

  suma = parseInt(letrasArray[i])
  resultado += suma
  
    
  }
  return resultado
  
}






console.group('JS Iterations Week');
  console.log('%cFunction: sumDigits', 'background-color: green; color: white')
  console.groupCollapsed('Should return 6 from "123"');
    console.assert(sumDigits(123) === 6)
  console.groupEnd();

  console.groupCollapsed('Should return 11 from "911"');
    console.assert(sumDigits(911) === 11)
  console.groupEnd();

  console.groupCollapsed('Should return 12 from "8040"');
    console.assert(sumDigits(8040) === 12)
  console.groupEnd();

  console.groupCollapsed('Should return 15 from "173220"');
    console.assert(sumDigits(173220) === 15)
  console.groupEnd();
console.groupEnd();
