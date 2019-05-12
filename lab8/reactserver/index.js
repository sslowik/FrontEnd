const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 4000;
const numbers = [];

// parse requests of content-type - application/json
app.use(bodyParser.json());
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to application 'Pacjenci' :) "});
});

// listen for requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

app.get('/api/', (req, res) => res.send('Hi there! API operational.'));

app.get('/api/numbers/all', (req, res) => {
    res.send(numbers);
});

app.post('/api/numbers', (req, res) => {
    const number = req.body.number;
    numbers.push(number);
    res.send({"message": `number ${number} added to database. \n Current array elements: ${numbers}.`});
});

app.delete('/api/numbers/all', (req, res) => {
    const number = req.body.number;
    
    var i = numbers.indexOf(number);
    if (i > -1) {
        numbers.splice(i, 1)
    }
    res.send({"message": `number ${number} deleted. \n Current array elements: ${numbers}.`});
});

app.put('/api/numbers/all', (req, res) => {
    const number = req.body.number;
    const replacement = req.body.replace;
    
    var i = numbers.indexOf(number);
    if (i > -1) {
        numbers[i] = replacement
    }
    res.send({"message": `Number ${number} with index ${i} replaced with ${replacement}.\n Current array elements: ${numbers}.`});
});