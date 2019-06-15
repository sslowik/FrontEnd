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

    toString() {
        return `Patient: ${this._firstname} ${this._lastname}, sex: ${this._sex}, PESEL: ${this._pesel}, of FamilyDoctor: ${this._familyDoctor}.`;
    }
}

module.exports = Patient;