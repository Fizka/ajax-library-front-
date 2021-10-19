const {Book} = require("../model/book");

export function createBookForm(val : Book){
    return "<li>" + val.author + " " + val.title + " " + val.year + " " + "</li>";
}
