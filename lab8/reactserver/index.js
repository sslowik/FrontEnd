const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;

app.use(bodyParser.json());
const numbers = [];

app.get('/api/', (req, res) => res.send('Hi there'));

app.get('/api/numbers/all', (req, res) => {
    res.send(numbers);
});

app.post('/api/numbers', (req, res) => {
    const number = req.body.number;
    numbers.push(number);
    res.send({"message": "number was added"});
});

app.delete('/api/numbers/remove', (req, res) => {
    const number = req.body.number;
    
    var i = numbers.indexOf(number);
    if (i > -1) {
        numbers.splice(i, 1)
    }
    res.send({"message": `number ${number} was deleted`});
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`));