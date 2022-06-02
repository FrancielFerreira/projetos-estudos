//search js
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .fa-search");

searchBox.addEventListener("click", ()=> {
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("fa-search","fa-close");
        navLinks.style.left="-100%";
    }else {
        searchBox.classList.replace("fa-close","fa-search");
    }

});

// sidebar mobile js
let menuOpenBtn = document.querySelector(".navbar .fa-bars");
let menuCloseBtn = document.querySelector(".nav-links .fa-close");
let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click", ()=> {
    navLinks.style.left="0";
    if(navLinks.style.left="0"){
        navbar.classList.remove("showInput");
    };
});
menuCloseBtn.addEventListener("click", ()=> {
    navLinks.style.left="-100%";
});

// sidebar sub menu mobile js
let htmlCssDrop = document.querySelector(".html-css-link");
htmlCssDrop.addEventListener("click", ()=>{
    navLinks.classList.toggle("html-css-sub-menu");
});
let htmlCssSubDrop = document.querySelector(".html-css-sub-sub-menu");
htmlCssSubDrop.addEventListener("click", ()=>{
    navLinks.classList.toggle("html-css-sub-sub-menu");
});
let jsDrop = document.querySelector(".js-link");
jsDrop.addEventListener("click", ()=>{
    navLinks.classList.toggle("js-sub-menu");
});
