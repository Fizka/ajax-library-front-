export function setErrorMessage(message) {
    document.getElementById(ERROR_MESSAGE).innerHTML = "<div style=\"font-size:23px; color: red; \">" + message + " </div>";
}

export function clearErrorMessage() {
    document.getElementById(ERROR_MESSAGE).innerHTML = '';
}
