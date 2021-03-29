'use strict';
let userName = prompt('Enter your name please ..');
alert('Welcome' + userName + ', let\'s test you about me');

let score = 0;

let myName = prompt('is my name Mohammed ?');
myName = myName.toLowerCase();
if(myName=='y' || myName == 'yes'){
    alert('That is right i am mohammed nice to meet you');
    score++;
    console.log('Correct answer');
}

else{
    console.log('Incorrect answer');
    alert('actually my name is mohammed , nice to meet you');
}



let myFavoriteColor = prompt('Do i like black color ?');
myFavoriteColor = myFavoriteColor.toLowerCase();
if(myFavoriteColor=='y' || myFavoriteColor == 'yes'){
    alert('That is right i love black');
    score++;
    console.log('Correct answer');
}

else{
    console.log('Incorrect answer');

    alert('Unfortunatly i like black');
}



let myFood = prompt('Do i like seaFood ?');
myFood = myFood.toLowerCase();
if(myFood=='y' || myFood=='yes'){
    alert('I love seafood');
    score++;
    console.log('Correct answer');
}

else{
    console.log('Incorrect answer');

    alert('i love the food that comes from the sea actually');
}


let myResidence = prompt('Do i live in Amman ?');
myResidence =myResidence.toLowerCase();
if(myResidence=='y' || myResidence == 'yes'){
    alert('That is right i am at Amman right now');
    score++;
    console.log('Correct answer');
}

else{
    console.log('Incorrect answer');

    alert('I Live in Amman, come and visit me');
}
let myFavoriteHobby = prompt('Do i love cooooding "That is a hint" ?');
myFavoriteHobby = myFavoriteHobby.toLowerCase();


if(myFavoriteHobby=='y' || myFavoriteHobby == 'yes'){
    alert('That is my biggest passion');
    score++;
    console.log('Correct answer');
}

else{
    console.log('Incorrect answer');

    alert('OOOH no i gave you a hint');
}

alert('Welcome abroad, ' + userName + ' You scored ' + score + ' out of 5 at my personal information exam.')