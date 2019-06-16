import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../PatientsDatabase.svg";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <img src={logo} className="App-logo" alt="logo" />
      <div><h4>Patients Database</h4></div>
      <div>
        <Link className="item" to="/">
          Add/Delete Patient
        </Link>
        <Link className="item" to="/patients">
          Patients
        </Link>
        <Link className="item" to="/credits">
          Credits
        </Link>
      </div>
    </header>
  );
};

export default styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  background: hsl(215, 100%, 88%, 0.9);;
  padding: 10px 5%;
  width: 100%;
  color: #fff;
  .item {
    padding: 0px 10px;
    text-decoration: none;
    color: #fff;
    font-size: 1.25em;
    &:hover {
      color: #000;
    }
  }
`;