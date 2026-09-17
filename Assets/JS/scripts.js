// Dark mode
const btn = document.getElementById("themeBtn");

if (btn) {
    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}

// HAMBURGER 
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

// TOP BUTTON 
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});