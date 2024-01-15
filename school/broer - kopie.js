var readlineSync = require('readline-sync');

 

// Wait for user's response.

var userName = readlineSync.question('Hello you! ');

 

 

// Handle the secret text (e.g. password).

var favFood = readlineSync.question('Wie ben ik? ', {

  hideEchoBack: true // The typed text on screen is hidden by `*` (default).

});

 

 

// Wait for user's response.

var userName = readlineSync.question('Ik ben Berke ');

 

 

// Handle the secret text (e.g. password).

var favFood = readlineSync.question('Hello Berke', {

  hideEchoBack: true // The typed text on screen is hidden by `*` (default).

});

 

 

 

var readlineSync = require('readline-sync');

 

// Wait for user's response.

 

var userName = readlineSync.question('Hello may i know ur name ');

 

console.log('Hi ' + userName + '!');

 

 

var favFood = readlineSync.question('ready for the quiz?  ', {

 

  hideEchoBack: false

 

})

 

console.log ('Good luck! ');

function PlayQuiz ()

{

 

let score = 0;

 

answer = readlineSync.question('wat is mijn favoriete eten? A.pizza   B.stampot   C.pasta ', {

    trueValue: ['C'] ,

    falseValue: ['A'] ,

    falseValue: ['B']

  });

  if (answer === true) {

    score = score +1;

    console.log('blijf zo door gaan');

  } else if (answer === false) {

    console.log('try again') ;

  } else {

    score =+1;

    console.log('antwoord is A' + score + ' : Is jouw score');

 

  }

 

  answer = readlineSync.question('Wat is mijn favoriete voetballer A.Ronaldo    B.Messi   C.Neymar ', {

    trueValue: ['B'] ,

    falseValue: ['C'] ,

    falseValue: ['A']

  });

  if (answer === true) {

    score = score +1;

    console.log('good job');

  } else if (answer === false) {

    console.log('try again') ;

  } else {

    score = +1;

    console.log('C is de corrrecte antwoord goed gedaan' + score + ' : Is jou score' );

 

  }

 

  answer = readlineSync.question('wat is mijn fav game A.Brawlhallla   B.Roblox   C.valorant ', {

    trueValue: ['A'] ,

    falseValue: ['C'] ,

    falseValue: ['B']

  });

  if (answer === true) {

    score = score +1;

    console.log('Jij wilt veel');

  } else if (answer === false) {

    console.log('try again') ;

  } else {

    console.log('A is de correcte antwoord' + score + ' : Is jou score' );

 

  }

 

  answer = readlineSync.question('hoe ooud ben k ik A.10   B.16   C.20  ', {

    trueValue: ['B'] ,

    falseValue: ['A'] ,

    falseValue: ['C']

  });

  if (answer === true) {

    score = score +1;

    console.log('Bijna Klaar');

  } else if (answer === false) {

    console.log('try again') ;

  } else {

    score = +1;

    console.log('B is de correcte antwoord goed gedaan!' + score + ' : Is jou score ');

 

  }

  answer = readlineSync.question('Welk game haat ik het meest A.Valorant   B.Brawlhalla    C.Club penguin ', {

    trueValue: ['A'] ,

    falseValue: ['C'] ,

    falseValue: ['B']

  });

  if (answer === true) {

    score = score +1;

    console.log('WOW');

  } else if (answer === false) {

    score = +1;

    console.log('B is de juiste antwoord' + score + ' : is jou score' ) ;

  } else {}

 

 

var nogEenKeer = readlineSync.question('wil je nog een keer spelen? j/n');

 

if (nogEenKeer === 'j'){

PlayQuiz();

 

}

 

}

 

PlayQuiz ();