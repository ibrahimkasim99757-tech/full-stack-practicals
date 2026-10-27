const express =require("express")

const app=express();

app.get("/",(req,res)=>{
    res.send("Lok")

})
app.listen(3000);

