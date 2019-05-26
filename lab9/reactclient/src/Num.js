import React, { Component } from 'react';
import axios from 'axios';

class Num extends Component {
    
    state = {
        numberToAdd: "",
        numberToDelete: "",
        numbers: []
    };

    componentDidMount(){
        this.fetchNumbers();
    }
    
    renderNumbers() {
        return this.state.numbers.map( n => n ).join(','); 
    }

    async fetchNumbers() {
        const values = await axios.get("http://localhost:4000/api/numbers/all")
            .then(resp => resp.data);
        console.log(values);
        this.setState({ numbers: values})
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post("http://localhost:4000/api/numbers", { number: this.state.numberToAdd } );
        await this.fetchNumbers();
    }

    handleDelete = async (event) => {
        event.preventDefault();
        await axios.delete("http://localhost:4000/api/numbers/all", { number: this.state.numberToDelete } );
    }

    render() {
        return (
            <div>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>Enter number:</label>
                        <input value={this.state.numberToAdd}
                        onChange={ event => this.setState( { numberToAdd: event.target.value } ) }
                    />
                    <button>Submit</button>
                </form>
            </div>
            <div>Current numbers:</div>
            <div>{this.renderNumbers()}</div>
            <div>===================</div>
            <form onSubmit={this.handleDelete}>
                        <label>Enter number to delete:</label>
                        <input value={this.state.numberToDelete}
                        onChange={ event => this.setState( { numberToDelete: event.target.value } ) }
                    />
            <button>Delete</button>
            </form>
            <div>Current numbers:</div>
            <div>{this.renderNumbers()}</div>
            </div>
        )
    }
}

export default Num;