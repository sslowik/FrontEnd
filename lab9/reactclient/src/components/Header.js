import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../BePatient.svg";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <Link className="item" to="/">
          Welcome to our great Patients Database :>
        </Link>
        <Link className="item" to="/hook">
          Hooks to Patients Database
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
  background: hsl(77, 80%, 60%);;
  padding: 10px 5%;
  width: 88%;
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