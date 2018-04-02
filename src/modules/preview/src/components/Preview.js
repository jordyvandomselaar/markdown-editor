import {connect} from "react-redux";
import Html from "./Html";

const mapStateToProps = ({markdown}) => {
    const html = window.marked(markdown);

    return {html};
};

const Preview = connect(mapStateToProps)(Html);

export default Preview;
