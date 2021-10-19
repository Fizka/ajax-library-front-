import {deleteBook} from "../service/book-service";
import {createBookRemovalTemplate} from "./temapte-book";

export function createDeletePanel(books) {
    let htmlTemp = "Remove users board: " + "<br>" + "<form id=\"myForm\">"
    htmlTemp += books.map(o => o.map(val => createBookRemovalTemplate(val)).join(''))
    htmlTemp += "</form>" + "<button onclick=\'remove()\'>" + " Delete " + "</button>"
    document.getElementById(FORM_REMOVE_USER).innerHTML = htmlTemp;
}

export function remove() {
    let checkers_value = [];
    document.querySelectorAll('input[name="id"]:checked')
        .forEach((check) => checkers_value.push(check.value));
    checkers_value.forEach((checker_id) => deleteBook(checker_id));
}

