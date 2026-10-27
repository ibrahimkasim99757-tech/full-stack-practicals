
// hospital scenario using event emitter
const EventEmitter = require("events");

const emitter = new EventEmitter();
// ** Appointment **

emitter.on("appointment", (name) => {
    console.log(name + " booked an appointment.");
});
// ** Registration **
emitter.on("registration", (name) => {
    if (!name) {
        console.log("No name provided for registration.");
    } else if (name === "kashish") {
        //console.log(name + " registered for the appointment.");
    }else {
        console.log("registration do fast you missed the appointment");
    }
});
// ** Doctor Checkup **
emitter.on("doctorCheckup", (name) => {
    if (!name) {
        console.log("No name provided for doctor checkup.");
    } else {
        console.log(name + " is waiting for the doctor.");
    }
    console.log("Doctor is checking " + name + ".");
});
// ** Medicine **
emitter.on("medicine", (name) => {
    if (!name) {
        console.log("No name provided for medicine.");
    } else if (name === "kashish") {
        //console.log(name + " is receiving medicine.");
        console.log(name + " is receiving medicine.");
    } else {
        console.log("Medicine is not available for " + name + ".");
    }
    //console.log("Doctor prescribed medicines to " + name + ".");
});
// ** Payment **
emitter.on("payment", (name, paymentMethod) => {
    if(paymentMethod === "cash") {
        console.log(name + " paid the hospital bill in cash.");
    } else if(paymentMethod === "card") {
        console.log(name + " paid the hospital bill using card.");
    } else if(paymentMethod === "insurance") {
        console.log(name + " paid the hospital bill using insurance.");
    } else if(paymentMethod === "online") {
        console.log(name + " paid the hospital bill online.");
    } else if(name  === "kashish") {
        console.log("Invalid payment method provided for " + name + ".");
    } else {
        console.log(name + " paid the hospital bill.");
    }
});

// ** Emergency Patient **
emitter.on("emergencyPatient", (name) => {
    if (!name) {
        console.log("No name provided for emergency patient.");
    } else if (name === "kashish") {
        console.log(name + " is an EMERGENCY patient.");
        console.log("Doctor has been called immediately.");
    }else {
        console.log(name + " is not an emergency patient.");
    }
});

// ** Admit Patient **
emitter.on("admitPatient", (name) => {
    if (!name) {
        console.log("No name provided for admit patient.");
    } else {
        console.log(name + " has been admitted to the hospital.");
    }
});

// ** Treatment **
emitter.on("treatment", (name) => {
    if (!name) {
        console.log("No name provided for treatment.");
    } else {
        console.log("Treatment has started for " + name + ".");
    }
});

// ** Discharge **
emitter.on("dischargePatient", (name) => {
    if (!name) {
        console.log("No name provided for discharge patient.");
    } else {
        console.log(name + " has recovered and is discharged from the hospital.");
    }
});


// ** Normal Patient **

//emitter.emit("appointment", "kashish");
//emitter.emit("registration", "kashish");
//emitter.emit("doctorCheckup", "kashish");
//emitter.emit("medicine", "kashish");
//emitter.emit("payment", "kashish", "cash");

//console.log("kashish went home.");


// ** Emergency Patient **

//emitter.emit("emergencyPatient", "kashish");
//emitter.emit("registration", "Priya");
//emitter.emit("doctorCheckup", "Priya");
//emitter.emit("admitPatient", "Priya");
//emitter.emit("treatment", "Priya");
//emitter.emit("dischargePatient", "Priya");
//emitter.emit("payment", "Priya");

//console.log("Priya went home.");