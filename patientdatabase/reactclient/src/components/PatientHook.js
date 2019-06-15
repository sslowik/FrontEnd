import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .game {
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

const initialState = {
  patientFirstname: "",
  patientLastname: "",
  patientSex: "",
  patientPesel: "",
  patientFamilyDoctor: "",
};

const Patient = () => {
  const [patientFirstname, setPatientFirstname] = useState(initialState.patientFirstname);
  const [patientLastname, setPatientLastname] = useState(initialState.patientLastname);
  const [patientSex, setPatientSex] = useState(initialState.patientSex);
  const [patientPesel, setPatientPesel] = useState(initialState.patientPesel);
  const [patientFamilyDoctor, setPatientFamilyDoctor] = useState(initialState.patientFamilyDoctor);

  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    // console.log("Fetching Patients");
    const res = await fetch("http://localhost:4001/api/patients/all");
    const data = await res.json();
    setPatients(data);
  };

  useEffect(() => {fetchPatients(); }, []);

  const handleSubmit = async () => {
    console.log("Posting Patients");
    await axios.post("http://localhost:4001/api/patients", {
      firstname: patientFirstname,
      lastname: patientLastname,
      sex: patientSex,
      pesel: patientPesel, 
      familyDoctor: patientFamilyDoctor, 
    });
  };

  return (
    <Main>
      <h1>Patients with hooks</h1>
      <div>
        {patients.map(patient => (
          <p className="patient" key={patient._pesel}>
            Firstname: {patient._firstname} Lastname: {patient._lastname} Sex: {patient._sex} Family Doctor: {patient._familyDoctor} 
          </p>
        ))}
      </div>
      <form className="row">
        <div className="row-inside">
          <label>Enter Patient Firstname:</label>
          <Input onChange={e => setPatientFirstname(e.target.value)} value={patientFirstname} />
        </div>
        <div className="row-inside">
          <label>Enter Patient Lastname:</label>
          <Input onChange={e => setPatientLastname(e.target.value)} value={patientLastname} />
        </div>
        <div className="row-inside">
          <label>Enter Patients sex (M - Male / F - Female / U - Unspecified):</label>
          <Input onChange={e => setPatientSex(e.target.value)} value={patientSex} />
        </div>
        <div className="row-inside">
          <label>Enter Patients Pesel (11 numbers):</label>
          <Input
            type="number"
            onChange={e => setPatientPesel(e.target.value)}
            value={patientPesel}
          />
        </div>
        <div className="row-inside">
          <label>Enter Patient Family Doctor:</label>
          <Input onChange={e => setPatientFamilyDoctor(e.target.value)} value={patientFamilyDoctor} />
        </div>
        <div className="row-inside">
          <Button onClick={() => handleSubmit()}>SUBMIT!</Button>
        </div>
      </form>
    </Main>
  );
};

export default Patient;