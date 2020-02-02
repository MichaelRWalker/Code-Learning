const testListener = (el,color) => ()=>el.style.color = color;
const _divs = document.querySelectorAll('.output');
const _btn  = document.querySelectorAll('.btn');
const offSwitch = document.querySelector('.btnOff');
const activate = document.querySelector('.btnDeactivate');
const colors = ['red','green','blue','yellow'];

class Component{
    constructor(element){
        this.element = element;
    };
    toggle(on,off){
        this.element.classList.add(on);
        this.element.classList.remove(off);
    }
    parse(state,conditions){
        const [on,off] = conditions
        return [state,!state].map(e=> e ? on : off )
    }
    open(state){
        let states = this.parse(state,['open','closed'])
        this.toggle(...states);
        return state
    };
    activate(state){
        let states = this.parse(state,['active','inactive'])
        this.toggle(...states);
        return state
    };
    visible(state){
        let states = this.parse(state,['show','hide'])
        this.toggle(...states);
        return state
    };

}

class State {
    constructor(id){
        this.state = {
            open:true,
            active:true,
            visible:true
        }
        this.id = id; 
    }

    get currentState(){
        const {open,active,visible} = this.state;
        return {open,active,visible};
    }

    set currentState(state){
         this.state = {...this.state,...state};
    }
}

class Mediator {
    constructor(){
        this.components = [];
    };
    getComponent(id){
        return this.components.filter(component=>component.state.id === id)[0];
    }
    open(id,forced){
        let {state,state:{currentState},component}= this.getComponent(id)
        state.currentState = {open:!component.open(forced ?? currentState.open)};
    }
    active(id,forced){
        let {state,state:{currentState},component}= this.getComponent(id)
        state.currentState = {active:!component.activate(forced ?? currentState.active)};
    }
    visible(id,forced){
        let {state,state:{currentState},component}= this.getComponent(id)
        state.currentState = {visible:!component.visible(forced ?? currentState.visible)};
    }
    registerComponent(ele,id){
        let component = {
            state : new State(id),
            component : new Component(ele)
        }
        this.components.push(component);
    }
    registerComponents(components){
        components.forEach(({ele,id})=>{
            let component = {
                state : new State(id),
                component : new Component(ele)
            }
            this.components.push(component);
        });

    }
    registerListener(action,id,force){
        return ()=>{this[action](id,force)}
    }
}







let mediator = new Mediator();
const [a,b,c,d,e,f,g,h] = _btn;
[a,b,c,d].forEach((btn,i)=>btn.addEventListener('click',mediator.registerListener('open',colors[i])));
[e,f,g,h].forEach((btn,i)=>btn.addEventListener('click',mediator.registerListener('active',colors[i])));
let buttonsToHide = [ {ele:d,id:'on4'},{ele:h,id:'active4'},{ele:c,id:'on3'},{ele:g,id:'active3'}]
mediator.registerComponents(buttonsToHide);

_divs.forEach((div,i)=>{
    mediator.registerComponent(div,colors[i])
    offSwitch.addEventListener('click',mediator.registerListener('open',colors[i],false));
    activate.addEventListener('click', mediator.registerListener('active',colors[i],false));
});

window.addEventListener('resize',()=>{
    mediator.registerListener('visible',colors[2],window.innerWidth>700)()
    mediator.registerListener('visible',colors[3],window.innerWidth>900)()
    mediator.registerListener('visible','on4',window.innerWidth>900)()
    mediator.registerListener('visible','active4',window.innerWidth>900)()
    mediator.registerListener('visible','on3',window.innerWidth>700)()
    mediator.registerListener('visible','active3',window.innerWidth>700)()
})