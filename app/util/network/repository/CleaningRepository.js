import { METHOD, makeFetch } from '../NetworkModule';

const FETCH_CLEANINGS_URL: string = 'api/cleanings/';

function fetchCleanings(type: number, subType: number, page: number) {
    let header = {
        type: type,
        sub_type: subType,
        page: page
    }
    return makeFetch(FETCH_CLEANINGS_URL, METHOD.GET, header)
        .then((response) => response.json());
}

export default {
    fetchCleanings: fetchCleanings
}