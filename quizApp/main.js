import Quiz from "./quiz.js";

let answerArea = document.querySelector('.answer');
let questionArea = document.querySelector('.answer');
let submit = document.querySelector('.onSubmit');

let questions = ['0)' ,'1) does this work?'];

let quiz = new Quiz(questions);
console.log(quiz);
answerArea.addEventListener('change',quiz.updateAnswer);
submit.addEventListener('click',quiz.onSubmit)
submit.addEventListener('click',quiz.nextQuestion(questionArea,answerArea));