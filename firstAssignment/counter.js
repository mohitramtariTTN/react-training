function makeCounter() {
    let count = 0;
  
    function increment() {
      count++;
      return count;
    }
  
    function decrement() {
      count--;
      return count;
    }
  
    function getCount() {
      return count;
    }
  
    return {
      increment: increment,
      decrement: decrement,
      getCount: getCount
    };
  }
  
  const counter = makeCounter();
  
  console.log("Increment : ", counter.increment());
  console.log("Increment : ", counter.increment());
  console.log("Current count : ", counter.getCount());
  console.log("Decrement : ", counter.decrement());
  console.log("Increment : ", counter.increment());
  console.log("Current Count : ", counter.getCount());