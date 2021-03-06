/**
 * Update an object.
 *
 * @param oldObject
 * @param newValues
 * @returns {{}}
 */
export const updateObject = (oldObject, newValues) => {
    return {...oldObject, ...newValues};
};

/**
 * Create a new reducer.
 *
 * @param initialState
 * @param handlers
 * @returns {function(*=, *=): *}
 */
export const createReducer = (initialState, handlers) =>
    (state = initialState, action) =>
        handlers.hasOwnProperty(action.type)
            ? handlers[action.type](state, action)
            : state;

/**
 * Create a new action
 *
 * @param type
 * @param data
 * @returns {{type: *}}
 */
export const createAction = (type, data) => {
    return {
        type,
        ...data
    };
};
