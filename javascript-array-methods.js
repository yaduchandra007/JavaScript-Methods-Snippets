//Array Methods

//concant()
const array11 = ["a", "b", "c"];
const array21 = ["d", "e", "f"];
const array31 = array11.concat(array21);
console.log(array31); // Expected output: Array ["a", "b", "c", "d", "e", "f"]
const result1 = array1.concat(array2, array3);

_______________________________________________________________________________________________________________________________________________________________________________________________________
//copyWithin()
//Copies a part of one array to another array, while doing so overwrites the copied array instead of changing the number of elements.
const array12 = ["a", "b", "c", "d", "e"];
console.log(array12.copyWithin(0, 3, 4)); // Expected output: Array ["d", "b", "c", "d", "e"]
console.log(array12.copyWithin(1, 3)); // Expected output: Array ["d", "d", "e", "d", "e"]

___________________________________________________________________________________________________________________________________________________________________________
//every()
const array13 = [1, 30, 39, 29, 10, 13];
console.log(array13.every((eleman) => eleman !== 0)); //true
const isBelowThreshold = (currentValue) => currentValue < 10;
console.log(array13.every(isBelowThreshold)); //false

___________________________________________________________________________________________________________________________________________________________________________
//filter()
const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const result4 = words.filter((word) => word.length > 6);
console.log(result4); // Expected output: Array ["exuberant", "destruction", "present"]
const fruits = ["apple", "banana", "grapes", "mango", "orange"];
/**
 * Filter array items based on search criteria (query)
 */
function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}
console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
console.log(array.filter(isPrime)); // [2, 3, 5, 7, 11, 13]

___________________________________________________________________________________________________________________________________________________________________________
//forEach()
const array123 = ["a", "b", "c"];
array123.forEach((element) => console.log(element));
array123.forEach((element, index) => console.log(index + " : " + element));
//As a result of the **map** loop, a new array is created and filled with the results of the operations performed in the loop, but **forEach** does not return a value.
const dizi = [1, 2, 3, 4];
const yeniDizi = dizi.map(function (eleman) {
  return eleman * 2;
});

___________________________________________________________________________________________________________________________________________________________________________
//indexOf()
const beasts = ["ant", "bison", "camel", "duck", "bison"]; // Expected output: 1
// Searching starting from the 2nd index. (that is, it does not see the bison in the 1st index)
console.log(beasts.indexOf("bison", 2)); // Expected output: 4
console.log(beasts.indexOf("giraffe")); // Expected output: -1

___________________________________________________________________________________________________________________________________________________________________________
//lastIndexOf()
//Returns the last index of the element searched in the array. Useful in arrays where there is more than one identical element.
const animals1 = ["Dodo", "Tiger", "Penguin", "Dodo"];
console.log(animals1.lastIndexOf("Dodo")); // Expected output: 3
console.log(animals1.lastIndexOf("Tiger")); // Expected output: 1

___________________________________________________________________________________________________________________________________________________________________________
//map()
const array14 = [1, 4, 9, 16];
// Pass a function to map
const map1 = array14.map((x) => x * 2);
console.log(map1); // Expected output: Array [2, 8, 18, 32]

___________________________________________________________________________________________________________________________________________________________________________
//reduce()
//It is an array method used to obtain results by combining or summing all elements by looping over an array.
const array15 = [1, 2, 3, 4];
const initialValue = 0; //başlangıç değeri
const sum1 = array15.reduce((acc, curr) => acc + curr, initialValue);
//return 0+1+2+3+4 = 10
const array155 = [1, 2, 3, 4];
const sum2 = array1.reduce((prev, current) => {
  return prev + current;
}, 2);
console.log(sum); // 0 start from 2 + 1 + 2 + 3 + 4 = 12

___________________________________________________________________________________________________________________________________________________________________________
//reduceRight()
//Same as reduce just reverses from the end of the array to the beginning.
const array16 = [0, 1, 2, 3, 4];
let sum3 = array16.reduceRight((prev, current) => prev + " - " + current);
console.log(sum3);
("4-3-2-1-0");

