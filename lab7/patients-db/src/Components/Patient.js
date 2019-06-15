import React from 'react';
import ReactDOM from 'react-dom';

class Patient extends Component {
    constructor(props) {
        super(props);
		this.firstName = props.firstName;
		this.lastName = props.lastName;
		this.pesel = pros.pesel;
		this.sex = props.sex;
		this.familyDoctor = props.familyDoctor;
    }

    getData() {
        return (
            <div>
                <h1>Dane Pacjenta: </h1>
                <ul>
                    <li>Imię: { this.firstName }</li>
                    <li>Nazwisko: { this.lastName }</li>
                    <li>PESEL: { this.pesel }</li>
                    <li>Płeć: { this.sex }</li>
                    <li>Lekarz rodzinny: { this.familyDoctor }</li>
                </ul>
            </div>
        );
    }
}

export default Patient;