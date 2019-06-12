import React from 'react';
import ReactDOM from 'react-dom';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: 1,
			lastName: 1,
            pesel: 1,
            sex: 1,
            familyDoctor: 1,
        }
    }
    render() {
        return (
            <span></span>
        );
    }
}

export default Details;