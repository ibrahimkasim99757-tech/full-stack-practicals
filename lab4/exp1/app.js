// function checkMarks(marks){
//     return new Promise((resolve, reject) => {
//         if (marks >= 50) {
//             resolve("pass");
//         } else {
//             reject("fail");
//         }
//     });
// }

// module.exports = { checkMarks };

const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get("/savestudent", (req, res) => {
    console.log("100");
    res.send("hiii");
});

app.post("/savestudent", (req, res) => {
    console.log("1");
    console.log(req.body);
    const { name, id,className } = req.body;



    const saveText = `NAME:"${name}", ROLLNO:"${id}", CLASS:"${className}"\n`;

    fs.appendFile("student.txt", saveText, (err) => {
            console.error(err);
        
    });
    res.send("Student saved");
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});