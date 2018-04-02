import React, {Component} from "react";

class Html extends Component {
    constructor(props) {
        super(props);

        this.containerRef = React.createRef();
    }

    render() {
        return (
            <div ref={this.containerRef}/>
        );
    }

    componentDidMount() {
        this.containerRef.current.innerHTML = this.props.html;
    }

    componentDidUpdate() {
        this.containerRef.current.innerHTML = this.props.html;
    }
}

export default Html;
