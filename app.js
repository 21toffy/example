// working with readline module




const fs = require('fs');

// fs.rename('text.txt', 'example.txt', (err)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log('successfully renamed the file!!!!')
//     }
// })
// fs.writeFile('text.txt', 'sample ekwe!!!!!!!!!!!!',(err=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log('file successfully altered');
//         fs.readFile('text.txt','utf8',(err, file)=>{
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log(file);
//             }
//         })
//     }
// }))

// const readline  = require('readline');
// const rl =  readline.createInterface({

//     input: process.stdin,
//     output: process.stdout  

// });


// let num1 = Math.floor(Math.random() * 10) + 1;

// let num2 = Math.floor(Math.random() * 10) + 1;
// let answer = num1 + num2;
// rl.question(`what is ${num1} + ${num2}? \n`, 
//     (userInput)  =>{
//         if(userInput.trim()==answer){
//             rl.close();
//         }
//         else{
//             rl.setPrompt('incorrect input!! \n');
//             rl.prompt();
//             rl.on('line', (userInput)=>{
//                 if(userInput==answer){
//                     rl.close();
//                 }
//                 else{
//                     rl.setPrompt(`your answer of ${ userInput } is wrong try again !! \n`);
//                     rl.prompt();
//                 }
//             });

//         }
//     });

// rl.on('close', ()=>{
//     console.log('closed !!!!!!!')
// });

// Events Module
// const EventEmitter = require('events')
// const eventEmitter = new EventEmitter();

// eventEmitter.on('mad', (num1, num2)=>{
//     console.log('console mad o emmiter has run !!!', num1+num2)

// });

//  eventEmitter.emit('mad', 2);


// const tutorial =require('./tutorial')

// console.log(tutorial.sum(3,5));
// console.log(tutorial.PI);
// console.log( new tutorial.someMathObject() );



// class Person extends EventEmitter{
//     constructor(name){
//         super();
//         this._name=name

//     }
//     get name(){
//         return this._name;
//     }
// }

// let toffy =new Person('toffy');


// toffy.on('name', ()=>{
//     console.log('my name is ' + toffy.name);
// });



// toffy.emit('name');