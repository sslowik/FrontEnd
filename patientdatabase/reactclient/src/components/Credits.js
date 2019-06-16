import React from "react";
import styled from "styled-components";

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Credits = () => {
  return (
    <Main>
      <h1>Credits</h1>
      <hr></hr>
      <p>Project developed on Gdansk University faculty: "Frontend Development" by Dr Jakub Neumann.</p>
      <p>Thank you very much for your knowledge and support with my first steps in JavaScript secrets.</p>
      <hr></hr>
      <p>Special thanks to friends who guided me in hard parts of Project: </p>
      <br></br>
      <p>Marcin M., Piotr Z., Jakub L. </p>
      <br></br>
      <p>I wouldn't do it without your support!</p>
    </Main>
  );
};

export default Credits;