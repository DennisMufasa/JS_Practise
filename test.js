//initialize an array that stores todo list
let lists = [];

//initialize a counter for numbering array itemsand set it to 1
let num = 1;

//prompt user for input. User input is always a string
let userInput = prompt("What do you want to do?\n1. new \n2. list \n3. quit");

//a loop that requests user for todo objective and lists them if quit is not selected
while (userInput !== "3"){
    //when input is 2
    if(userInput === "2"){
        //loop over array items to assign numbering to them and lists them
        lists.forEach(function(i){
            console.log(num + " " + i);
            //increment counter
            num++;
        });
    }
    //when user input is 1
    else if (userInput === "1"){
        //a variable to store objectives prompted from user
        let objective = prompt("Enter a new objective for todo list.");

        //append objective to todo list array
        lists.push(objective);
    }
    //reset the user input
    userInput = prompt("What do you want to do next?\n1. new \n2. list \n3. quit")  
}
console.log("Good bye!");