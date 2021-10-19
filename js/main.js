import {createRequest, setHeader} from "./service/header-service";
import {setBookFromSession} from "./service/book-service";
import {createBookForm} from "./page/template-user-list";
import {getAuthorization, getRole, isAuth, setAuthorization, setLogin} from "./service/user-auth";
import {clearErrorMessage, setErrorMessage} from "./service/error-handling";
import {getRoleByLogin} from "./service/user-service";

export function getUserByLogin() {
    let http_request = createRequest();
    let login = document.getElementById(USER_LOGIN).value;
    let haslo = document.getElementById(USER_PASSWORD).value;

    http_request.onload = function (xhr) {
        if (xhr.target.status === 200) {
            setBookFromSession(JSON.parse(xhr.target.response))
            document.getElementById(FORM_USER_CREDENTIALS).innerHTML = '';
            document.getElementById(FORM_USER_LIST).innerHTML = data.map(array => array.map(users => createBookForm(users)).join(''))
            isAuth();
            getRoleByLogin(getRole());
            clearErrorMessage();
        } else {
            setErrorMessage(MESSAGE_LOGIN_FALLOUT)
        }
    };

    setLogin(login)
    setAuthorization(login,haslo)
    setHeader(http_request, 'GET', URL  , getAuthorization(), CONTENT_TYPE, null);
}











