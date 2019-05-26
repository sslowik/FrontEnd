class Patient {
    constructor(firstname, lastname, sex, pesel, familyDoctor) {
        this._firstname = firstname;
        this._lastname = lastname;
        this._sex = sex;
        this._pesel = pesel;
        this._familyDoctor = familyDoctor;
    }

    get firstname() {
        return this._firstname;
    }

    get lastname() {
        return this._lastname;
    }

    get sex() {
        return this._sex;
    }

    get pesel() {
        return this._pesel;
    }

    get familyDoctor() {
        return this._familyDoctor
    }

    patientToString() {
        return `Patient: ${this._firstname} ${this._lastname}, PESEL: ${this._pesel}, sex: ${this._sex}, of FamilyDoctor: ${this._familyDoctor}zł.`;
    }

}

module.exports = Patient;