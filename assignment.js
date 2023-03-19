
//! COUNT THE OCCURENCES
function countWords(text){
    const words =text.split("")
    const WordCounts = new Map();

    for (const word of words){
        if(!WordCounts.has(word)){
            WordCounts.set(word,1);
        }else{
            WordCounts.set(word,WordCounts.get(word)+1);
        }
    }
    return WordCounts;
}

const text = "the quick brown fox jumps over the lazy dog";
const counts = countWords(text)
console.log(counts);

//***************************************************************************************************** */
    //! ONLY UNIQUE ITEMS ARE ALLOWED
function removeDuplicates(numbers) {
    const uniqueNumbers = new Set(numbers);
    return uniqueNumbers;
  }
  const numbers = [1, 2, 2, 3, 3, 3, 4, 5, 5];
  const uniqueNumbers = removeDuplicates(numbers);
  console.log(uniqueNumbers); 

//***************************************************************************************************** */
    //! SWAP THE VALUES 
function swapValues(x, y) {
    [x, y] = [y, x];
    return [x, y];
  }

  let x = 5;
let y = 10;
[x, y] = swapValues(x, y);
console.log(x, y); 

//***************************************************************************************************** */
//!ACCESS RANDOM ELEMENTS
function extractElements(array) {
    const [first, second, ...rest] = array;
    const last = rest.pop();
    return [first, second, last];
  }

  const array = [1, 2, 3, 4, 5];
const extracted = extractElements(array);
console.log(extracted); 

//***************************************************************************************************** */
//! MIN AND MAX VALUES

function findMinMax(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    return { max, min };
  }

  const arr1 = [5, 2, 7, 1, 9];
const result = findMinMax(arr1);
console.log(result); 

//***************************************************************************************************** */

//!NESTED OBJECTS

function extractNameAndStreet(person) {
    const { name , address: { street }} = person;
    return { name, street};
  }
  
const person = {
    name: 'Nityom',
    age: 19,
    address: {
      street: 'Katraj',
      city: 'Pune',
      state: 'Maharashtra',
      zip: '440116'
    }
  };
  
  const nikaal = extractNameAndStreet(person);
  console.log(nikaal); 
  


