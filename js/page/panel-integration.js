import {createDeletePanel} from "./template-user-remover";
import {creatInputPanel} from "./form-user-add";
import {getSearch} from "./form-search";

export function changeMainPanel(books) {
    creatInputPanel();
    createDeletePanel(books);
    getSearch();
}

