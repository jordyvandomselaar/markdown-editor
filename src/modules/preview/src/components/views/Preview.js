import React from "react";
import PreviewComponent from "../Preview";
import styled from "styled-components";

const Container = styled.div`
  padding: 10px;
  height: 100%;
`;

const Preview = () => (
    <Container>
        <PreviewComponent/>
    </Container>
);

export default Preview;
