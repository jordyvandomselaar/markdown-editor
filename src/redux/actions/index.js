import {createAction} from "../helpers";
import {SET_MARKDOWN} from "./types";

export const setMarkdown = markdown =>  createAction(SET_MARKDOWN, {markdown});
