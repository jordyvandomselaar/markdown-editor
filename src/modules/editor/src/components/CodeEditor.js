import {connect} from "react-redux";
import Editor from "./Editor";
import {setMarkdown} from "../../../../redux/actions";

const mapStateToProps = state => ({
    markdown: state.markdown,
});

const mapDispatchToProps = dispatch => ({
    updateMarkdown: markdown => dispatch(setMarkdown(markdown))
});

const CodeEditor = connect(mapStateToProps, mapDispatchToProps)(Editor);

export default CodeEditor;
