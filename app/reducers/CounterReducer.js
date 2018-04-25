// @flow
import actions from '../actions';

const count: number = 0;

function counterReducer(state: number = count, action: Object) {
    switch (action.type) {
        case actions.type.COUNT_UP:
            return state + action.payload.count;

        case actions.type.COUNT_DOWN:
            return state - action.payload.count;

        default:
            return state;
    }
};

export default counterReducer;