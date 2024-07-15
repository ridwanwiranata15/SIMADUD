document.querySelector('.modal-create-teacher-footer button').addEventListener("click", function(e){
    e.preventDefault();

    const inputs = document.querySelectorAll('.create-teacher input');
    const days = document.querySelectorAll('.create-teacher input[type="date"]');
    const select = document.querySelector('.create-teacher select');
    const messages = document.querySelectorAll('.form-body p');
    let status = false;

    // Fungsi untuk menampilkan pesan kesalahan
    function showMessage(input) {
        const message = input.nextElementSibling;
        if (message && message.tagName === "P") {
            message.style.display = "block";
        }
    }

    // Fungsi untuk menyembunyikan pesan kesalahan
    function hideMessage(input) {
        const message = input.nextElementSibling;
        if (message && message.tagName === "P") {
            message.style.display = "none";
        }
    }

    // Memeriksa input teks
    inputs.forEach(function(input){
        if(input.value.trim() === ""){
            status = true;
            showMessage(input);
        }

        input.addEventListener("input", function(){
            if (input.value.trim() !== "") {
                hideMessage(input);
            }
        });
    });

    // Memeriksa input tanggal
    days.forEach(function(day){
        if(day.value.trim() === ""){
            status = true;
            showMessage(day);
        }

        day.addEventListener("input", function(){
            if (day.value.trim() !== "") {
                hideMessage(day);
            }
        });
    });

    // Memeriksa select
    if(select.value === "pilih"){
        status = true;
        showMessage(select);
    }

    select.addEventListener("change", function(){
        if (select.value !== "pilih") {
            hideMessage(select);
        }
    });

    // Tampilkan pesan kesalahan jika ada input yang belum diisi
    if(status){
        messages.forEach(function(message){
            message.style.display = "block";
        });
    } else {
        console.log('Semua input sudah terisi');
        // Tambahkan logika untuk menyimpan data atau tindakan lainnya di sini
    }
});


document.querySelector('.content-teacher-body-header-button button').addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector('.modal-create-teacher').style.display = "block";
})
document.querySelector('.modal-create-teacher-content-header span').addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector('.modal-create-teacher').style.display = "none";
})


function UpdateTeacher(id){
    document.querySelector('.modal-edit-teacher').style.display = "block";
    document.querySelector('.modal-edit-teacher-content-header span').addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector('.modal-edit-teacher').style.display = "none";
    })

    //ambil form nya

    const inputs = document.querySelectorAll('.edit-teacher input');
    const days = document.querySelectorAll('.edit-teacher input[type="date"]');
    const select = document.querySelector('.edit-teacher select');
    const values = document.querySelectorAll('.teacher tbody tr[data-id="'+id+'"] td');
    inputs[0].value = values[1].textContent;
    inputs[2].value = values[4].textContent;   
    inputs[3].value = values[5].textContent; 
    inputs[4].value = values[6].textContent; 

    document.querySelector('.modal-edit-teacher-footer button').addEventListener("click", function(e){
        e.preventDefault()
        
    })
}
