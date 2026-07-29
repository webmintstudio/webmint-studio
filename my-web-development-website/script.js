// Dark Mode
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){
        themeBtn.innerHTML = "☀️";
    }else{
        themeBtn.innerHTML = "🌙";
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});

});

// Navbar Shadow
window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>40){

nav.style.boxShadow="0 5px 20px rgba(0,0,0,.2)";

}else{

nav.style.boxShadow="none";

}

});

console.log("Prahima Web Studio Loaded");