// @flow
import { METHOD, makeFetch } from '../NetworkModule';

const FETCH_KAKAO_CHANNEL_URL: string = 'api/kakao/channels/';

function fetchChannels() {
    return makeFetch(FETCH_KAKAO_CHANNEL_URL, METHOD.GET, {
        "test": "test!!!"
    })
        .then((response) => response.json());
}

export default {
    fetchChannels: fetchChannels,
}