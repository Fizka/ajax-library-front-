import {createRequest, setHeader} from "./header-service";
import {clearErrorMessage, setErrorMessage} from "./error-handling";
import {Book} from "../model/book";
import {createPanelForBook} from "../page/form-search";
import {getAuthorization} from "./user-auth";
import {createBookForm} from "../page/template-user-list";

let books = [];

export function addNewBook() {
    let author = document.getElementById(AUTHOR_INPUT).value;
    let title = document.getElementById(TITLE_INPUT).value;
    let year = document.getElementById(YEAR_INPUT).value;
    let result = ''
    if (author != null && title != null && year !== 0) {
        result = JSON.stringify(new Book(title, author, year))
    }
    return result
}

export function getBookById() {
    let http_request = createRequest();

    http_request.onload = function (xhr) {
        if (xhr.target.status === 200) {
            document.getElementById(FORM_CHOICE).innerHTML = createPanelForBook();
            clearErrorMessage();
        } else {
            setErrorMessage(MESSAGE_BOOK_NOT_FOUND);
        }
    };

    const id = document.getElementById(USER_ID).value;
    setHeader(http_request, 'GET', URL + '/' + id, getAuthorization(), CONTENT_TYPE, null);
}

export function createBook() {
    let http_request = createRequest();

    http_request.onload = function (xhr) {
        (xhr.target.status === 200) ? clearErrorMessage() : setErrorMessage(MESSAGE_BOOK_NOT_CREATED);
    };

    setHeader(http_request, 'POST', URL, getAuthorization(), CONTENT_TYPE, addNewBook());
}

export function deleteBook(id) {
    let http_request = createRequest();

    http_request.onload = function (xhr) {
        (xhr.target.status === 200) ? clearErrorMessage() : setErrorMessage(MESSAGE_BOOK_NOT_REMOVED)
    };

    setHeader(http_request, 'DELETE', URL + "/" + id, getAuthorization(), CONTENT_TYPE, null);
}


export function getBooks() {
    let http_request = createRequest();
    http_request.onload = function (xhr) {
        if (xhr.target.status === 200) {
            localStorage.setItem('books', JSON.parse(xhr.target.response));
            document.getElementById(FORM_USER_CREDENTIALS).innerHTML = '';
            document.getElementById(FORM_USER_LIST).innerHTML = data.map(array => array.map(val => createBookForm(val)).join(''))
            clearErrorMessage();
        } else {
            setErrorMessage(MESSAGE_LOGIN_FAILED);
        }
    };

    setHeader(http_request, 'DELETE', URL, getAuthorization(), CONTENT_TYPE, null);
}

export function getBooksFromSession() {
    return localStorage.getItem('books');
}

export function setBookFromSession(books) {
    return localStorage.setItem('books', books);
}
