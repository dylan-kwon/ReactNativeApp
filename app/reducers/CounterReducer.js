// @flow
import { CounterAction } from '../actions';

const count: number = 0;
const type: Object = CounterAction.type;

function counterReducer(state: number = count, action: Object) {
    switch (action.type) {
        case type.COUNT_UP:
            return state + action.payload;

        case type.COUNT_DOWN:
            return state + action.payload

        default:
            return state;
    }
};

export default counterReducer;