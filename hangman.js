//
// // Create an array of words
// 
// var words = [
// "javascript",
// "monkey",
// "amazing",
// "pancake",
// "awesome",
// "school",
// "cedar house",
// "mike"
// ];
// var hanmanpic;
//// Pick a random word
//
// var word = words[Math.floor(Math.random() * words.length)];
// 
//// Set up the answer array
//
// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
// answerArray[i] = "_";
// }
// var remainingLetters = word.length;
// 
//// The game loop
//
// while (remainingLetters > 0) {
// 
//     // Show the player their progress
//  
// alert(answerArray.join(" "));
// 
//     // Get a guess from the player
//
// var guess = prompt("Guess a letter, or click Cancel to stop playing.");
// if (guess === null) {
// 
//     // Exit the game loop
// 
// break;
// } else if (guess.length !== 1) {
// alert("Please enter a single letter.");
// } else {
// 
//     // Update the game state with the guess
// 
// for (var j = 0; j < word.length; j++) {
// if (word[j] === guess) {
// answerArray[j] = guess;
// remainingLetters--;
// }
// }
// }
// 
//     // The end of the game loop
// }
// 
//// Show the answer and congratulate the player
// 
// alert(answerArray.join(" "));
// alert("Good job! The answer was " + word);
//
function setup() {
     hanmanpic = loadImage("hangmandeath.png");
     createCanvas(720, 700);
     background(255, 0, 0);
  noSmooth();

  // A rectangle
  rect(67, 134, 10, 100);   
    
  translate(140, 0);

}

function draw() {
    
image(hanmanpic, 0, 0, width,height);


    
//     var d = 70;
//  var p1 = d;
//  var p2 = p1+d;
//  var p3 = p2+d;
//  var p4 = p3+d;

  // Sets the screen to be 720 pixels wide and 400 pixels high
  
//  // Draw white points
//  stroke(255);
//  point(p1, p1);
//  point(p1, p3); 
//  point(p2, p4);
//  point(p3, p1); 
//  point(p4, p2);
//  point(p4, p4);
}

