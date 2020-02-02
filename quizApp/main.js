import Quiz from "./quiz.js";

let answerArea = document.getElementById('answer');
let submit = document.getElementById('Submit');
let questions = [
    `1) Describe in your own words a variable`,
    `2) Describe in your own words a boolean`,
    `3) Write a for-loop that starts at 0 and ends at 4
        this for loop should also console.log each number`,
    `4) Write a function called add that takes two numbers as
        a arguement and returns the sum.`,
    `5) Declare a variable budget and assign it a number`,
    `6) Declare a const ZODIACSIGN and assign it your sign`,
    `7) Make an array of the names of the months`,
    `8) Make an object and let it have the keys
        firstName,lastName,Idnumber and make up values
        for each of them
    `
    ];
let quiz = new Quiz(questions);
quiz.init();
answerArea.addEventListener('change',quiz.updateAnswer)
submit.addEventListener('click',quiz.onSubmit)
submit.addEventListener('click',()=>console.log(quiz.finishedQuestions))