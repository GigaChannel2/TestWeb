const debug = true;

let header = document.getElementById("main-header");
let header_logo = document.getElementById("logo");
let ayam = document.getElementById("ayam")
let sidebar = document.getElementById("sidebar");
let sidebar_btn = sidebar.querySelectorAll("a");
let page = document.getElementById("page");
let page_txt = page.querySelector("h1");
let isMenu = false;

const routes = {
    "/": "NULL",
    "/bio": "This is a bio<br> yes, its a bio<br> yes, it is a bio."
}

ayam.addEventListener("click", (e)=>{
    e.preventDefault();
    new Audio("sfx/ayam.mp3").play();
});

sidebar_btn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();

        // history.pushState({}, "", "/profile");

    });
});

// Handle browser navigation (back/forward buttons)
window.onpopstate = updateContent;

// Load the correct content when the page loads
window.onload = updateContent;

function loadPage(url) {
    // fetch konten atau ganti isi halaman
    console.log("Loading", url);
}

if (debug) {
    setInterval(()=>{
        console.log(isMenu);
        
    }, 600)
}

function menu() {
    if (isMenu) {
        isMenu = false;
    } else {
        isMenu = true;
    }
}

function pagech(path) {
    // history.pushState(
    //     {},
    //     "",
    //     "/page" + sect
    // );
    // loadPage("/profile");
    
    window.history.pushState({}, path, window.location.origin + "/TestWeb" + path);
    updateContent();
}

function updateContent() {
    const path = window.location.pathname;
    // const appDiv = document.getElementById("app");
    page_txt.innerHTML = routes[path] || "<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>";
}

function href(param) {
    window.location.href = param;
}