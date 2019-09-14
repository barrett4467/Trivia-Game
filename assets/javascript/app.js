//array of trivia options
//counter to keep track of correct and incorrect answers
//timers between the questions
//countdown on each page
//reset and start game functions
//questions were all found on https://www.independent.co.uk/arts-entertainment/books/news/harry-potter-quiz-hardest-trivia-questions-jk-rowling-hermione-granger-ron-weasley-hagrid-dumbledore-a8015381.html

var questions = {
    question1:{
        question: "Many know that Gryffindor's ghost is Nearly Headless Nick. But what is his full name?",
        answers: ["Sir Nicholas de Mimsy-Porpington", "Sir Nicholas Percival Wulfric Brian Flammel", "Sir Nicholas Mignon-Praddington", "Sir Nicholas de Mimsy-Packington" ]
    }, 
    question2:{
    question: "Harry, Ron, and Hermione help save the Sorcerer's Stone from being stolen. How old was its co-creator, Nicholas Flamel, when he decided to destroy it?", 
    answers: ["665", "982", "105", "574"]
    },
    question3:{
    question: "Snape grilled Harry about this on his first day in Potions. Monkshood and wolfsbane are the same plant, also known as what?",
    answers: ["Aconite", "Amortentia", "Agrippa", "Alihotsy"]
    },
    question4:{
    question: "Quidditch players are constantly at risk of injury throughout the game. How many possible Quidditch fouls are there?",
    answers: ["17", "700", "300", "375"] 
    },
    question5:{
    question: "In The Sorcerer’s Stone, Harry and his friends are awarded last-minute House Points, putting Gryffindor ahead of Slytherin by just 10 points. What was the final tally?",
    answers: ["482 to 472", "275 to 265", "303 to 293", "450 to 440"]
    },
    question6:{
    question: "Ever the eccentric, Dumbledore has a scar above his left knee that is a perfect map of what?",
    answers: ["The London Underground", "Hogwarts", "Diagon Alley", "Wales"]
    },
    question7:{
    question: "What does Grunnings, the company Vernon Dursley works for, produce?",
    answers: ["Drills", "Paper", "Tools", "Shipping Containers"]
    },
    question8:{
    question: "For Harry's 17th birthday, what colour did Hermione turn the leaves of the Weasley’s crabapple tree?",
    answers: ["Gold", "Bright Orange", "Red", "Blue"]
    },
    question9:{
    question: "Harry is known for his talents in Quidditch. What is the max speed for a Firebolt broomstick?",
    answers: ["45 miles per hour", "65 miles per hour", "150 miles per hour", "200 miles per hour"]
    },
    question10:{
    question: "Harry first took the Knight Bus in The Prisoner of Azkaban. How much does a ticket cost if it includes hot chocolate?",
    answers: ["14 Sickles", "1 Galleon", "17 Knuts", "7 Sickles and 3 Knuts"]
    }
}

var wins = 0;
var losses = 0;


function renderButtons(Num) {
    $("#buttons-view").empty(); 
    
    // Loop through the array of answers, then generate buttons for each
    for (var i = 0; i < 4; i++){
        var buttons = $("<button>");
        buttons.addClass("buttons");
        buttons.attr("id", "answer" + (i));

        console.log(Num.answers[i]);
        $("#possible-answers").append(buttons);
        $(".buttons").html(Num.answers[i]);
    }

  }

function startGame(){
    $("#questions").html("<h2>" + questions.question1.question);
    $("#possible-answers").html(renderButtons(questions.question1));
}

startGame();

console.log(questions.question10.answers);