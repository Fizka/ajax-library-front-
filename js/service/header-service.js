export function setHeader(http_request: XMLHttpRequest, method, url, authorization, content, body) {
    http_request.open(method, url, true);
    http_request.setRequestHeader(AUTH_HEADER, authorization);
    http_request.setRequestHeader(CONTENT_HEADER, content);
    http_request.send(body);
}

export function createRequest(){
    if (!window.XMLHttpRequest) {
        return null;
    }
    return new XMLHttpRequest();
}
