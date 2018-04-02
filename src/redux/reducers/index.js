// Default state

import {createReducer, updateObject} from "../helpers";
import {SET_MARKDOWN} from "../actions/types";

const initialState = {
    markdown: "sd",
};

const setMarkdown = (state, {markdown}) => updateObject(state, {markdown});

const markdown = createReducer(initialState, {
    [SET_MARKDOWN]: setMarkdown,
});

export default markdown;
