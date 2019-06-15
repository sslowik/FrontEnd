
handleChange = (e) => {
    this.props.onDollarChange(e.target.value);
};

render () {
    const cash = this.props.dollars;
    return (
        <div>
            <label>Dollars</label>
            <input value={cash} onChange={this.handleChange}/>
        </div>
    )
}
}

export default Dollar;