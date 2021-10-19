import {createAppHeader} from "../page/template-heder";

export function isAuth() {
    document.getElementById(FORM_LOGIN).innerHTML = createAppHeader();
}

export function getAuthorization(){
    return localStorage.getItem('authorization');
}

export function setAuthorization(login, password){
    return localStorage.setItem('authorization', 'Basic ' + btoa(login + ':' + password))
}

export function getRole(){
    return localStorage.getItem('role');
}

export function setRole(authorization){
    return localStorage.setItem('role', authorization)
}

export function getLogin(){
    return localStorage.getItem('login');
}

export function setLogin(authorization){
    return localStorage.setItem('login', authorization)
}


