import React from 'react'
import ReactDOM from 'react-dom'
import React, { Component } from 'react';

class Clock extends Component {
    
    constructor(props) {
        super(props);
        this.nazwa = props.name;
        this.state = {
            date: new Date(),
            zone: 'GMT + 1'
        }
    }

    componentDidMount() {
        this.timerId = setInterval ( handler: () => {
            this.tick()
        }, timeout: 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
        
    tick() {
        this.setState( state; {
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>{this.nazwa}</h1>
            </div>
        )
    }

}
