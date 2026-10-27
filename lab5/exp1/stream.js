const fs = require("fs");
const readstream = fs.createReadStream("student.txt","utf-8");
readstream.on("data",(chunk)=>{
    console.log("data received");
    console.log("chunk");
})
readstream.on("end",()=>{
    console.log("filereading is complete");
})