const array166 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const result6 = array166.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));
console.log(result6); // Expected output: Array [4, 5, 2, 3, 0, 1]

const array1666 = [
  [0, 1],
  [2, 3],
  [4, 5],
];
const result66 = array1666
  .map((arr) => arr.reduce((prev, current) => prev + current))
  .reduce((prev, current) => prev + current);
console.log(result66); // Expected output: 15

___________________________________________________________________________________________________________________________________________________________________________
//reverse()
const array17 = ["one", "two", "three"];
const reversed1 = array17.reverse();
console.log(reversed1); //result ["three", "two", "one"]```

___________________________________________________________________________________________________________________________________________________________________________
//toReverse()
//Reverses the applied array without changing it.
const array18 = ["one", "two", "three"];
const reversed2 = array18.reverse();
console.log(reversed2); //result ["three", "two", "one"]
console.log(array1); // ['one', 'two', 'three']

___________________________________________________________________________________________________________________________________________________________________________
//slice()
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2)); // Expected output: Array ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4)); // Expected output: Array ["camel", "duck"]
console.log(animals.slice(1, 5)); // Expected output: Array ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2)); // Expected output: Array ["duck", "elephant"]
console.log(animals.slice(2, -1)); // Expected output: Array ["camel", "duck"]

___________________________________________________________________________________________________________________________________________________________________________
//some()
//It is used to return true if the specified condition in the array is met at least once, and false if it is never met.
[0, 1, 2, 3, 4]
  .some((element) => element > 2) //return true
  [(0, 1, 2, 3, 4)].some((element) => element % 2 === 0) //return true
  [(0, 1, 2, 3, 4)].some((element) => element > 5); //return false

function cbFunc(element) {
  return element > 2;
}
[0, 1, 2, 3, 4].some(cbFunc); //return true

function cbThree(element, index, arr) {
  console.log(index + " : " + element);
  return element.length > 7;
}

___________________________________________________________________________________________________________________________________________________________________________
//sort()
const months = ["Ocak", "Mart", "Şubat", "Nisan", "Ali"];
months.sort();
console.log(months); // return ["Ali","Mart","Nisan","Ocak","Şubat"]

const array19 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array19); // Expected output: Array [1, 100000, 21, 30, 4]

//correct orderlet numbers = [40, 100, 1, 5, 25, 10];
numbers.sort(function (a, b) {
  return a - b; //Sorts by saying a - b, if the value of a is greater than b, it can be subtracted.
});

console.log(numbers); // [1, 5, 10, 25, 40, 100]

___________________________________________________________________________________________________________________________________________________________________________
//toSort()
//Sorts back a new array without changing the original array.
let numbers11 = [40, 100, 1, 5, 25, 10];
let newArray = numbers11.toSort(function (a, b) {
  return a - b; //Sorts by saying a - b, if the value of a is greater than b, it can be subtracted.
});
console.log(newArray); //[1, 5, 10, 25, 40, 100]

___________________________________________________________________________________________________________________________________________________________________________
//splice()
//array.splice(start, deleteCount, item1, item2, ...);
let fruits2 = ["elma", "armut", "portakal"];
fruits2.splice(2, 0, "muz", "çilek");
console.log(fruits); //["elma", "armut", "muz", "çilek", "portakal"]
let numbers = [10, 20, 30, 40, 50];
numbers.splice(2, 2);
console.log(numbers); //[10, 20, 50]
let colors = ["kırmızı", "mavi", "yeşil", "sarı"];
colors.splice(1, 1, "turuncu");
console.log(colors); //["kırmızı", "turuncu", "yeşil", "sarı"]

___________________________________________________________________________________________________________________________________________________________________________
//entries()
//An array or object method that returns an array of key-value pairs of each element in an array or an object. Returns a new array.
const fruits3 = ["apple", "banana", "orange"];
const entries = fruits3.entries();
for (const entry of entries) {
  console.log(entry);
}
// [0, 'apple']
// [1, 'banana']
// [2, 'orange']

