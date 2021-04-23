// arrow function
// normal function
// so sanh khac biet bang code

// Function declaration
console.log(hello('D'));
function hello(name) {
  return `Hello ${name}`;
}

//Function expression
const hello1 = function(name) {
  return `Hello ${name}`;
}

//Arrow function
const hello2 = name => `Hello ${name}`;

//this
function myFunction() {
  console.log(this);
}
myFunction(); // log Object [global]

const myObject = {
  method() {
    console.log(this);
  }
};
myObject.method(); // myObject

function MyFunction() {
  console.log(this);
}
const a = new MyFunction(); //a

const myObject = {
  myMethod(items) {
    console.log(this === myObject); // myObject
    const callback = () => {
      console.log(this === myObject); // myObject
    };
    items.forEach(callback);
  }
};
myObject.myMethod([1]);


//constructor
function Car(color) {
  this.color = color;
}
const redCar = new Car('red');
console.log(redCar instanceof Car);

const Car = (name) => {
  this.name = name;
}
const newCar = new Car('BMW')
console.log(newCar) //TypeError: Car is not a constructor


//arguments
function myRegularFunction() {
  const myExpressFunction = function() {
    console.log(arguments);
  }
  myExpressFunction('c', 'd');
}
myRegularFunction('a', 'b');//[Arguments] { '0': 'c', '1': 'd' }


function myRegularFunction() {
  const myArrowFunction = () => {
    console.log(arguments);
  }
  myArrowFunction('c', 'd');
}
myRegularFunction('a', 'b'); //[Arguments] { '0': 'a', '1': 'b' }


function myRegularFunction() {
  const myArrowFunction = (...rest) => {
    console.log(rest);
  }
  myArrowFunction('c', 'd');
}
myRegularFunction('a', 'b'); //['c', 'd']


// class Hero {
//   constructor(heroName) {
//     this.heroName = heroName;
//   }

//   logName = () => {
//     console.log(this.heroName);
//   }
// }

// const batman = new Hero('Batman');
// console.log(setTimeout(batman.logName, 1000))


