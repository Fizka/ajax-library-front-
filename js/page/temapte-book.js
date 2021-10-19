export function createBookRemovalTemplate(val){
    return val.author + " " + val.title + " " + val.year + " " +
        "<input type=\"checkbox\" name=\"" + "id" + "\" value=\"" + val.idBook + "\" >" + "<br>";
}
