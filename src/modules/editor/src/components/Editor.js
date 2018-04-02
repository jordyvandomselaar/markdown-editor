import React, {Component} from "react";
import {Controlled as CodeMirror} from "react-codemirror2";
import "codemirror/lib/codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/monokai.css";
import "codemirror/mode/markdown/markdown";
import styled from "styled-components";
import {markdown} from "markdown";

const StyledCodeMirror = styled(CodeMirror)`
  width: 100%;
  height: 100%;
  
  .CodeMirror {
    height: 100%;
    
    pre {
        font-size: 1.1rem; 
        font-family: Helvetica, sans-serif;
    }
  }
`;

class Editor extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <StyledCodeMirror
                value={this.props.markdown}
                onBeforeChange={this.updateMarkdown.bind(this)}
                options={{
                    mode: "markdown",
                    theme: "monokai",
                    lineNumbers: true,
                }}
            />
        );
    }

    updateMarkdown(editor, data, value) {
        this.props.updateMarkdown(value);
    }
}

export default Editor;
