// @flow
import CounterAction, { actionType as counterActionType } from './CounterAction';

const actions = Object.assign({},
    CounterAction,
);

actions.type = Object.assign({},
    counterActionType,
);

export default actions;