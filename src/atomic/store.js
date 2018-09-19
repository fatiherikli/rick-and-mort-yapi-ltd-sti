let state = {};

export const setState = updates => {
    state = {
        ...state,
        ...updates,
    };
}

export const getState = key => state[key];
