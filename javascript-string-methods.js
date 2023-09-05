// String Methods


//String.fromCharCode()
console.log(String.fromCharCode(246, 199)); //return "too"

_____________________________________________________________________________________________________________________________________________________________________________________________________
//String.raw()
//Escape expressions such as **`\n`**, **`\t`**, **`\\`** (leaving a space, going to the next line, etc.) ensure that the string value remains as a string value without performing its function. .
console.log(`hello\njavascript`);
/*"hello
javascript"*/
console.log(String.raw`hello\njavascript`);
// "hello javascript"

_____________________________________________________________________________________________________________________________________________________________________________________________________
//length()
const myString = "bluebells";
console.log(myString.length); //return 9
myString.length = 4; //Provides no effect. The value and length are the same.

______________________________________________________________________________________________________________________________________________________________________________________________________
//concat()
const str11 = "Hello";
const str21 = "World";
console.log(str11.concat(" ", str21)); //return "Hello World"
const arr = ["Merhaba", "!", "Sisteme", " ", "Hoşgeldiniz"];
console.log("Burak".concat(...arr)); //return "Burak Merhaba!Sisteme Hoşgeldiniz."
const arr2 = [1, 2, 3, 4];
console.log("".concat(...arr2)); //return "1234";

_______________________________________________________________________________________________________________________________________________________________________________________________________
//endsWith()
const str12 = "Cats are the best!";
console.log(str12.endsWith("best!")); //return true
const str2 = "Hello World";
console.log(str2.endsWith("llo", 5)); //return true
//(value,endPosition)
// Search for the value "llo" starting from the value at index 5 and going backwards (index 4. 3).```

_______________________________________________________________________________________________________________________________________________________________________________________________________
//includes()
const sentence = "The quick brown fox jumps over the lazy dog.";
const searchChars = "FoX";
console.log(
  `Bu cümlede ${searchChars} kelimesi ${
    sentence.toLowerCase().includes(searchChars.toLowerCase()) ? "geçiyor." : "geçmiyor."
  }`
);
// return "Bu cümlede FoX kelimesi geçiyor"

_______________________________________________________________________________________________________________________________________________________________________________________________________
//indexOf()
const paragraph = "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
console.log(paragraph.indexOf("quick")); //return 4 (4. indexten sonra bu kelime var)
console.log(paragraph.indexOf("test")); //return -1 (yok)

_______________________________________________________________________________________________________________________________________________________________________________________________________
//localeCompare()
//It compares two strings according to a given locale and arrangement and returns the results. When performing string comparison, text order, case, diacritics, and other language features are taken into account. Therefore, it is preferred to get correct string ordering according to language and localization rules. This way string sequences containing characters from different languages ​​and special markings and diacritics can be handled properly.
`localeCompare(compareString, locales, options)`;
// 1. If **`string`** is less than **`compareString`**, `-1` is returned.
// 2. If **`string`** and **`compareString`** are equal, **`0`** is returned.
// 3. If **`string`** is greater than **`compareString`**, **`1`** is returned.
console.log("apple".localeCompare("banana")); //return -1 (dize1 , dize2 den küçük)
console.log("apple".localeCompare("apple")); //return 0 (eşit)
console.log("Café".localeCompare("Café", undefined, { sensitivity: "variant" })); //return -1
console.log("cafe".localeCompare("Café", undefined, { sensitivity: "base" })); //return 1
console.log("Cafe".localeCompare("Café", undefined, { sensitivity: "case" })); //return 0
console.log("cafe".localeCompare("Café", undefined, { sensitivity: "accent" })); //return 0

_______________________________________________________________________________________________________________________________________________________________________________________________________
//padStart()
//It iterates to the beginning of a string value up to a certain length, filling it with the corresponding value.
let str = "45";
console.log(str.padStart(5, "1")); // "11145"
const cardNumber = "2034399002125581";
const private = cardNumber.slice(-4).padStart(cardNumber.length, "*");
console.log(private); // "************5581"

_______________________________________________________________________________________________________________________________________________________________________________________________________
//padEnd()
//Repeats a string to the end of the value and fills it with the corresponding value.
let strn = "Hello World";
console.log(strn.padEnd(14, ".")); // "Hello World..."
console.log(strn.padEnd(strn.length + 3, "!")); // "Hello World!!!"
console.log("abc".padEnd(10)); // "abc       "
console.log("abc".padEnd(6, "123456")); // "abc123"

