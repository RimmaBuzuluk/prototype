const person = new Object({
  name: "Maxim",
  age: 25,
  greet: function () {
    console.log("Greate!");
  },
});

Object.prototype.sayHello = function () {
  console.log("Hello !");
};

const lena = Object.create(person);
lena.name = "Elena";
