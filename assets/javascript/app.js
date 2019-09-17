//array of trivia options
//counter to keep track of correct and incorrect answers
//timers between the questions
//countdown on each page
//reset and start game functions
//questions were all found on https://www.independent.co.uk/arts-entertainment/books/news/harry-potter-quiz-hardest-trivia-questions-jk-rowling-hermione-granger-ron-weasley-hagrid-dumbledore-a8015381.html

var questions = {
    question0:{
        question: "Many know that Gryffindor's ghost is Nearly Headless Nick. But what is his full name?",
        answers: ["Sir Nicholas de Mimsy-Porpington", "Sir Nicholas Percival Wulfric Brian Flammel", "Sir Nicholas Mignon-Praddington", "Sir Nicholas de Mimsy-Packington" ]
    }, 
    question1:{
    question: "Harry, Ron, and Hermione help save the Sorcerer's Stone from being stolen. How old was its co-creator, Nicholas Flamel, when he decided to destroy it?", 
    answers: ["574", "982", "105", "665"]
    },
    question2:{
    question: "Snape grilled Harry about this on his first day in Potions. Monkshood and wolfsbane are the same plant, also known as what?",
    answers: ["Aconite", "Amortentia", "Agrippa", "Alihotsy"]
    },
    question3:{
    question: "Quidditch players are constantly at risk of injury throughout the game. How many possible Quidditch fouls are there?",
    answers: ["17", "700", "300", "375"] 
    },
    question4:{
    question: "In The Sorcerer’s Stone, Harry and his friends are awarded last-minute House Points, putting Gryffindor ahead of Slytherin by just 10 points. What was the final tally?",
    answers: ["303 to 293", "275 to 265", "482 to 472", "450 to 440"]
    },
    question5:{
    question: "Ever the eccentric, Dumbledore has a scar above his left knee that is a perfect map of what?",
    answers: ["The London Underground", "Hogwarts", "Diagon Alley", "Wales"]
    },
    question6:{
    question: "What does Grunnings, the company Vernon Dursley works for, produce?",
    answers: ["Paper", "Drills", "Tools", "Shipping Containers"]
    },
    question7:{
    question: "For Harry's 17th birthday, what colour did Hermione turn the leaves of the Weasley’s crabapple tree?",
    answers: ["Blue", "Bright Orange", "Red", "Gold"]
},
question8:{
    question: "Harry is known for his talents in Quidditch. What is the max speed for a Firebolt broomstick?",
    answers: ["45 miles per hour", "65 miles per hour", "150 miles per hour", "200 miles per hour"]
},
question9:{
    question: "Harry first took the Knight Bus in The Prisoner of Azkaban. How much does a ticket cost if it includes hot chocolate?",
    answers: ["14 Sickles", "1 Galleon", "17 Knuts", "7 Sickles and 3 Knuts"]
}
}


var wins = 0;
var losses = 0;
var userGuess = [];
// var correctGuess = {}; 


function renderButtons(Num) {
    $("#possible-answers").empty(); 
    
    // Loop through the array of answers, then generate buttons for each
    for (var i = 0; i < 4; i++){
        var buttons = $("<button>");
        buttons.addClass("buttons");
        buttons.attr("id", "answer" + (i));
        buttons.attr("data-value", (i));
        
        $("#possible-answers").append(buttons);
    }
    $("#answer0").text(Num.answers[0]);
    $("#answer1").text(Num.answers[1]);
    $("#answer2").text(Num.answers[2]);
    $("#answer3").text(Num.answers[3]);
}

function startGame(){
    
    $("#directions").html("<h2> Test your Harry Potter knowledge. Click Start to begin!</h2>");
    $("#directions").append("<button id='start'>Start</button>");
    $("#start").on("click", function() {
        $("#directions").html("");
        question0();
    })
}

function storeAnswer(next){
    $("#answer0").on("click", function () {
        var guess = $(this).text();
        userGuess.push(guess);
        console.log(guess);
        next();
    })
    $("#answer1").on("click", function () {
        var guess = $(this).text();
        userGuess.push(guess);
        console.log(guess);
        next();
    })
    $("#answer2").on("click", function () {
        var guess = $(this).text();
        userGuess.push(guess);
        console.log(guess);
        next();
    })
    $("#answer3").on("click", function () {
        var guess = $(this).text();
        userGuess.push(guess);
        console.log(guess);
        next();
    })
    
}


function question0 (){
    $("#questions").html("<h2>" + questions.question0.question);
    $("#possible-answers").html(renderButtons(questions.question0));
    console.log(userGuess);
    storeAnswer(question1);
    run0();

}


function question1 (){
        $("#questions").html("<h2>" + questions.question1.question);
        $("#possible-answers").html(renderButtons(questions.question1));
        storeAnswer(question2);
        run1();
        // reset(question2);
}
function question2 (){
    $("#questions").html("<h2>" + questions.question2.question);
    $("#possible-answers").html(renderButtons(questions.question2));
    storeAnswer(question3);
    run2();
}
function question3 (){
        $("#questions").html("<h2>" + questions.question3.question);
        $("#possible-answers").html(renderButtons(questions.question3));
        storeAnswer(question4);
        run3();
}
function question4 (){
        $("#questions").html("<h2>" + questions.question4.question);
        $("#possible-answers").html(renderButtons(questions.question4));
        storeAnswer(question5);
        run4();
}
function question5 (){
        $("#questions").html("<h2>" + questions.question5.question);
        $("#possible-answers").html(renderButtons(questions.question5));
        storeAnswer(question6);
        run5();
}
function question6 (){
        $("#questions").html("<h2>" + questions.question6.question);
        $("#possible-answers").html(renderButtons(questions.question6));
        storeAnswer(question7);
        run6();
}
function question7 (){
        $("#questions").html("<h2>" + questions.question7.question);
        $("#possible-answers").html(renderButtons(questions.question7));
        storeAnswer(question8);
        run7();    
}
function question8 (){
        $("#questions").html("<h2>" + questions.question8.question);
        $("#possible-answers").html(renderButtons(questions.question8));
        storeAnswer(question9);
        run8();
}
function question9 (){
        $("#questions").html("<h2>" + questions.question9.question);
        $("#possible-answers").html(renderButtons(questions.question9));
        storeAnswer(endGame);
}
var intervalId;
var number = 10; 
var isRunning = true;

