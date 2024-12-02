//async function

async function greet () {
    // throw "404 - page was not found!!"
    return "Resolved";
}

greet()
.then((res)=>{
    console.log("promise resolved");
    console.log(res);
})
.catch((e)=>{
    console.log(e);
})

// await keyword
let box = document.querySelector(".box");

function generateRandomNumber() {
  return Math.floor(Math.random() * 255);
}

function colorChange() {
  let r = generateRandomNumber();
  let g = generateRandomNumber();
  let b = generateRandomNumber();

  return new Promise((res, rej) => {
    setTimeout(() => {
        
    let randomNum = Math.floor(Math.random() * 10);
      if (randomNum < 3) {
        rej("Failure");
      }

      box.style.backgroundColor = `rgb(${r},${g},${b})`;
      box.style.transition = ".3s";
      res("Success");
    }, 1000);
  });
}

let demo = async () => {
  try {
    for (let i = 0; i < 5; i++) {
      await colorChange();
    }
    console.log("Loop completed")
  } catch (err) {
    console.log("Loop interupted");
    console.log(err);
  }

  console.log("After execution of promises");
};
