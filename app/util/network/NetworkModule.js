// @flow
const SERVER_TYPE: Object = {
    REAL: 'http://www.naver.com/',
    TEST: 'http://www.daum.com/',
    LOCAL: 'http://10.0.2.2:8000/'
};

const METHOD: Object = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};

const HEADER: Object = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'ver': '2',
    'revision': '4',
    'device': '1',
    'service_type': '4',
    'token': 'b01672c37b296eaf3f1854d10e9c2b8a6c96f77c739f9982d03e59f3e9696521'
};

const SERVER_URL: string = SERVER_TYPE.LOCAL;

function makeFetch(url: string, method: string, header: ?Object, body: ?Object) {
    if (!url.includes('http://') && !url.includes('https://')) {
        url = SERVER_URL + url;
    }

    if (header) {
        header = Object.assign({}, HEADER, header);
    } else {
        header = Object.assign({}, HEADER);
    }

    let request = {
        method: method,
        headers: header,
        body: body ? JSON.stringify(body) : undefined
    };

    console.log('url: -> ' + url);
    console.log('method: -> ' + method)

    for (let key in header) {
        let value = header[key];
        console.log('header: -> ' + key + ':' + value);
    }

    if (method !== METHOD.GET) {
        for (let key in body) {
            let value = body[key];
            console.log('body: -> ' + key + ':' + value);
        }
    }

    return fetch(url, request);
}

export {
    SERVER_URL,
    SERVER_TYPE,
    METHOD,
    HEADER,
    makeFetch
}

