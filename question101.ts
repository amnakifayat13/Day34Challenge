/*  Generate a random integer between 1 and 10.*/
  
function randomNumberFunc():number {
    return Math.floor(Math.random()*10) + 1
}

console.log(randomNumberFunc());
