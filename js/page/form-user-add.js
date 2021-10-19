import {LoginUserPost} from "../service/user-service";

export function creatInputPanel() {
    document.getElementById(FORM_NEW_USER).innerHTML =
        "<br/>" +
        "Add new User: " + "<br>" +
        "<input name=\"author\" id=\"author\"/>" +
        "<br/><br/>" +
        "<input name=\"title\" id=\"title\"/>" +
        "<br/><br/>" +
        "<input name=\"year\" id=\"year\"/>" +
        "<br/><br/>" +
        "<button onclick=\'LoginUserPost()\'>" + "Create" + "</button>";
}
