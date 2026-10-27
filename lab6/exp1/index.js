const express = require("express");
const app = express();

app.get("/API/teacher/save/getinfo", (req, res) => {
    res.json({ message: "Teacher info" });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});