// @flow

const actionType = {
    COUNT_UP: 'COUNT_UP',
    COUNT_DOWN: 'COUNT_DOWN'
};

function countUp(count: number) {
    return {
        type: actionType.COUNT_UP,
        payload: {
            count: count
        }
    }
}

function countDown(count: number) {
    return {
        type: actionType.COUNT_DOWN,
        payload: {
            count: count
        }
    }
}

export {
    actionType
}

export default {
    countUp,
    countDown
}