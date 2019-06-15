import React from "react";
import styled from "styled-components";

const Main = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const ToDo = () => {
    return (
        <Main>
            <h1>PAGE 404 - component not found. </h1>
            <h1>ToDo list: 
                - Delete
                - Update
                - LogIn
            </h1>
        </Main>
    )
}

export default ToDo;