export default class Quiz{
    constructor(questions){
        this.questions = questions;
        this.finishedQuestions = {};
        this.currentAnswer = '';
        this.index = 0; 
    }
    onSubmit=()=>{
        let question = this.questions[this.index];
        let answer = this.currentAnswer;
        let complete = {question,answer};
        this.finishedQuestions[this.index]=complete;
        this.currentAnswer = ''

        console.log('on submit')
    }
    nextQuestion(questionField,answerField){
        return ()=>{
            console.log('next question')
        questionField.innerText =this.questions[this.index];
        answerField.value = '';
        this.index++;
        }
    }
    updateAnswer=(e)=>{
        console.log(e)
        this.currentAnswer = e.target.value;
    }
}