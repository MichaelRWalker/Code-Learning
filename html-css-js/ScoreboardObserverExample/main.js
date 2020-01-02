// Caching the dom
const playerScore_div = document.getElementById('scoreOne');
const opponentScore_div = document.getElementById('scoreTwo');
const otherScore_div = document.getElementById('scoreThree');
const docHistory = document.getElementById('history');
const scoreboards = document.getElementById('scoreboards');
const addButton = document.getElementById('makeScoreboard');


const addLi = (str) =>{
    let item = document.createElement('li');
    item.innerText = str;
    return item;
};

const makeUniqueId = () =>{
    let id ='';
    for(let i = 0 ; i < 15 ;i++){
        let randomNum = Math.floor(Math.random()*9);
        id+=randomNum;
    }
    return id
};


const counter = (name,observer) =>{
    let bool = false
    const div = document.createElement('div');
        const score = document.createElement('div');
        const scoreboard = new Scoreboard();
        scoreboard.attachToElement(score);
        scoreboards.appendChild(div);
        score.id = makeUniqueId();
        const remove = document.createElement('button');
        remove.innerText = 'remove';
        remove.addEventListener('click',()=>{
            div.remove();
            observer.unsubscribe(scoreboard);
        });
        const unsubscribe = document.createElement('button');
        unsubscribe.innerText = 'unsubscribe';
        unsubscribe.addEventListener('click',()=>{
            if(!bool){
                bool=!bool;
                unsubscribe.innerText = 'subscribe';
            observer.unsubscribe(scoreboard);
            }else{
                bool=!bool
                unsubscribe.innerText = 'unsubscribe';
            observer.subscribe(scoreboard)
            }
        });
        score.innerText = 0;
        div.appendChild(score);
        div.appendChild(remove);
        div.appendChild(unsubscribe);

            return scoreboard
};



let state = {
    score : 0,
    increment(obs){
        this.score++;
        obs.dispatch();
    },
    decrement(obs){
        this.score--;
        obs.dispatch()
    },


};




let Observer = class{
    constructor(state) {
        this.subscribers = [];
        this.count = 0;
        this.turn = 0;
        this.history={};
        this.state = state;
    }
    subscribe(el){
        this.subscribers.push(el);
        this.count++
    }
    unsubscribe(el){
        this.subscribers = this.subscribers.filter(sub=> sub!==el);
        this.count--
    }
    dispatch(){
        this.history[this.turn]=this.state;
        docHistory.appendChild(addLi(JSON.stringify([this.history[this.turn],this.subscribers.length])));
        this.subscribers.forEach(el=>el.update(this.state.score)); //update each member with the proper data
        this.turn ++
    }
};

let Scoreboard = class{
    update(score){
        this.el.innerText = score
        console.log('i exist')
    }
    attachToElement(el){
        this.el = el
    }
};

const game = {
    update(score){
        if(score >= 20){
            document.getElementById('gameStatus').innerText=`
            You win the game 
This message brought to you by the Observer Class 
keeping objects in the know since the gang of four`
        }
    }
};



let scoreKeeper = new Observer(state);
scoreKeeper.subscribe(game);







const inc = document.getElementById('button');
inc.addEventListener('click',()=>state.increment(scoreKeeper));
inc.innerText = 'Increment Score';

const button = document.getElementById('btn');
button.addEventListener('click',()=>state.decrement(scoreKeeper));
button.innerText = 'Decrement Score';

addButton.addEventListener('click',()=>scoreKeeper.subscribe(counter('test',scoreKeeper)));








