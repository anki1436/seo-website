let menu = document.getElementById("menu");
let y = document.getElementById("line");
let searchModal = document.getElementById("search-modal");
let searchIcon = document.getElementById("search-icon");
let body = document.getElementById("body")


let aboutModal = document.getElementById("about-video");


function myFunction() {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        y.classList.remove("close");x
    } else {
        menu.style.display = "flex";
        y.classList.add("close");
    }
    console.log(y);
}


var navHeight = document.getElementById("navbar").clientHeight;
menu.style.top = navHeight + "px";
searchModal.style.top = navHeight +10+ "px";
console.log(navHeight);



var navlink = document.getElementsByClassName('link');
for (var i = 0; i < navlink.length; i++) {
    console.log(navlink[i].classList);
}

function fontIncreement() {
    for (var i = 0; i < navlink.length; i++) {
        navlink[i].classList.add("big-font");
        navlink[i].classList.remove("small-font");
    }


}
function fontDefault() {

    for (var i = 0; i < navlink.length; i++) {
        navlink[i].classList.remove("big-font");
        navlink[i].classList.remove("small-font");
    }


}

function fontDecreement() {
    var navlink = document.getElementsByClassName('link');

    for (var i = 0; i < navlink.length; i++) {

        navlink[i].classList.add("small-font");
        navlink[i].classList.remove("big-font");
        console.log(navlink[i].classList);
    }
}


function searchBarOpen() {
    searchModal.style.display = "flex"
}

function searchBarClose() {
    searchModal.style.display = "none"

}

function aboutVideoOpen() {
    aboutModal.style.display = "flex"
    body.style.overflow = "hidden"
    console.log("body");
}
function aboutModalClose() {
    aboutModal.style.display = "none"
    body.style.overflow = "scroll"

}



