import {createRequest} from "./header-service";
import {clearErrorMessage, setErrorMessage} from "./error-handling";
import {getAuthorization, getRole, setRole} from "./user-auth";
import {addNewBook, getBooks, getBooksFromSession} from "./book-service";
import {changeMainPanel} from "../page/panel-integration";
const {setHeader} = require("./header-service");


export function cleanUserData() {
    localStorage.clear();
    document.getElementById(FORM_NEW_USER).innerHTML = '';
    document.getElementById(FORM_REMOVE_USER).innerHTML = '';
    document.getElementById(FORM_USER_LIST).innerHTML = '';
    document.getElementById(FORM_CHOICE).innerHTML = '';
    document.getElementById(FORM_LOGIN).innerHTML = '';
    createLoginPanel();
}

export function getRoleByLogin(login) {
    let http_request = createRequest();

    http_request.onload = function (xhr) {
        if (xhr.target.status === 200) {
            setRole(JSON.parse(xhr.target.response))
            if (!!getRole()) {
                if (getRole() === adminRole) {
                    changeMainPanel(getBooksFromSession())
                }
            }
            clearErrorMessage();
        } else {
            setErrorMessage(MESSAGE_LOGIN_FAILED);
        }
    };
    setHeader(http_request, 'GET', PATH_ROLE + login, getAuthorization(), CONTENT_TYPE, null);
}

export function LoginUserPost() {
    let http_request = createRequest();

    http_request.onload = function (xhr) {
        if (xhr.target.status === 201) {
            getBooks();
            clearErrorMessage();
        } else {
            setErrorMessage(MESSAGE_BOOK_NOT_CREATED);
        }
    };

    setHeader(http_request, 'POST', URL  , getAuthorization(), CONTENT_TYPE, addNewBook());
}

