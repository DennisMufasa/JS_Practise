//create function numbers to generate an array with 100 items
let numbers = function(){
    let ar = [];
    for(let i = 0; i < 100; i ++){
      ar.push(i);
    }
    return ar;
  }
  
  //test1 that returns the sum of all array items
  let test1 = function(){
    let num = numbers();
    if(Array.isArray(num) && num.length != 0){
     let sum = 0;
      for(let i = 0; i < num.length; i++){
        sum += num[i];
      }
      return sum;
    }else{
      return 'Test1 Failed';
    }
  }
  
  let sum = test1();
  console.log(sum);
  