function hello() {
  console.log("Hello", this);
}

const person = {
  name: "Vladilen",
  age: 25,
  sayHello: hello,
  sayHelloWindow: hello.bind(document),
  logInfo: function (job, phone) {
    console.log(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};

const lena = {
  name: "Elena",
  age: 23,
};

person.logInfo.call(lena, "Frontend", "8-999-123-12-23");

const arr = [1, 2, 3, 4, 5];
Array.prototype.multBy = function (n) {
  return this.map(function (i) {
    return i * n;
  });
};

console.log(arr.multBy(2));
