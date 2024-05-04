// Toggle class active
const navbarNav = document.querySelector ('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//tombol

const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#seacrh-box");

document.querySelector("#search-bu").onclick = (e) => {
    searchForm.classList.toggle("active");
    e.preventDeFault();
};


//klik id luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector ('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

