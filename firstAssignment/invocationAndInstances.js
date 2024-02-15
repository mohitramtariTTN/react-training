let invocations = 0;
let instances = 0;

function counter() {
  instances++;
  let count = 0;

  this.increment = function (increase = 1) {
    count += increase;
    invocations++;
    return count;
  };

  this.getCount = function () {
    return count;
  };

  return this;
}

const counter1 = counter();
const counter2 = counter();

console.log("Invocations of counter1.increment:", counter1.increment());
console.log("Invocations of counter1.increment:", counter1.increment());
console.log("Invocations of counter1.increment:", counter1.increment());

console.log("Number of instances:", instances);
console.log("Invocations of all instances:", invocations);