// const someTask = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("this is some data");
//   }, 2000);
// });

const someTask = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Something went wrong"));
  }, 2000);
});
console.log(someTask);

someTask.then(
  (value) => {
    console.log("value:", value);
    console.log("someTask:", someTask);
  },
  (reason) => {
    console.log("reson:", reason);
    console.log("someTask:", someTask);
  }
);
