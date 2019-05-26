const Patient = require('./Patient.js');

class PatientDatabase {
    constructor() {
        this._patients = [];

        this.addPatient(new Patient('Adam', 'Słodowy', 'M', 88112302211, 'Jakub Sienkiewicz'));
        this.addPatient(new Patient('Magdalena', 'Kwasowa', 'F', 99061507888, 'Jakub Sienkiewicz'));
        this.addPatient(new Patient('Tony', 'Halik', 74010109777 , 'Doktor Zosia'));
    }

    findPatientByPesel(pesel) {
        return this._patients.find(patient => patient.pesel === pesel);
    }

    addPatient(patient) {
        if(this._patients.some(patientInDatabase => patient.pesel === patientInDatabase.pesel)){
            console.log("Patient already has record in database!");
            return;
        }

        console.log("Creating new record in database.");
        return this._patients.push(patient);
    }

    deletPatient(pesel) {
        this._patients = this._patients.filter(patient => patient.pesel !== pesel);
    }

    displayPatient(pesel) {
        console.log(this.findPatientByPesel(pesel).toString());
    }

    displayPatients() {
        this._patients.forEach(patient => console.log(patientToString(patient)));
    }

    allRecords() {
        return this._patients;
    }

    patientToString(patient) {
        return `Patient: ${patient._firstname} ${patient._lastname}, PESEL: ${patient._pesel}, sex: ${patient._sex}, of FamilyDoctor: ${patient._familyDoctor}zł.`;
    }
}

module.exports = PatientDatabase;