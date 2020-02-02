export default class Quiz {
    constructor(questions){
        this.questions = questions;
        this.finishedQuestions = {};
        this.currentAnswer = '';
        this.index = 0
    }
    onSubmit=()=>{
    let complete = {
        question :this.questions[this.index],
        answer:this.currentAnswer
    };
    this.finishedQuestions[this.index] = complete;
    this.currentAnswer = ''
    this.index++
    if(!this.finished()){
    this.nextQuestion()
    }else{
        this.output()
    }
    }
    init(){
        this.nextQuestion();
    }
    updateAnswer=(e)=>{
        this.currentAnswer = e.target.value
    }
    nextQuestion(){
        document.querySelector('.question').innerText = this.questions[this.index];
        document.querySelector('#answer').value = '';
    }
    output(){
    let output = JSON.stringify(this.finishedQuestions);
    let answerArea = document.querySelector('.answer');
    answerArea.value = output;
    answerArea.select();
    document.execCommand('copy');
    }
    finished(){

        return this.index >= this.questions.length;
    }

};