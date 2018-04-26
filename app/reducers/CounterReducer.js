// @flow
import actions from '../actions';

const DEFAULT_COUNT = 0;

function counterReducer(state: number = DEFAULT_COUNT, action: Object) {
    switch (action.type) {
        case actions.type.COUNT_UP:
            return state + action.payload.count;

        case actions.type.COUNT_DOWN:
            return state - action.payload.count;

        case actions.type.COUNT_RESET:
            return action.payload.count;

        default:
            return state;
    }
};

export default counterReducer;