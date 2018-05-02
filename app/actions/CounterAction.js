// @flow
const actionType = {
    COUNT_UP: 'COUNT_UP',
    COUNT_DOWN: 'COUNT_DOWN',
    COUNT_RESET: 'COUNT_RESET',
    COUNT_RANDOM: 'COUNT_RANDOM'
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

function countReset() {
    return {
        type: actionType.COUNT_RESET,
        payload: {
            count: 0
        }
    }
}

function countRandom() {
    return {
        type: actionType.COUNT_RANDOM,
        payload: {
            count: Math.floor(Math.random() * 10) + 1
        }
    }
}

export {
    actionType
}

export default {
    countUp,
    countDown,
    countReset,
    countRandom
}