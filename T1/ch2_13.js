// TOPIC : EVENTS 1 question in exam

/*
Write a node JS program using the events module to stimulate a seq of events.
1. When a connection event occurs , print "connection succesfully" and trigger a data recieved event.
2. When the data recieved event occurs , print data recieved succesfully.
3. Finally print thanks at the end of execution
*/

/* 
var eventemitter = require("events");
var ee = new eventemitter();

ee.on('connection',function(){
    console.log("conn succesfully");
    ee.emit("Data-recieved")
});

ee.on("Data-recieved",function(){
    console.log("Data recieved successfully")
});

ee.emit("connection");
console.log("Thanks") */


/*
1. Registering multiple event listners for different events(myEvent1, myEvent2).
2. Removing a specific event listners (removeListner) for myEvent2.
3. Removing all listners (removeListner) associated myEvent1.(removeAllListner)
4. Trigger events and observe which listners execute.
*/
/* 
var eventemitter = require("events");
var ee = new eventemitter();

var fun1 = (msg)=>{
    console.log("Msg from fun1: ",msg);
}

var fun2 = (msg)=>{
    console.log("Msg from fun2:",msg);
}

ee.on("myEvent1",fun1);
ee.on("myEvent2",fun2);
ee.on("myEvent1",fun1);
ee.on("myEvent2",fun2);
ee.removeListener("myEvent2",fun2);
ee.removeAllListeners("myEvent1");

ee.emit("myEvent2","LJ University");
ee.emit("myEvent1","LJIET"); */


/* write a node js script to create 2 listners for a common event.
Print no. of events associated with an emitter
Remove 1 listner and call remaining listner again. Also print no. of remaining listners.
*/

/* var eventemitter = require("events");
var ee = new eventemitter();

var listner1 = function () {
    console.log("Listner 1 executed");
}
var listner2 = function () {
    console.log("Listner2 executed")
}
ee.on("conn", listner1);
ee.on("conn", listner2);

let count = ee.listenerCount("conn");
console.log("Count1:" + count);
// ee.emit("conn")

ee.removeListener("conn", listner1);
count = ee.listenerCount("conn");
console.log("Count again:" + count)
ee.emit("conn") */

/* 
Write a node JS script to handle event to write data in File , append data in file and then read the data from the file and display it in console. Use events and async fs module 

*/

/* var fs = require("fs")
var eventemitter = require("events");
var ee = new eventemitter();

ee.on("write",function(){
    fs.writeFile("a.txt","hello",(err)=>{
        if(err) throw err;
        console.log("File created");
        ee.emit("opened");
    })
});
ee.on("append",function(){
    fs.appendFile("a.txt","....",(err)=>{
        ee.emit("read");
    })
})  */

/* 
   create a folder named abc
   create a file in it named xyz.txt and enter data into it.
   append data to that file and print msg "data appened succesfully"
   read the data from the file and print msg on console. copy the content from xyz.txt to pqr.txt.
   delete the file xyz.txt and lastly print all operations performed.
   do all the operations using sync fs module
   */ 

