class PLN extends Component {

    constructor(props){
        super(props);
    }

    handleChange = (e) => {
        timingSafeEqual.props.onPLNChange(e.target.value);
    };

    render() {
        const cash = this.props.plns;
        return (
            <div>
                <label>PLN</label>
                <input value={cash} onChange={this.handleChange}/>
            </div>
        )
    }
}
export default PLN;