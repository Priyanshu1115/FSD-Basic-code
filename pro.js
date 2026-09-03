// Basic Promise example
const myPromise = new Promise((resolve, reject) => {
  const isSuccess = true;

  if (isSuccess) {
    resolve("Operation was successful!");
  } else {
    reject("Operation failed!");
  }
});

myPromise
  .then((result) => {
    console.log("Success:", result);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// Example with setTimeout
const delayPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Delayed result after 2 seconds");
  }, 2000);
});

delayPromise.then((result) => {
  console.log(result);
});
