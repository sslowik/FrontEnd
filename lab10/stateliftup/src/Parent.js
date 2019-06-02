import React, {component} from 'react';
import Dollar from './Dollar';
import PLN from './PLN';

class Parent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dollar: 1,
            pln: this.calculatePln(1)

        }
    }

    calculateDollar(pln) {
        return pln * 3.83;
    }

    calculatePln(dollar) {
        return dollar * 0.26;
    }

    handleDollarChange = (value) => {
    this.setState( {
        dollar: value, 
        pln: this.calculatePln(value)
    });
}

handlePLNChange = (value) => {
    this.setState( {
        dollar: this.calculateDollar(value), 
        pln: value
    });
}

render () {
    return (
        <div>
            <Dollar dollars={this.state.dollar}
            onDollarChange={this.handleDollarChange}
            />
            <PLN plns={this.state.pln}
                onPLNChange={this.handlePLNChange}
        />
        </div>
    )
    }
}






