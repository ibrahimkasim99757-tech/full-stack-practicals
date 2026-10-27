const EventEmitter = require("events");
const emitter = new EventEmitter();

let lightstate1 = 0;
let lightstate2 = 0;
let lightstate3 = 0;
let lightstate4 = 0;
let fanstate1 = 0;
let fanstate2 = 0;
let fanstate3 = 0;
let fanstate4 = 0;
let acstate1 = 0;
let acstate2 = 0;
let acstate3 = 0;
let acstate4 = 0;
// fanstate1 = 0; // fan on
emitter.on("turnon", () => {
    if (!fanstate4) {
        fanstate4 = 1;
    } else {
    console.log("Fan already ON");
    }
});
// fanstate4 = 1; // fan off
emitter.on("turnoff", () => {
    if (fanstate4) {
        fanstate4 = 0;
    console.log("Fan OFF");
    } else {
    console.log("Fan already OFF");
    }
});
// acstate3 = 0; // ac on
emitter.on("turnon", () => {
    if (!acstate3) {
        acstate3 = 1;
    } else {
    console.log("AC already ON");
    }
});
// acstate3 = 1; // ac off
emitter.on("turnoff", () => {
    if (acstate3) {
        acstate3 = 0;
    } else {
    console.log("AC already OFF");
    }
});

// lightstate2 = 0; // light on
emitter.on("turnon", () => {
    if (!lightstate2) {
        lightstate2 = 1;
    } else {
        console.log("Light already ON");
    }
});
// lightstate2 = 1; // light off
emitter.on("turnoff", () => {
    if (lightstate2) {
        lightstate2 = 0;

    } else {
    console.log("Light already OFF");
    }
});
// check light state
emitter.on("check", () => {
    console.log("Light is", lightstate2 ? "ON" : "OFF");
});

// check fan state

emitter.on("check", () => {
    console.log("Fan is", fanstate4 ? "ON" : "OFF");
});

// check ac state
emitter.on("check", () => {
    console.log("AC is", acstate3 ? "ON" : "OFF");
});
// check light state
emitter.emit("turnon", acstate3);
emitter.emit("check", acstate3);

//emitter.emit("turnon");
//emitter.emit("check");
//emitter.emit("turnoff");
//emitter.emit("check");
