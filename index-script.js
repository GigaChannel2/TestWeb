const debug = true;

let header = document.getElementById("main-header");
let header_logo = document.getElementById("logo");
let ayam = document.getElementById("ayam");
let ayam2 = document.getElementById("ayam2");
let sidebar = document.getElementById("sidebar");
let sidebar_btn = sidebar.querySelectorAll("a");
let page = document.getElementById("page");
let page_txt = page.querySelector("h1");
let sidemenu = document.getElementById("sidemenu");
let sidemenu_btn = sidemenu.querySelectorAll("a");
let backmenu = document.getElementById("backmenu");
let backshadow = document.getElementById("backshadow");
let isMenu = false;
let isNotFound = Boolean;

if (isNotFound) {
    try {
        const path = window.location.pathname;
        if (path === routes[path]) {
            window.location.path = "/TestWeb";
        }
    } catch (error) {
        console.error();
        
    }
}

const routes = {
    "/TestWeb": "NULL",
    "/TestWeb/bio": "This is a bio<br> yes, its a bio<br> yes, it is a bio."
}

ayam.addEventListener("click", (e)=>{
    e.preventDefault();
    new Audio("sfx/ayam.mp3").play();
});

ayam2.addEventListener("click", (e)=>{
    e.preventDefault();
    new Audio("sfx/ayam.mp3").play();
});

sidemenu_btn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
    })
    // btn.addEventListener("mouseenter", (e) => {

    // })
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

function open_menu() {
    if (!isMenu) {
        isMenu = true;
        backshadow.style.visibility = "visible";
        sidemenu.style.left = 0;
        backshadow.style.opacity = 0.4;
    }
}

function close_menu() {
    if (isMenu) {
        isMenu = false;
        sidemenu.style.left = "-400px";
        backshadow.style.opacity = 0;
        setTimeout(()=>{
            backshadow.style.visibility = "hidden";
        }, 500)
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
    console.log(path);
    
    // const appDiv = document.getElementById("app");
    page_txt.innerHTML = routes[path] || "<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>";
}

function href(param) {
    window.location.href = param;
}