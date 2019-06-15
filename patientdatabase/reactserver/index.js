const express = require('express');
const bodyParser = require('body-parser');
//const cors = require('cors');

const Patient = require('./Patient');
const PatientDatabase = require('./PatientDatabase');

const app = express();
const port = 4001;

//app.use(cors);
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

const patients = new PatientDatabase();

app.get("/", (request, response) => response.send("Server listening..."));
app.get("/api", (request, response) => response.send("Server listening..."));

app.get('/api/patients/all', (request, response) => {
    response.send(patients.allRecords());
});

app.get('/api/patients/:pesel', (request, response) => {
    const pesel = request.params.pesel;
    response.send(patients.findPatientByPesel(pesel));
});

app.delete('/api/patients/:pesel', (req, res) => {
    const pesel = req.params.pesel;
    patients.deletPatient(pesel);
    res.send(`Deleted record of patient with PESEL: ${pesel}`);
});

app.post('/api/patients', (request, response) => {
    const firstname = request.body.firstname;
    const lastname = request.body.lastname;
    const sex = request.body.sex;
    const pesel = request.body.pesel;
    const familyDoctor = request.body.familyDoctor;
    patients.addPatient(new Patient(firstname, lastname, sex , pesel, familyDoctor));
    response.send(new Patient(firstname, lastname, sex , pesel, familyDoctor));
});

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));