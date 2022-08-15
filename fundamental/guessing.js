// what are you planinng to do, lay it out! (highly recommended) 
// what you gonna do, how you gonna achieve that 

// Generate a random number ✅
// Give the user the ability to guess
// If they guess and they are wrong, ask them again (hint);
// If they win - say that they won 


function guessGame(){
    let randomNr = Math.floor(Math.random() * 11); 
    let guess; //scoping variable everywhere 

    do{
        guess = prompt('Guess a number between 1-10');
        console.log(guess, randomNr);
        if(randomNr > guess){
            console.log('You guessed too low');
        }
        if(randomNr < guess){
            console.log('You guessed too high');
        }
    }while(guess != randomNr);
    console.log('YOU WON');
}

guessGame();

