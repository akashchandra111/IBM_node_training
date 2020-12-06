async function myFn() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("timer fired."), 1000)
    });
  
    let result = await promise; // wait till the promise resolves (*)
      console.log("1) result: ", result); 
  }
  
  myFn();
