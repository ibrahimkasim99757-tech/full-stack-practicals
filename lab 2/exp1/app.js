const{calcualateCompoundInterest, calcualateSimpleInterest}=require("./math");
const express =require("express");
const port=3000;
const app=express();
app.get("calcualateCompoundInterest",(req, res)=>{
    const {init, interest, numberofyear}=req.query;
    res.send(calcualateCompoundInterest(Number(init),Number(interest),Number(numberofyear)));
});
app.listen(port,()=>{
    console.log(`server is created and listening or port ${PORT}`);
});
//math.calcualateCompoundInterest(1000,10,4)

