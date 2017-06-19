function createCORSRequest(method, url, sync) {
    
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
        // Check if the XMLHttpRequest object has a "withCredentials" property.
        // "withCredentials" only exists on XMLHTTPRequest2 objects.
        xhr.open(method, url, sync);
    } else if (typeof XDomainRequest != "undefined") {
        // Otherwise, check if XDomainRequest.
        // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        // Otherwise, CORS is not supported by the browser.
        xhr = null;
    }
    return xhr;
}

function getPureAddress(text) {

	var matches = text.match(/\<(.*?)\>/);
    var address;

    if (matches) {
        address = matches[1];
    } else {
        address = "";
    }
    return address;
}

function formURL(file){
    return ("http://localhost/DB_WebPage/" + file);
}

function addMail(address) {

    var user = "example@email.com";
    var queryString = "spam=" + address;
    queryString +=  "&user=" + user;
    var url = formURL("insert.php");
    var xhr = createCORSRequest("POST", url, true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhr.setRequestHeader("Content-length", queryString.length);
	xhr.setRequestHeader("Connection", "close");

    if (!xhr) {
            throw new Error('CORS not supported');        
    } else {
            xhr.send(queryString);
    }
}

function removeMail(address) {

    var user = "example@email.com";
    var queryString = "spam=" + address;
    queryString +=  "&user=" + user;
    var url = formURL("remove.php?" + queryString);
    var xhr = createCORSRequest("GET", url, true);

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Content-length", queryString.length);
    xhr.setRequestHeader("Connection", "close");

    if (!xhr) {
            throw new Error('CORS not supported');        
    } else {
            xhr.send(null);
    }
}

function queryMail() {

    var user = "example@email.com";
    var queryString = "user=" + user;
    var url = formURL("getuser.php?" + queryString);
    var xhr = createCORSRequest("GET", url, false);

    if (!xhr) {
            throw new Error('CORS not supported');        
    } else {
    	xhr.send(null);
        if (xhr.status === 200) {
            createTree(xhr.responseText);
        }
    }
}
