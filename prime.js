//generating prime numbers
let primes = new Array(100);

for(let i =2; i < primes.length; i++){
    if((i % 2 ===0 || i % 3 ===0)){
        continue;
    }
    console.log(i);
}