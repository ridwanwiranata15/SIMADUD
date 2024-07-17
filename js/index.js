document.querySelector(".hamburger").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".menu-section").classList.toggle("show");
})