___________________________________________________________________________________________________________________________________________________________________________
//fill()
const array10 = [1, 2, 3, 4];
console.log(array10.fill(0, 2, 4));
//  Array [1, 2, 0, 0]
console.log(array10.fill(5, 1));
// Array [1, 5, 5, 5]
console.log(array10.fill(6));
//Array [6, 6, 6, 6]

___________________________________________________________________________________________________________________________________________________________________________
//find()
const array111 = [5, 12, 8, 130, 44];
const found1 = array1.find((element) => element > 10);
console.log(found1); // Expected output: 12

const array112 = [
  { id: 1, name: "kadir" },
  { id: 2, name: "süleyman" },
  { id: 3, name: "coşkun" },
];

const found2 = array112.find(({ id }) => id > 1);
console.log(found); // Expected output: return object {id: 2, name: "süleyman"}

___________________________________________________________________________________________________________________________________________________________________________
///findIndex()
const array113 = [5, 12, 8, 130, 44];
const isLargeNumber1 = (element) => element > 13;
console.log(array1.findIndex(isLargeNumber1)); // Expected output: 3

___________________________________________________________________________________________________________________________________________________________________________
//findLast()
const array114 = [5, 12, 50, 130, 44];
const found = array114.find((element) => element > 45);
console.log(found); // Expected output: 130

___________________________________________________________________________________________________________________________________________________________________________
//findLastIndex()
const array115 = [5, 12, 50, 130, 44];
const isLargeNumber = (element) => element > 45;
console.log(array115.findLastIndex(isLargeNumber)); // Expected output: 3

___________________________________________________________________________________________________________________________________________________________________________
//includes()
const pets = ["cat", "dog", "bat", 12];
console.log(pets.includes(12)); //true
console.log(pets.includes("a")); //true
console.log([0, 1, , 2].includes(undefined)); //true

___________________________________________________________________________________________________________________________________________________________________________
//join()
const elements = ["Fire", "Air", "Water"];
console.log(elements.join()); // "Fire,Air,Water"
console.log(elements.join("")); // "FireAirWater"
console.log(elements.join("-")); // "Fire-Air-Water"
console.log([1, undefined, 3].join()); // '1,,3'

___________________________________________________________________________________________________________________________________________________________________________
//keys()
const array1 = ["a", "b", , "c"];
const ite = Object.keys(array1);
console.log(ite); // ["0","1","3"]
const ite2 = Object.keys(array1);
console.log(...ite2); // "0","1","2"

___________________________________________________________________________________________________________________________________________________________________________
//toLocaleString()
let date = new Date();
console.log(date); //return "2023-07-31T06:39:18.979Z"
console.log(date.toLocaleString("tr-TR")); //return "31.07.2023 09:39:18"

___________________________________________________________________________________________________________________________________________________________________________
//pop()
const myArray1 = [1, 2, 3, 4, 5];
const removedElement = myArray1.pop();
console.log(removedElement); // 5 (kaldırılan eleman)
console.log(myArray1); // [1, 2, 3, 4] (kalan dizinin son hali)
const emptyArray = [];
console.log(emptyArray.pop()); // undefined

___________________________________________________________________________________________________________________________________________________________________________
//shift()
const myArray2 = [1, 2, 3, 4, 5];
console.log(myArray2.shift()); // 1 (kaldırılan eleman)
console.log(myArray2); // [2, 3, 4, 5] (kalan dizinin son hali)
console.log(emptyArray.shift()); // undefined

___________________________________________________________________________________________________________________________________________________________________________
//push()
const myArray3 = [1, 2, 3, 4];
console.log(myArray3.push(5, 6)); // 6 (yeni dizi uzunluğu)
console.log(myArray3); // [1, 2, 3, 4, 5, 6] (kalan dizinin son hali)
const myArray4 = [1, 2];
const additionalItems4 = [3, 4, 5];
myArray4.push(...additionalItems);
console.log(myArray4); // [1, 2, 3, 4, 5]```

___________________________________________________________________________________________________________________________________________________________________________
//unshift()
const myArray = [3, 4, 5];
console.log(myArray.unshift(1, 2)); // [1, 2, 3, 4, 5]
const additionalItems = [0, -1];
myArray.unshift(...additionalItems);

