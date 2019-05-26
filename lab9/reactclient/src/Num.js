import React, { Component } from 'react';
import axios from 'axios';

class Num extends Component {
    
    state = {
        number: '',
        numbers: []
    };

    componentDidMount(){
        this.fetchNumbers();
    }
    
    renderNumbers() {
        return this.state.numbers.map( (n) => n).join(', ') 
    }

    async fetchNumbers() {
        const values = await axios.get("http://localhost:4000/api/numbers/all")
            .then(resp => resp.data);
        console.log(values);
        this.setState({ numbers: values})
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:4000/api/numbers", {number: this.state.number} );
        await this.fetchNumbers();
    }

    render() {
        return (
            <div>

                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Enter number:</label>
                        <input 
                        value={this.state.number}
                        onChange={ event => this.setState( { number: event.target.value } ) }
                    />
                    <button>Submit</button>
                </form>
            </div>
            <div>{this.renderNumbers()}</div>
            </div>
        )
    }
}

export default Num;