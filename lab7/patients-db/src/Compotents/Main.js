import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import Patient from './Patient';
import Details from './Detail';

class Main extends Component {

    constructor(props) {
        super(props);
    }

    createObjects() {
        this.items = [
            this.addPatient("Adam", "Słodowy", 88070801123, "M", "Doktór Zosia"),
			this.addPatient("Adam", "Słodowy", 88070801123, "M", "Doktór Kidler"),
			this.addPatient("Adam", "Słodowy", 88070801123, "M", "Doktór Mengele"),
        ]
    }

	addPatient(firstname, lastname, pesel, sex, familyDoctor) {
		return (
			<Patient firstName={ firstname } lastName={ lastname } pesel={ pesel } sex={ sex } familyDoctor={ familyDoctor }/>
			);
    }

    render() {
        return (
            <div className='container'>
                <div className="listing">
                    <List items={ this.createObjects() } name="Lista Pacjentów" />
                </div>
                <div className="details">
                    <Details />
                </div>
            </div>
        );
    }
}

export default Main;