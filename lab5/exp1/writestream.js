const fs = require("fs");
const writestream = fs.createWriteStream("student.txt","utf-8");
writestream.write("I am in tybca");
writestream.write("Studing in mes");
writestream.write("My name is tanaya");

writestream.close();
writestream.on("finish",()=>{
    console.log("file writing complete");
});