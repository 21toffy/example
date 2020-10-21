// Events Module
const EventEmitter = require('events')
const eventEmitter = new EventEmitter();

eventEmitter.on('mad', (num1, num2)=>{
    console.log('console mad o emmiter has run !!!', num1+num2)

});

 eventEmitter.emit('mad', 2);


// const tutorial =require('./tutorial')

// console.log(tutorial.sum(3,5));
// console.log(tutorial.PI);
// console.log( new tutorial.someMathObject() );



class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name

    }
    get name(){
        return this._name;
    }
}

let toffy =new Person('toffy');


toffy.on('name', ()=>{
    console.log('my name is ' + toffy.name);
});



toffy.emit('name');