// @flow
const type: Object = {
    COUNT_UP: 'COUNT_UP',
    COUNT_DOWN: 'COUNT_DOWN'
};

function countUp(num: number) {
    return {
        type: type.COUNT_UP,
        payload: num
    }
}

function countDown(num: number) {
    return {
        type: type.COUNT_DOWN,
        payload: num
    }
}

export default {
    type,
    countUp,
    countDown
}