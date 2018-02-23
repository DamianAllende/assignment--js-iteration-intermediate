/**
 * findLongestWord()
 *
 * Write a function that takes a string of words and returns the longest word.
 * i.e. findLongestWord("a book full of dogs") should return "book"
 *
crea una funcion que se llame  findLongestWord
si es un string convertirlo en cadena
comprar cada elemento de la cadena si es mayor al otro parametro que viene


**/


function findLongestWord(params){
  let newArray = params.split(" ")
  let hijo = 0
  let palabra = ""

  //console.log(newArray)
  for (let i = 0; i < newArray.length; i++){
      //console.log(newArray[i].length)
      if (hijo < newArray[i].length) {
          hijo = newArray[i].length
          palabra = newArray[i]
      }
    
  }

  return palabra

}

//console.log(findLongestWord('i have baskets full of lemons'))



console.group('JS Iterations Week');
  console.log('%cFunction: findLongestWord', 'background-color: green; color: white')
  console.groupCollapsed('Should return "baskets" from "I have baskets full of lemons"');
    console.assert(findLongestWord('i have baskets full of lemons') === 'baskets')
  console.groupEnd();

  console.groupCollapsed('Should return "Alexander" from "Alexander shouldn’t talk anymore"');
    console.assert(findLongestWord("Alexander shouldn't talk anymore") === 'Alexander')
  console.groupEnd();

  console.groupCollapsed('Should return "Texas" from "don’t mess with Texas"');
    console.assert(findLongestWord("don't mess with Texas") === 'Texas')
  console.groupEnd();

  console.groupCollapsed('Should return "time" from "a time to act."');
    console.assert(findLongestWord('a time to act.') === 'time')
  console.groupEnd();
console.groupEnd();