function run0() {
    number = 10;
    isRunning = true;
    stop();
    intervalId = setInterval(decrement0, 1000);
}
function run1() {
    number = 10;
    isRunning = true;
    stop();
    intervalId = setInterval(decrement1, 1000);
}
function run2() {
    number = 10;
    isRunning = true;
    stop();
    intervalId = setInterval(decrement2, 1000);
}
function run3() {
    number = 10;
    isRunning = true;
    stop();
    intervalId = setInterval(decrement3, 1000);
}
function run4() {
    number = 10;
    isRunning = true;
    stop();
    intervalId = setInterval(decrement4, 1000);
}
function run5() {
    number = 10;
    isRunning = true;
    stop();
    intervalId = setInterval(decrement5, 1000);
}
function run6() {
    number = 10;
    isRunning = true;
    stop();
    intervalId = setInterval(decrement6, 1000);
}
function run7() {
    number = 10;
    isRunning = true;
    stop();
    intervalId = setInterval(decrement7, 1000);
}
function run8() {
    number = 10;
    isRunning = true;
    stop();
    intervalId = setInterval(decrement8, 1000);
}
function run9() {
    number = 10;
    isRunning = true;
    stop();
    intervalId = setInterval(decrement9, 1000);
}

function stop() {
    isRunning = false;
    clearInterval(intervalId);
    
}

function decrement0() {
        number--;
        $("#show-number").html("<h2>" + number + "</h2>");
        if (number === 0) {
            stop();
            number = 10;
            question1();
        }
  }
  function decrement1() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        number = 10;
        question2();
    }
}
function decrement2() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        number = 10;
        question3();
    }
}
function decrement3() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        number = 10;
        question4();
    }
}
function decrement4() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        number = 10;
        question5();
    }
}
function decrement5() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        number = 10;
        question6();
    }
}
function decrement6() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        number = 10;
        question7();
    }
}
function decrement7() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        number = 10;
        question8();
    }
}
function decrement8() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        number = 10;
        question9();
    }
}
function decrement9() {
    number--;
    $("#show-number").html("<h2>" + number + "</h2>");
    if (number === 0) {
        stop();
        number = 10;
        endGame();
    }
}


function reset (next){
}


function resetTimer (){
    if (number===0){
        alert("yayyyy");
    }
}


function endGame(){
    stop();
    $("#possible-answers").html("");
    $("#questions").html("");
    $("#show-number").html("");

    function userAnswer (i){
        $("#results").append("<p> Your Answer: "   + userGuess[i]+ "</p>");
    }
    function correctAnswer0 (i){
        $("#results").append("<p> Correct Answer: "   + questions.question0.answers[0]+ "</p>");
    }
    function correctAnswer1 (i){
        $("#results").append("<p> Correct Answer: "   + questions.question1.answers[3]+ "</p>");
    }

    function correctAnswer2 (i){
        $("#results").append("<p> Correct Answer: "   + questions.question2.answers[0]+ "</p>");
    }

    function correctAnswer3 (i){
        $("#results").append("<p> Correct Answer: "   + questions.question3.answers[1]+ "</p>");
    }

    function correctAnswer4 (i){
        $("#results").append("<p> Correct Answer: "   + questions.question4.answers[2]+ "</p>");
    }

    function correctAnswer5 (i){
        $("#results").append("<p> Correct Answer: "   + questions.question5.answers[0]+ "</p>");
    }

    function correctAnswer6 (i){
        $("#results").append("<p> Correct Answer: "   + questions.question6.answers[1]+ "</p>");
    }

    function correctAnswer7 (i){
        $("#results").append("<p> Correct Answer: "   + questions.question7.answers[3]+ "</p>");
    }

    function correctAnswer8 (i){
        $("#results").append("<p> Correct Answer: "   + questions.question8.answers[2]+ "</p>");
    }
    function correctAnswer9 (i){
        $("#results").append("<p> Correct Answer: "   + questions.question9.answers[0]+ "</p>");
    }



    userAnswer(0);
    correctAnswer0();
    userAnswer(1);
    correctAnswer1();
    userAnswer(2);
    correctAnswer2();
    userAnswer(3);
    correctAnswer3();
    userAnswer(4);
    correctAnswer4();
    userAnswer(5);
    correctAnswer5();
    userAnswer(6);
    correctAnswer6();
    userAnswer(7);
    correctAnswer7();
    userAnswer(8);
    correctAnswer8();
    userAnswer(9);
    correctAnswer9(); //want these to show as your answer correct on the same line 
    //need to set countdown timers 
 

    console.log(questions.question0.answers[1]);
    console.log("User Guess: " + userGuess[0]);


}





startGame();

