// Toggle Profile Menu
document.querySelector(".homepage-profile-user-image img").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".homepage-profile-user-list-menu-user").classList.toggle("show-homepage-profile-user-image");
});

// Toggle Content Based on Select
document.querySelector(".content-body-header select").addEventListener("change", function(e){
    if (e.target.value == "tugas") {
        document.querySelector(".content-body-content-tugas").style.display = "block";
        document.querySelector(".content-body-content-materi").style.display = "none";
    } else {
        document.querySelector(".content-body-content-tugas").style.display = "none";
        document.querySelector(".content-body-content-materi").style.display = "block";
    }
});