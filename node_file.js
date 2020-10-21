console.log('welcome tofunmi okedeji!!')

var fs = require('fs');
// console.log(fs);
var data = fs.readFileSync('text.txt');
console.log(data.toString());

console.log('Ends here');



console.log('Non-blocking here.................!!!')

fs.readFile('ext.txt', function (err, data) {
   if(err){
       console.log('an error');
       console.log(error);
   }
   setTimeout(() => {
       console.log('after 2 seconds')
   }, 2000); 
});


var event  = require('events');
const myEvent = new event.EventEmitter();

console.log('start non blocking first here !!!')


