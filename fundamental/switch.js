// if(text === 'banana'){

// }else if(text === 'apple'){

// } 하드코딩 
// const text = 'banana'; // 여기에 다른 과일을 넣어서 콘솔 결과 비교
// let fruitNr = 0;

// switch (text){
//     case 'banana':
//         console.log('Wow I love bananas too');
//         fruitNr = 1;
//         break; // it doesn't keep running 
//     case 'apple':
//         console.log(`I don't like apples you crazy`);
//         fruitNr = 2;
//         break;
//     case 'avocado' :
//         console.log('What fruit is dis?');
//         fruitNr = 3;
//         break;
//     default:
//         console.log('What fruit is that?');
//         break;
// }

// mini game
// kiwi vs Kiwi 
let userInput = prompt('Tell me a fruit'); //  브라우저에 팝업 
let convertedValue = userInput.toLowerCase();

switch(convertedValue){ // kiwi vs Kiwi, userInput -> convertedValue
    case 'kiwi':
        alert('Kiwi is the first food invented by ocean boys');
        break;
    case 'banana':
        alert('My bf bought 12 bananas for no reason');
        break;
    case 'apple' :
        alert('Depending on which apple you buy you can either go bankrupt or eat too much sugar');
        break;
    default:
        alert('That fruit is unknown to me');
}


