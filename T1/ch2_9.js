// write a node js script to write the text u are creating file to help.txt after that append thetext
// "you are appending the data" to the ssame file after that readthe file and print content on console.
// after finising read opration print the line thanks for using my program after that 

var fs = require("fs");

fs.writeFile("help.txt", "You are Creadting File", (err) => {
  if (err) {
    throw err;
  }
  console.log("Write in Help File Loaded");

  fs.appendFile("help.txt", "YOu are appending data", (err) => {
    if (err) {
      throw err;
    }
    console.log("Data Append in help.txt");

    fs.readFile("help.txt", "utf-8", (err, data) => {
      if (err) {
        throw err;
      }
      console.log("Destination File Content");
      console.log(data);
      console.log("thanks For Using My Program");
    });
  });
}); 