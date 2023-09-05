//Object Methods

/*In JavaScript, an "object" is a data structure that groups multiple values ​​or properties and facilitates access to those properties.
Objects contain named property-value pairs and can also contain methods such as functions. 
This forms the basis of object-oriented programming and allows you to keep data in a more organized and structured way.*/

//Object create a function in
const person = {
  name: "John",
  greet: function () {
    console.log("hello");
  },
};

___________________________________________________________________________________________________________________________________________________________________________
//Object assigning value from outside
let student = {};
student.name = "John";
student.greet = function () {
  console.log("hello");
};
student.greet(); // hello

___________________________________________________________________________________________________________________________________________________________________________
//delete
//It allows us to delete a value inside the object.
const user = {
  username: "AzureDiamond",
  password: "hunter2",
};
delete user.username;
console.log(user); // {"password": "hunter2"}

___________________________________________________________________________________________________________________________________________________________________________
//this keyword
//We can use the this keyword to access a property of an object from within a method of the same object.
const person1 = {
  name: "John",
  age: 30,

  // accessing name property by using this.name
  greet: function () {
    console.log("The name is" + " " + this.name);
  },
};
person1.greet();

___________________________________________________________________________________________________________________________________________________________________________
//Also, when accessing values ​​defined inside the function without using this, we use the this keyword to refer to the values ​​inside the object.
const person2 = {
  name: "John",
  surname: "Deep",
  greet: function () {
    let surname = "Doe";
    console.log("The name is" + " " + this.name + " " + surname);
  },
  greet2: function () {
    let surname = "Doe";
    console.log("The name is" + " " + this.name + " " + this.surname);
  },
};
person2.greet(); // "The name is John Doe"
person2.greet2(); // "The name is John Deep"

___________________________________________________________________________________________________________________________________________________________________________
//Object.keys
//Creates an array containing the keys of an object.
const employees = {
  boss: "Michael",
  secretary: "Pam",
  sales: "Jim",
  accountant: "Oscar",
};
console.log(Object.keys(employees)); // ["boss", "secretary", "sales", "accountant"]

___________________________________________________________________________________________________________________________________________________________________________
// Object.values
//Creates an array containing the values of an object.
const session = {
  id: 1,
  time: `26-July-2018`,
  device: "mobile",
  browser: "Chrome",
};
console.log(Object.values(session)); // [1, "26-July-2018", "mobile", "Chrome"]

const operatingSystem = {
  name: "Ubuntu",
  version: 18.04,
  license: "Open Source",
};

console.log(Object.entries(operatingSystem));
// output :
`[["name", "Ubuntu"][("version", 18.04)][("license", "Open Source")]];`

___________________________________________________________________________________________________________________________________________________________________________
const operatingSystem1 = {
  name: "Ubuntu",
  version: 18.04,
  license: "Open Source",
};
for (let [key, value] of Object.entries(operatingSystem1)) {
  console.log(key + " = " + value);
}
// output :
("name = Ubuntu");
("version = 18.04");
("license = Open Source");

___________________________________________________________________________________________________________________________________________________________________________
//Object.assign()
//Used to combine values ​​of multiple objects
const name1 = {
  firstName: "Philip",
  lastName: "Fry",
};

const details1 = {
  job: "Delivery Boy",
  employer: "Planet Express",
};
console.log(Object.assign(name1, details1));
// output :
`{firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}`;

___________________________________________________________________________________________________________________________________________________________________________
//It is also possible to combine with the spread.
const name2 = {
  firstName: "Philip",
  lastName: "Fry",
};

const details = {
  job: "Delivery Boy",
  employer: "Planet Express",
};
const character = { ...name2, ...details };

___________________________________________________________________________________________________________________________________________________________________________
//Object.freeze()
//Prevents changing, deleting and adding values ​​in the specified object.
const user2 = {
  username: "AzureDiamond",
  password: "hunter2",
};

const newUser = Object.freeze(user2);

newUser.password = "*******";
newUser.active = true;
console.log(newUser); // {username: "AzureDiamond", password: "hunter2"}

___________________________________________________________________________________________________________________________________________________________________________
//Object.seal()
//Allows the values ​​in the specified object to be changed, but prevents adding and deleting values.
const user3 = {
  username: "AzureDiamond",
  password: "hunter2",
};

const newUser = Object.seal(user3);
newUser.password = "*******";
newUser.active = true; //eklenmez
delete newUser.username; //silinmez
console.log(newUser); // {username: "AzureDiamond", password: "*******"}

___________________________________________________________________________________________________________________________________________________________________________
//shorthand
//We can define your object methods in a more practical way without assigning keywords.
// We assigned a function to greet and now we can call this function as greet.
let person3 = {
  firstName: "John",
  lastName: "Doe",
  greet: function () {
    console.log("Hello, World!");
  },
};
person3.greet(); // "Hello, World!";

___________________________________________________________________________________________________________________________________________________________________________
// when we create the function directly without defining a keyword
// The function name and keyword are automatically created inside
let person5 = {
  firstName: "John",
  lastName: "Doe",
  greet() {
    console.log("Hello, World!");
  },
};
person5.greet(); //Hello, World!"

___________________________________________________________________________________________________________________________________________________________________________
//Object.getPrototypeOf()
//Object.getPrototypeOf() is used to get the internal hidden [[Prototype]] of an object, also accessible through the __proto__ property.
const employees1 = ["Ron", "April", "Andy", "Leslie"];
Object.getPrototypeOf(employees1);
//Output
//[constructor: ƒ, concat: ƒ, find: ƒ, findIndex: ƒ, pop: ƒ, …]

