const express = require('express');
const app = express();
const port = [3000, 3001, 3002];

app.get('/', (req, res) => {
    res.send ('Hello World!');
});

port.forEach((port)=>{
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
})
});
