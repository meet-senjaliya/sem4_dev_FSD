const abc = require('events');
const ee = new abc();

ee.on('start',(start,end)=>{
    console.log('started from'+start+"to"+end);
});
ee.emit('start',1,100);
//imp event module