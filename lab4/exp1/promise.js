const { checkMarks } = require("./app");

const createPromise = (marks) => {
    return new Promise((resolve, reject) => {
        if (marks >= 40) {
            resolve("pass");
        } else {
            reject("fail");
        }
    });
};

checkMarks(90)
    .then((result) => {
        console.log("Result: " + result);
    })
    .catch((result) => {
        console.log("Result: " + result);
    });