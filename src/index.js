import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import ReduxStore from "./redux/store";

ReactDOM.render(
    <ReduxStore>
        <App/>
    </ReduxStore>
    , document.getElementById("root"));
registerServiceWorker();
