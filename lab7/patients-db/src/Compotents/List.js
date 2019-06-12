import React from 'react';
import ReactDOM from 'react-dom';

class List extends Component {
    constructor(props) {
        super(props);
        this.items = props.items;
    }

    listingItem() {
        this.items.array.forEach(element => {
            return (<li> element.firstName element.lastName </li>)
        });
    }

    render() {
        return (
            <div>
                <h1>Lista pacjentów</h1>
                <ul>
                    { this.listingItem() }
                </ul>
            </div>
        )
    }
}


export default List;