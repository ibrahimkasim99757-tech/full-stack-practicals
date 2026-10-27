const fs = require("fs");
const readstream= fs.createReadStream("./student.txt","utf-8")
const writestream= fs.createWriteStream("./student.txt.bak",);
readstream.pipe(writestream);
writestream.on("finish",()=>{
    console.log("file copied");
});
readstream.on("error",(err)=>{
    console.log(err.message);
});