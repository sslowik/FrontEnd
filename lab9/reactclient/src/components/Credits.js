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
      <p>Project developed during Frontend Development faculty with great help of Dr Jakub Neumann.</p>
      <p>Thank you very much for all knowledge and support.</p>
      <hr></hr>
      <p>Special thanks to friends who helped me a lot: </p>
      <br></br>
      <p>Marcin M., Patryk D., Jakub L. </p>
      <br></br>
      <p>I wouldn't do it without your support!</p>
    </Main>
  );
};

export default Credits;