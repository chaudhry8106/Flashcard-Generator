var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States", "George Washington");
var brokenCloze = new ClozeCard("This doesn't work", "oops");

var operation = process.argv[2];
var argument = process.argv[3];

var question = "";
var answer = "";
var fullAnswer = "";

if (operation === "BasicCard") {

    question = firstPresident.front;
    answer = firstPresident.back;
    fullAnswer = answer;

        if (argument === "question") {
            console.log(question);
        } else if (argument === answer) {
            console.log("Correct");
            console.log(fullAnswer);
        } else {
            console.log("Type 'question' or write answer in ' '");
        };

} else if (operation === "ClozeCard") {

    question    = firstPresidentCloze.partial + "?";
    answer      = firstPresidentCloze.cloze;
    fullAnswer  = firstPresidentCloze.fullText + ".";

        if (argument === "question") {
            console.log(question);
        } else if (argument === answer) {
            console.log("Correct");
            console.log(fullAnswer);
        } else if ((argument === undefined) && (argument !== answer) || (argument !== "question")) {
            console.log("Type 'question' or write answer in ' '");
        };

} else {
    console.log("Choose 'BasicCard' or 'ClozeCard'");
}