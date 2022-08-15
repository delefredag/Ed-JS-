// GLOBAL SCOPE
let food = 'apple';
let fruits = 5;

function store(){  
    let food = 'banana';  //FUNCTION SCOPE, have nothing to do outside
    let fruits = 50;      
    //console.log(food, fruits); //🍋 banana 50
}
store(); //🍋

//console.log(food, fruits); //apple, 5 (global scope is used)


//BLOCK SCOPE
for(let fruits = 0 ; fruits < 10; fruits++){
    console.log(fruits);
}
console.log(food, fruits);