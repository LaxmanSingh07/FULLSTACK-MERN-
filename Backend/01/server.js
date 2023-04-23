const express = require('express');
const app = express();
//Routes

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/api/car', (req, res) => {
    const {name,brand}=req.body;
    res.send({name,brand});
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

