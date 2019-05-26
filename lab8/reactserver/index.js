const express = require('express');
const bodyParser = require('body-parser');

const Patient = require('./Patient');
const PatientDatabase = require('./PatientDatabase');

const app = express();
const port = 4000;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

const patients = new PatientDatabase();

app.get('/api/patients/all', (req, res) => {
    res.send(patients.allRecords());
});

app.get('/api/patients/:pesel', (req, res) => {
    const pesel = req.params.pesel;
    res.send(patients.findPatientByPesel(pesel));
});

app.delete('/api/patients/:pesel', (req, res) => {
    const pesel = req.params.pesel;
    patients.deletPatient(pesel);
    res.send(`Deleted record of patient with PESEL: ${pesel}`);
});

app.post('/api/patients', (req, res) => {
    const firstnamename = req.body.firstname;
    const lastname = req.body.lastname;
    const sex = req.body.sex;
    const pesel = req.body.pesel;
    const familyDoctor = req.body.familyDoctor;
    patients.addPatient(new Patient(firstname, lastname, sex , pesel, familyDoctor));
    res.send(new Patient(firstname, lastname, sex , pesel, familyDoctor));
});

app.listen(port, () => console.log(`Listening on port ${port}`));