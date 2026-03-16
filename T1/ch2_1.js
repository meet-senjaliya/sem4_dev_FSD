// function main(cb){
//     console.log("Task 1 Completed");
//     setTimeout(function(){
//         cb("Operation Completed")
//     },2000);
//     console.log("Task 2 Completed");
// }
// function callback_fun(result){
//     console.log("Result:"+result)
// }
// main(callback_fun);

const message = function(){
console.log("Print after 3 seconds");
}
setTimeout(message,3000);

setTimeout(function(){
    console.log("0000");
},3000);

setTimeout(()=>{
    console.log("0000");
},3000)
