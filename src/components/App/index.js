import React from "react";
import Editor from "../../modules/editor/src/components/views/Editor";
import Main from "../views/layouts/Main";
import styled from "styled-components";
import Preview from "../../modules/preview/src/components/views/Preview";

const Flex = styled.div`
  flex: 1;
  height: 100%;  
`;

const PreviewContainer = styled.div`
  flex: 1;
  height: 100%;
  overflow: auto;
`;

const App = () => (
    <Main>
        <Flex>
            <Editor/>
        </Flex>
        <PreviewContainer>
            <Preview/>
        </PreviewContainer>
    </Main>
);

export default App;
