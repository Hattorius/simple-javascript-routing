
var pages = ['home', 'more-info', '404'];
var pagesContent = {};

function preLoadPages() {
    console.log("Preloading pages");
    pages.forEach(page => {
        console.log("Preloading "+page);
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET","pages/"+page+".html",false);
        xmlHttp.send(null);
        pagesContent[page] = xmlHttp.responseText;
    });
    console.log("Preloading pages => success");
}

function loadPage(page) {
    var pageHolder = document.querySelector("body div#content");
    document.querySelector("body").id = page;
    pageHolder.innerHTML = pagesContent[page];
}

function pageLoaded(page) {
    // Do additional stuff for each page to make buttons work etc.
}

function goTo(page) {
    window.history.pushState({}, '', page);
    if (pages.includes(page)) {
        loadPage(page);
        pageLoaded(page);
    } else {
        loadPage('404');
        pageLoaded('404');
    }
}

document.body.onload = function() {
    preLoadPages()
    var sPath = window.location.pathname;
    console.log("page => "+sPath)
    if (typeof sPath !== "undefined" && sPath != "/") {
        var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
        goTo(sPage)
    } else {
        goTo('home')
    }
}
