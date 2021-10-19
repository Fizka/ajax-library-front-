import {getBookById} from "/js/service/book-service";

export function getSearch() {
    document.getElementById(FORM_CHOICE).innerHTML =
        "<input name=\"user-id\" id=\"user-id\"> <br> <br>" +
        "Find user by Id: " + "<br>" +
        "<button onclick=\"getBookById()\"> Find </button>";
}

export function createPanelForBook(){
    return "<input name=\"user-id\" id=\"user-id\"> <br> <br>" +
        "Find by User id: " + "<br>" +
        "<li>" + data.author + " " + data.title + " " + data.year + " " + "</li>" +
        "<button onclick=\"getBookById()\"> Find </button>";
}
