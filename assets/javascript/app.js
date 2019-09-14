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
    answers: ["665", "982", "105", "574"]
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
    answers: ["482 to 472", "275 to 265", "303 to 293", "450 to 440"]
    },
    question5:{
    question: "Ever the eccentric, Dumbledore has a scar above his left knee that is a perfect map of what?",
    answers: ["The London Underground", "Hogwarts", "Diagon Alley", "Wales"]
    },
    question6:{
    question: "What does Grunnings, the company Vernon Dursley works for, produce?",
    answers: ["Drills", "Paper", "Tools", "Shipping Containers"]
    },
    question7:{
    question: "For Harry's 17th birthday, what colour did Hermione turn the leaves of the Weasley’s crabapple tree?",
    answers: ["Gold", "Bright Orange", "Red", "Blue"]
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
    question0();
}

function storeAnswer(next){
        $("#answer0").on("click", function () {
            var guess = $(this).attr("data-value");
            userGuess.push(guess);
            console.log(guess);
            next();
        })
        $("#answer1").on("click", function () {
            var guess = $(this).attr("data-value");
            userGuess.push(guess);
            console.log(guess);
            next();
        })
        $("#answer2").on("click", function () {
            var guess = $(this).attr("data-value");
            userGuess.push(guess);
            console.log(guess);
            next();
        })
        $("#answer3").on("click", function () {
            var guess = $(this).attr("data-value");
            userGuess.push(guess);
            console.log(guess);
            next();
        })

    }


function question0 (){
    $("#questions").html("<h2>" + questions.question0.question);
    $("#possible-answers").html(renderButtons(questions.question0));
    storeAnswer(question1);

}


function question1 (){
    $("#questions").html("<h2>" + questions.question1.question);
    $("#possible-answers").html(renderButtons(questions.question1));
    storeAnswer(question2);
}

function question2 (){
    $("#questions").html("<h2>" + questions.question2.question);
    $("#possible-answers").html(renderButtons(questions.question2));
    storeAnswer(question3);
}
function question3 (){
    $("#possible-answers").on("click", function () {
        console.log(userGuess);
        $("#questions").html("<h2>" + questions.question3.question);
        $("#possible-answers").html(renderButtons(questions.question3));
        // storeAnswer(question4);
        storeAnswer(question3);
        endGame()
    })
}
function question4 (){
    $("#possible-answers").on("click", function () {
        $("#questions").html("<h2>" + questions.question4.question);
        $("#possible-answers").html(renderButtons(questions.question4));
        storeAnswer(question5);
    })
}
function question5 (){
    $("#possible-answers").on("click", function () {
        $("#questions").html("<h2>" + questions.question5.question);
        $("#possible-answers").html(renderButtons(questions.question5));
        storeAnswer(question6);
    })
}
function question6 (){
    $("#possible-answers").on("click", function () {
        $("#questions").html("<h2>" + questions.question6.question);
        $("#possible-answers").html(renderButtons(questions.question6));
        storeAnswer(question7);
    })
}
function question7 (){
    $("#possible-answers").on("click", function () {
        $("#questions").html("<h2>" + questions.question7.question);
        $("#possible-answers").html(renderButtons(questions.question7));
        storeAnswer(question8);
    })
}
function question8 (){
    $("#possible-answers").on("click", function () {
        $("#questions").html("<h2>" + questions.question8.question);
        $("#possible-answers").html(renderButtons(questions.question8));
        storeAnswer(question9);
    })
}
function question9 (){
    $("#possible-answers").on("click", function () {
        $("#questions").html("<h2>" + questions.question9.question);
        $("#possible-answers").html(renderButtons(questions.question9));
        storeAnswer(endGame);
    })
}

function endGame(){
        if (userGuess[0] === "0"){
            $("#results").append("<p>" + questions.question0.answers[0] + "</p>");
        } else if (userGuess[0] === "1"){
            alert("checker checks")
            $("#results").append("<p>" + questions.question0.answers[0] + "</p>");
        } else if (userGuess[0] === "2"){
            alert("checker checks")
            $("#results").append("<p>" + questions.question0.answers[0] + "</p>");
        } else if (userGuess[0] === "3"){
            alert("checker checks")
            $("#results").append("<p>" + questions.question0.answers[0] + "</p>");
        } else{
            alert("NOOOOOO")
        }
    

    console.log(questions.question0.answers[1]);
    console.log("User Guess: " + userGuess[0]);

    // var result0 = "<p> Your Answer: " + checker0() + "</p>";
    // var result1 = "<p> Your Answer: " + userGuess[1] + "</p>";
    // var result2 = "<p> Your Answer: " + userGuess[3] + "</p>";
    // var result3 = "<p> Your Answer: " + userGuess[4] + "</p>";
    // var result4 = "<p> Your Answer: " + userGuess[5] + "</p>";
    // var result5 = "<p> Your Answer: " + userGuess[6] + "</p>";
    // var result6 = "<p> Your Answer: " + userGuess[7] + "</p>";
    // var result7 = "<p> Your Answer: " + userGuess[8] + "</p>";
    // var result8 = "<p> Your Answer: " + userGuess[9] + "</p>";
    // var result9 = "<p> Your Answer: " + userGuess[10] + "</p>";

}
startGame()


$("#results").append("ssskjafdhasfdlsaf");