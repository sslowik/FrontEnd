import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .patient {
    font-size: 1.5rem;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .row-inside {
    display: flex;
    flex-direction: column;
    flex: 50%;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-size: 2rem;
  transition: 0.3s ease box-shadow background;
  background: #506cc2;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
`;

const Input = styled.input`
  margin: 5px 30px 10px 0px;
  padding: 0 10px;
  font-size: 1em;
  line-height: 2.5em;
  font-weight: 400;
`;

class Patient extends Component {
  state = {
    patient: "",
    patients: [],
    firstname: "",
    lastname: "",
    sex: "",
    pesel: "",
    familyDoctor: ""
  };

  componentDidMount() {
    this.fetchPatients();
  }

  renderPatients() {
    return this.state.patients.map(patient => patient._pesel);
  }

  async fetchPatients() {
    const values = await axios.get("http://localhost:4000/api/patients/all");
    this.setState({ patients: values.data });
  }

  handleSubmit = async event => {
    await axios.post("http://localhost:4000/api/patients/", {
      firstname: this.state.patientFirstname,
      lastname: this.state.patientLastname,
      sex: this.state.patientSex,
      pesel: this.state.patientPesel, 
      familyDoctor: this.state.patientFamilyDoctor, 
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    const { patients, patientFirstname, patientLastname, patientSex, patientPesel, patientFamilyDoctor } = this.state;
    return (
      <Main>
        <h1>Patient</h1>
        <div>
          {patients.map(patient => (
            <p className="patient" key={patient._pesel}>
              Firstname: {patient._firstname} Lastname: {patient._lastname} Sex: {patient._sex}
              Family Doctor: {patient._familyDoctor}
            </p>
          ))}
        </div>
        <form onSubmit={this.handleSubmit} className="row">
          <div className="row-inside">
            <label>Enter Patient Firstname:</label>
            <Input
              id="patientFirstname"
              value={patientFirstname}
              onChange={this.handleChange}
            />
          </div>
          <div className="row-inside">
            <label>Enter Patient Lastname:</label>
            <Input
              id="patientLastname"
              value={patientLastname}
              onChange={this.handleChange}
            />
          </div>
          <div className="row-inside">
            <label>Enter Patients sex:</label>
            <Input
              id="patientSex"
              value={patientSex}
              onChange={this.handleChange}
            />
          </div>
          <div className="row-inside">
            <label>Enter Patients PESEL:</label>
            <Input
              id="patientPesel"
              type="number"
              value={patientPesel}
              onChange={this.handleChange}
            />
          </div>
          <div className="row-inside">
            <label>Enter Patients Family Doctor:</label>
            <Input
              id="patientFamilyDoctor"
              value={patientFamilyDoctor}
              onChange={this.handleChange}
            />
          </div>
          <div className="row-inside">
            <Button>SUBMIT!</Button>
          </div>
        </form>
      </Main>
    );
  }
}

export default Patient;