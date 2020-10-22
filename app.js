
// displaying media file/jpg
const http = require('http');
const fs = require('fs');


http.createServer((req, res)=>{
    const readStream = fs.createReadStream('./static/juanmatagarcia-20180331-0001.jpg');
    res.writeHead(200,{'content-type':'image/jpg'});
    readStream.pipe(res);
}).listen(3000);


// displaying html File
// const http = require('http');
// const fs = require('fs');


// http.createServer((req, res)=>{
//     const readStream = fs.createReadStream('./static/index.html');
//     res.writeHead(200,{'content-type':'text/html'});
//     readStream.pipe(res);
// }).listen(3000);


// displaying json
// const http = require('http');
// const fs = require('fs');


// http.createServer((req, res)=>{
//     const readStream = fs.createReadStream('./static/example.json');
//     res.writeHead(200,{'content-type':'application/json'});
//     readStream.pipe(res);
// }).listen(3000);








//workin with http
// const http = require('http');
// const server = http.createServer((req, res)=>{
//     if(req.url=== '/'){
//         res.write('hello world from node js !!!!');
//         res.end();
//     }
//     else{
//         res.write('usin some other domain');
//         res.end();
//     }
// });

// server.listen('3000')

// working with readline module




// const fs = require('fs');
// const readStream = fs.createReadStream('./toffy_folder/toffy.txt', 'utf8');
// readStream.on('data', (chunk)=>{
//     console.log(chunk);
// })


// fs.mkdir('toffy_folder', (err)=>{
//      if(err){
//          console.log(err);
//      }
//      else{
        // fs.rmdir('toffy_folder', (err)=>{
        //     if (err){
        //         console.log(err);
        //     }
        //     else{
        //         console.log('successfully removed the folder!!!')

        // fs.writeFile('./toffy_folder/toffy.txt', 'shit on my mind i dont wanted to flex',(err)=>{
        //     if(err){
        //         console.log(err);
        //     }
        //     else{
        //         console.log('successfully created file')
        //     }
        // })
        //     }

        // })
        //  console.log('toffy folder successfullly created!!')


// DELETING A FILE
// fs.unlink('example.txt', (err)=>{
//     if (err){
//         console.log(err)
//     }else{
//         console.log('file deleted !!!!')
//     }
// } );

// fs.appendFile('example.txt', 'thijs content was inputed programmatically in to this file not manually', (err)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log('successfully appended data to the file')
//     }
// })
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