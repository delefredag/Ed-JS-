//FOR LOOPS 


for (let i = 0; i < 100; i++) {
    
    
    if( i === 20) {
        console.log('HEY You hit 20!');
        // continue; //jump over to the next 
        break;
    }

    //RUN SOME CODE
    console.log(i); //0~99
}


console.log('hey');

const texts = ['Singing the park', 'Watching myself dance', 'Dogo is danger', 'Cat is black']
for (let i = 0; i < texts.length; i++){
    console.log(texts[i]);
}


const text = '안녕하니'
for (let i = 0; i < text.length; i++){ 
    console.log(text[i]); //안, 녕, 하, 니
    console.log(i); //0, 1, 2, 3

}


// general multiple, (let ... of)
const names = ['Dev Ed', 'barbie', 'Logic', 'Mf Doom', "Tool"];

for (let name of names) {
    console.log(name); //이름, 이름 ... ,이름 
    console.log(names.indexOf(name)); // 0, 1, 2... 4
}

// Specifically for ARRAYS (for each)
names.forEach(function(name, index){ //callback
    console.log(name, index); //이름, 이름 ... , 이름 // 0, 1, 2... 4
})


//ex1 
for (let name of names) {
    if (name === 'Logic'){
        console.log('STAHPT DIS MADNESS')
        break;
    }
    console.log(name);
}

console.clear();



// (let ... in)
const user = {
    name : 'Dev Ed',
    age : 25,
    subscriber: 200,
    money : 'lolno'
}

for(let x in user){
    console.log(x); //key (name, age, subscriber, money)
}
console.log(user.subscriber); //ellie 강의 

//WHILE, DO WHILE 
let i = 20;
while(i < 30) { //증감식이 아니라서 무한
    console.log();
    break;
}

// DO WHILE false여도 일단 시작 