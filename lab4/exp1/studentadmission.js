const studentResult = require('./studentAdmission');
function buyprospectus() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Prospectus purchased successfully.");
        }, 1000);
    });
}

function fillform() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Form filled successfully.");
        }, 1000);
    });
}

function submitform() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Form submitted successfully.");
        }, 1000);
    });
}

function formVerificaation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Form verified successfully.");
        }, 1000);
    });
}

function  answerEntranceExam() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Entrance exam answered successfully.");
        }, 1000);
    });
}

function payment() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Payment done successfully.");
        }, 1000);
    });
}

module.exports = {
    buyprospectus,
    fillform,
    submitform,
    formVerificaation,
    answerEntranceExam,
    payment
};  