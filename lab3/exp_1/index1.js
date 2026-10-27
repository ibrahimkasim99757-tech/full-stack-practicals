// today topic callback stack using function and setTimeout
console.log("1");
setTimeout(() => {
  console.log("2");

}, 1000);
setTimeout(() => {
  console.log("3");
}, 1001);
console.log("4");
