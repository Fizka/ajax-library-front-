function createLoginPanel() {
    document.getElementById(FORM_USER_CREDENTIALS).innerHTML =
        "<input name=\"login\" id=\"login\"> " +
        " <input name=\"password\" id=\"password\"> " +
        "  <button type=\"button\" className=\"btn btn-primary\" onClick=\"getUserByLogin()\"> Confirm </button>"
}
