const express = require("express");
const math = require("./maths");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to the Interest Calculator!");
});

app.get("/simple-interest", (req, res) => {
  const { init,interestRate,noofyears}= req.query;
  console.log(init);

res.send(math.calculateSimpleInterest(init, interestRate, noofyears));
});

app.get("/compound-interest", (req, res) => {

    const { init, interestRate, noofyears } = req.query;

    res.send(math.calculateCompoundInterest(init, interestRate, noofyears));
});

app.listen(PORT, () => {
  console.log(`Server is created and listening on port ${PORT}`);
});




// const {calculateCompoundInterest,calculateSimpleInterest}  = require("./maths");
// const express=require("express");

// const PORT = 3000;
// const app=express();

// app.get("/calculateSimpleInterest",(req,res)=>{
//   const {init,interest,noofyears}=req.query;
//   res.send(calculateSimpleInterest(number(init),number(interest),number(noofyears)));
//   });

// app.get("/compound-interest", (req, res) => {

//     const { init, interestRate, noofyears } = req.query;

//   res.send(calculateSimpleInterest(number(init),number(interest),number(noofyears)));
//   });

// app.listen(PORT,()=>{
//     console.log(`Server is created and listening on port ${PORT}`);
// })

//math.calculateSimpleInterest(1000,10,4);




// const { SimpleInterest, CompoundInterest } = require("./math")
// const express = require("express");
// const app = express();

// const PORT = 3000;

// //app.get("/", (req, res) => {
//     res.send(`
//         <!DOCTYPE html>
//         <html>
//         <body>
//             <script>
//                 const button = document.createElement("button");
//                 button.textContent = "SimpleInterest";
//                 button.onclick = () => {
//                     window.location.href = "/SimpleInterest";
//                 };
//                 document.body.appendChild(button);
//             </script>
//         </body>
//         </html>
//     `);
// });

// app.get("/SimpleInterest", (req, res) => {
//     const { Amount, ROI, Time } = req.query
//     // 
//     let SI = SimpleInterest(Amount, ROI, Time)
//     res.send(SI)
// })

// app.get("/CompoundInterest", (req, res) => {
//     const { Annual, P, ROI, N, Time } = req.query

//     let CI = CompoundInterest(Annual, P, ROI, N, Time);
//     console.log(CI)
//     res.send(CI)
// })


// app.listen(PORT, () => {
//     console.log('Servers are working at http://localhost:3000')
// })