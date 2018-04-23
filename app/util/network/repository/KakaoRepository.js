// @flow
import { METHOD, makeFetch } from '../NetworkModule';

const FETCH_KAKAO_CHANNEL_URL: string = 'api/kakao/channels/';

function fetchChannels() {
    return makeFetch(FETCH_KAKAO_CHANNEL_URL, METHOD.GET)
        .then((response) => response.json());
}

function createChannel() {
    return makeFetch(FETCH_KAKAO_CHANNEL_URL, METHOD.POST, null, {
        test1: "test11",
        test2: "test22",
        test3: "test33",
    }).then((response) => response.json());
}

export default {
    fetchChannels: fetchChannels,
    createChannel: createChannel
}