// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }

// const calc = createCalcFunction(42);
// calc();
////////////////////////////////////////////////////////////////////////////

// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);
// console.log(addOne(10));
// console.log(addOne(41));

// console.log(addTen(10));
// console.log(addTen(41));

////////////////////////////////////////////////////////////////////
// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }
// const comUrl = urlGenerator("com");
// const ukUrl = urlGenerator("uk");

// console.log(comUrl("google"));
// console.log(comUrl("netflix"));

// console.log(ukUrl("karazina"));
// console.log(ukUrl("shevchenko"));

///////////////////////////////////////////////////

function bind(context, fn) {
  return function (...arr) {
    fn.apply(context, arr);
  };
}

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = { name: "Mihailo", age: 22, job: "Frontend" };
const person2 = { name: "Elena", age: 18, job: "SMM" };

bind(person1, logPerson)();
bind(person2, logPerson)();
