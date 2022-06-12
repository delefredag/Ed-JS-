// function greet(text){
//     console.log('Welcome to our website' + text);
// }
// console.log('rest of the code');

// function signUp(){
//     let userName = prompt('What is your name');
//     greet('hei jeg heter Ji');
// }
// signUp(); 

function max(nr1=0, nr2=0){ //인자 1개만 쓰면 NaN 나오니 기본값 0
    if(nr1 > nr2){
        return nr1;
    } else {
        return nr2;
    }
}

let inbox = max(1,0); 
console.log(inbox);