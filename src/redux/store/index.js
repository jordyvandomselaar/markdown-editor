import {createStore} from "redux";
import {Provider} from "react-redux";
import React from "react";
import reducer from "../reducers";

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const ReduxStore = ({children}) => <Provider store={store}>{children}</Provider>;

export default ReduxStore;
