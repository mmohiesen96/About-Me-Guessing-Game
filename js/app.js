'use strict';
let userName = prompt('Enter your name please ..');
alert('Welcome ' + userName + ', let\'s test you about me');

let score = 0;

let myName = prompt('is my name Mohammed ?');
myName = myName.toLowerCase();
if(myName==='y' || myName === 'yes'){
    alert('That is right i am mohammed nice to meet you');
    score++;
    // console.log('Correct answer');
}

else{
    console.log('Incorrect answer');
    // console.log('INorrect answer');
    alert('actually my name is mohammed , nice to meet you');
}



let myFavoriteColor = prompt('Do i like black color ?');
myFavoriteColor = myFavoriteColor.toLowerCase();
if(myFavoriteColor=='y' || myFavoriteColor == 'yes'){
    alert('That is right i love black');
    score++;
    // console.log('Correct answer');
}

else{
    console.log('Incorrect answer');
    // console.log('Inorrect answer');
    alert('Unfortunatly i like black');
}




let myFood = prompt('Do i like seaFood ?');
myFood = myFood.toLowerCase();
if(myFood=='y' || myFood=='yes'){
    alert('I love seafood');
    score++;
    // console.log('Correct answer');
}

else{
    // console.log('Incorrect answer');

    alert('i love the food that comes from the sea actually');
}


let myResidence = prompt('Do i live in Amman ?');
myResidence =myResidence.toLowerCase();
if(myResidence=='y' || myResidence == 'yes'){
    alert('That is right i am at Amman right now');
    score++;
    // console.log('Correct answer');
}

else{
    // console.log('Incorrect answer');

    alert('I Live in Amman, come and visit me');
}
let myFavoriteHobby = prompt('Do i love cooooding "That is a hint" ?');
myFavoriteHobby = myFavoriteHobby.toLowerCase();


if(myFavoriteHobby ==='y' || myFavoriteHobby === 'yes'){
    alert('That is my biggest passion');
    score++;
    // console.log('Correct answer');
}

else{
    // console.log('Incorrect answer');

    alert('OOOH no i gave you a hint');
}


let myFavoriteNumber = Math.floor(Math.random() * 11);

let userNumberGuess = 0;
for (let i = 0 ; i <=4 ; i++){
    if(i === 4) {
        alert('You run out of attempts My favorite number  is '+ myFavoriteNumber);
        break;
    }
    userNumberGuess = prompt('Can you guess my favorite number , I\'ll give you 4 attempts ');
    if(parseInt(userNumberGuess) === myFavoriteNumber){
        alert('Bingooo , you are correct my favorite number is ' + myFavoriteNumber);
        score++;
        break;
    }
    else if(userNumberGuess > myFavoriteNumber) {
        alert('That is too high , try again');
    }

    else {
        alert('That is too low , try again');
    }

}

let myFavoriteProgrammingLanguage = ['Java' , 'C++' , 'Python' , 'C#' , 'JavaScript'];

let userAnswerProgrammingLanguage = 'none';

for(let i = 0 ; i < 7 ; i++){
    if (i === 6 ) {
        alert('You ran out of attempts , I love java and those are the possible answers will be displayed ');
        break;
    }
    userAnswerProgrammingLanguage = prompt('Guess my favorite prgramming language i will give you 6 attempts "for hint it is an oop based language"');
    if(userAnswerProgrammingLanguage.toLowerCase() === 'java'){
        alert('That is correct such an elegant person you are');
        score++;
        break;
    }

    else {
        alert('That is wrong try again');
    }
}
alert('The options for the programming language question : ' + myFavoriteProgrammingLanguage);


alert('Welcome abroad, ' + userName + ' You scored ' + score + ' out of 7 at my personal information quiz.');