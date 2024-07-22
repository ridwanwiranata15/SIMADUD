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

document.querySelector(".modal-create-tugas-content-footer button").addEventListener("click", function(e){
    e.preventDefault();
    const input  = document.querySelector(".create-tugas input");
    const select = document.querySelector(".create-tugas select");
    const date = document.querySelector(".create-tugas input[type='date']");
    
    let statusInput = false;


    if(input.value.trim() == ""){
        alert("form judul kosong")
        statusInput = true;
    }

    if(date.value.trim() == ""){
        alert("form tenggat waktu kosong")
        statusInput = true;
    }


    if(statusInput){
        alert("mohon isi terlebih dahulu");
    }else{
        alert("for sudah terisi");
    }
})

document.querySelector(".modal-create-tugas-content-header span").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".modal-create-tugas").style.display = "none";
})