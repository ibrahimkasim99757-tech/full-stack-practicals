const fs=require("fs");
console.log("tpye a sentence");
const writestream = fs.createWriteStream("student.txt","utf-8");
process.stdin.on("data",(data)=>{
    console.log("you have typed",data.toString());
    writestream.write(data);
    writestream.end();
});