_______________________________________________________________________________________________________________________________________________________________________________________________________
//repead()
//Returns a new string that repeats the relevant string value the specified number of times.
const cardNumber1 = "123";
console.log(cardNumber1.repeat(2)); // "123123"

_______________________________________________________________________________________________________________________________________________________________________________________________________
//replace()
const strnn = "Ali ata bak";
const strnnn = "Ali ata bak ata";
console.log(strnn.replace("ata", "arabaya")); // "Ali arabaya bak"
console.log(strnnn.replace("ata", "arabaya")); // "Ali arabaya bak ata"

_______________________________________________________________________________________________________________________________________________________________________________________________________
//replaceAll()
const strng = "Ali ata bak ata";
console.log(strng.replaceAll("ata", "arabaya")); // "Ali arabaya bak arabaya"

_______________________________________________________________________________________________________________________________________________________________________________________________________
//slice()
const str111 = "The quick brown fox jumps over the lazy dog.";
console.log(str111.slice(31)); // Expected output: "the lazy dog."
console.log(str111.slice(4, 19)); // Expected output: "quick brown fox"
console.log(str111.slice(-4)); // Expected output: "dog."
console.log(str111.slice(-9, -5)); // Expected output: "lazy"

_______________________________________________________________________________________________________________________________________________________________________________________________________
//split()
//Searches the value specified in the related string expression and splits it into parts from this value and returns it as an array.
const str222 = "Ali ata bak atın rengi kırmızı";
console.log(str222.split("ata")); //["Ali "," bak atın rengi kırmızı"]
console.log(str222.split("ata")); //["Ali","ata","bak","atın","rengi","kırmızı"]
console.log(str222.split(" ", 3)); //["Ali","ata","bak"] (en fazla 3 değer döndür)

_______________________________________________________________________________________________________________________________________________________________________________________________________
//startWith()
const str1 = "Saturday night plans";
console.log(str1.startsWith("Sat")); // true
console.log(str1.startsWith("Sat", 3)); // false (3. indexten itibaren kontrol et)
console.log(str1.startsWith("urd", 3)); // true

_______________________________________________________________________________________________________________________________________________________________________________________________________
//substring()
//It returns the value according to the starting and ending index of the relevant string.
const str3 = "Mozilla";
console.log(str3.substring(1, 3)); // "oz"
console.log(str3.substring(2)); // "zilla" (bitiş index değeri yoksa sonuna kadar keser)
console.log(str3.substring(2, 1)); // "oz" (sondan başa doğru da aynı değer alınabilir)

_______________________________________________________________________________________________________________________________________________________________________________________________________
//toLocaleLowerCase() , toLocaleUpperCase()
console.log("DUBAI GÜZEL".toLocaleLowerCase("tr")); // dubaı güzel
console.log("DUBAI GÜZEL".toLocaleLowerCase("en-US")); // dubai güzel

_______________________________________________________________________________________________________________________________________________________________________________________________________
//toString()
const nbr = 42;
console.log(nbr.toString()); // "42"
const array = [1, 2, 3];
console.log(array.toString()); // "1,2,3"
const boolValue = true;
const strBool = boolValue.toString(); // "true"
const obj = { name: "John", age: 30 };
console.log(obj.toString()); // çevrilmez

_______________________________________________________________________________________________________________________________________________________________________________________________________
//trim()
const str4 = "   ali mali    ";
console.log(str4.trim()); // "ali mali"

_______________________________________________________________________________________________________________________________________________________________________________________________________
//trimStart()
const str5 = "   ali mali    ";
console.log(str5.trim()); // "ali mali    "

_______________________________________________________________________________________________________________________________________________________________________________________________________
//trimEnd()
const str6 = "   ali mali    ";
console.log(str6.trim()); // "   ali mali"

_______________________________________________________________________________________________________________________________________________________________________________________________________
//charAt()
const str7 = "Ali ata bak";
console.log(str7.charAt(2)); //return "i"
_______________________________________________________________________________________________________________________________________________________________________________________________________