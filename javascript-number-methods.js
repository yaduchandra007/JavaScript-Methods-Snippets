//Number Methods

//Number(), + , parseInt(), parseFloat()

Console.log(Number("123")); // return 123 (convert string to number)
console.log(+"123");  // return 123 (convert string to number)
console.log(parseInt("123")); // return 123 (convert string to number)
console.log(parseInt("12.34")); // return 12
console.log(parseFloat("12.34")); // return 12.34 (convert string to number)

___________________________________________________________________________________________________________________________________________________________________________
//toString()
const nbr = 15
console.log(nbr.toString()) // return 15

___________________________________________________________________________________________________________________________________________________________________________
//toFixed()
const n1 = 214.45
console.log(n1.toFixed(1));// "214.4"
console.log(n1.toFixed(4));// "214.4500"  
console.log(+n1.toFixed(4));// 214.4500

___________________________________________________________________________________________________________________________________________________________________________
//toPrecision()
let num = 3.14159;
let formattedNum = num.toPrecision(4); // '3.142'
let integerNum = 42;
let formattedInt = integerNum.toPrecision(4); // '42.00'

___________________________________________________________________________________________________________________________________________________________________________
//toLocaleString()
const n2 = 1800000;
console.log(n2.toLocaleString());// return "1.800.000"
console.log(n1.toLocaleString("tr-TR"));// return "1.800.000"

___________________________________________________________________________________________________________________________________________________________________________
//Number.isInteger()
console.log(Number.isInteger(24)); // true
console.log(Number.isInteger(24.00)); // true
console.log(Number.isInteger(24.04)); // false
console.log(Number.isInteger([1,2,3])); // false
console.log(Number.isInteger("24")); // false

___________________________________________________________________________________________________________________________________________________________________________
//All Math Functions

//Math.abs()
console.log(Math.abs(5)); // 5 
console.log(Math.abs(-5)); // 5 
console.log(Math.abs(0)); // 0 
console.log(Math.abs(-3.14)); // 3.14 
console.log(Math.abs("42")); // 42 
console.log(Math.abs("Hello")); // NaN 

___________________________________________________________________________________________________________________________________________________________________________
//Math.ceil()
console.log(Math.ceil(0.95)); // Expected output: 1
console.log(Math.ceil(4)); // Expected output: 4
console.log(Math.ceil(7.004)); // Expected output: 8
console.log(Math.ceil(-7.004)); // Expected output: -7

___________________________________________________________________________________________________________________________________________________________________________
//Math.floor()
console.log(Math.floor(5.95));// Expected output: 5
console.log(Math.floor(5.05));// Expected output: 5
console.log(Math.floor(5));// Expected output: 5
console.log(Math.floor(-5.05));// Expected output: -6

___________________________________________________________________________________________________________________________________________________________________________
//Math.max()
console.log(Math.max(5, 10, 15, 20)); // 20 
console.log(Math.max(-5, 3, -10, 8)); // 8 
console.log(Math.max(0, 0, 0, 0)); // 0 
console.log(Math.max(3.14, 2.71, 1.618)); // 3.14 
console.log(Math.max("42", "100", "7")); // 100 
console.log(Math.max(10, "Hello", -8)); // 10 
console.log(Math.max()); // -Infinity 

___________________________________________________________________________________________________________________________________________________________________________
//Math.min()
console.log(Math.min(5, 10, 15, 20)); // 5 
console.log(Math.min(-5, 3, -10, 8)); // -10 
console.log(Math.min(0, 0, 0, 0)); // 0 
console.log(Math.min(3.14, 2.71, 1.618)); // 1.618 
console.log(Math.min("42", "100", "7")); // 7 
console.log(Math.min(10, "Hello", -8)); // -8 
console.log(Math.min()); // Infinity 

___________________________________________________________________________________________________________________________________________________________________________
//Math.pow()
console.log(Math.pow(2, 3)); // 8 - 2^3 = 2 * 2 * 2 = 8
console.log(Math.pow(5, 2)); // 25 - 5^2 = 5 * 5 = 25
console.log(Math.pow(10, 0)); // 1 
console.log(Math.pow(3, -2)); // 0.1111111111111111 - 3^(-2) = 1 / (3^2) = 1 / 9 = 0.1111111111111111
console.log(Math.pow(4, 0.5)); // 2 - 4^(0.5) = Karekök(4) = 2

___________________________________________________________________________________________________________________________________________________________________________
//Math.random()
const randomNumber = Math.random();
console.log(randomNumber); // 0.7267456282563128
const randomBetween0And10 = Math.random() * 10;
console.log(randomBetween0And10); // 7.267456282563128
const randomIntBetween1And100 = Math.floor(Math.random() * 100) + 1;
console.log(randomIntBetween1And100); // 42

___________________________________________________________________________________________________________________________________________________________________________
//Math.round()
console.log(Math.round(3.2)); // 3  
console.log(Math.round(6.8)); // 7 
console.log(Math.round(1.5)); // 2 
console.log(Math.round(2.4)); // 2
console.log(Math.round(-3.7)); // -4

___________________________________________________________________________________________________________________________________________________________________________
//Math.sing()
console.log(Math.sign(5)); // 1 
console.log(Math.sign(-5)); // -1 
console.log(Math.sign(0)); // 0 
console.log(Math.sign("42")); // 1 
console.log(Math.sign("-3.14")); // -1 
console.log(Math.sign("Hello")); // NaN