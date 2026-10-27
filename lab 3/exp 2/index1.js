const EventEmitter = require ("evenst");
const eventemitter = new EventEmitter();
let doctorstate={state:0};
let patientstate={state:0};
let apointmentstate={state:0};
eventemitter.on("come in",()=>{
    if(doctor.state===0){
        doctor.state=1;
        console.log("doctor call patient");
    }
    else 
        console.log("doctoris busy");
})
eventemitter.on("apointment",()=>{
    if(doctor.state===1){
        apointmentstate.state=1
        console.log("apointment booked");
    }
    else
        console.log("didnt got apointment");
})
eventemitter.on("check apointment",()=>(
    console.log("patient is",(patient.state===1? "apointment yes": 
        "apointment no"),patient.state)
))
eventemitter.emit("come in");
eventemitter.emit("apointment");
eventemitter.emit("check apointment")