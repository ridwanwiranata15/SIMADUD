document.querySelector('.content-student-body-header-button button').addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector('.modal-create-student').style.display = "block";
    document.querySelector('.modal-create-student-content-header span').addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector('.modal-create-student').style.display = "none";
    });

    document.querySelector('.modal-create-student-footer button').addEventListener("click", function(e){
        e.preventDefault();
        const inputsStudent = document.querySelectorAll('.create-student .form-body input');
        const daysStudent = document.querySelectorAll('.create-student .form-body input[type="date"]');
        const selectStudent = document.querySelector('.create-student .form-body select');
        const messages = document.querySelectorAll('.create-student .form-body p');
        let statusStudent = false;

        function showMessage(input) {
            const message = input.nextElementSibling;
            if (message && message.tagName === "P") {
                message.style.display = "block";
            }
        }

        function hideMessage(input) {
            const message = input.nextElementSibling;
            if (message && message.tagName === "P") {
                message.style.display = "none";
            }
        }

        inputsStudent.forEach(function(input) {
            if (input.value.trim() === "") {
                statusStudent = true;
                showMessage(input);
            }
            input.addEventListener("input", function() {
                if (input.value.trim() !== "") {
                    hideMessage(input);
                }
            });
        });

        daysStudent.forEach(function(day) {
            if (day.value.trim() === "") {
                statusStudent = true;
                showMessage(day);
            }
            day.addEventListener('input', function(e) {
                e.preventDefault();
                if (day.value.trim() !== "") {
                    hideMessage(day);
                }
            });
        });

        if (selectStudent.value === "pilih") {
            statusStudent = true;
            showMessage(selectStudent);
        }
        selectStudent.addEventListener("change", function(e) {
            e.preventDefault();
            if (selectStudent.value !== "pilih") {
                hideMessage(selectStudent);
            }
        });

        if (statusStudent) {
            messages.forEach(function(message) {
                message.style.display = "block";
            });
        } else {
            console.log('Semua input sudah terisi');
            // Tambahkan logika untuk menyimpan data atau tindakan lainnya di sini
        }
    });
});


function UpdateStudent(id){
    document.querySelector(".modal-edit-student").style.display = "block";
    document.querySelector(".modal-edit-student-content-header span").addEventListener("click", function(e){
        e.preventDefault()
        document.querySelector(".modal-edit-student").style.display = "none";
    })
    const ValueForm = document.querySelectorAll('tr[data-id="'+id+'"] td');
    const formInput = document.querySelectorAll('.edit-student input');
    const formDate = document.querySelectorAll('.edit-student date');
    const Select = document.querySelectorAll('.edit-student select');

    formInput[0].value = ValueForm[1].textContent;
    formInput[2].value = ValueForm[4].textContent;
    formInput[3].value = ValueForm[5].textContent;
    formInput[4].value = ValueForm[6].textContent;
    formDate[0].value = ValueForm[2].textContent;
    formDate[1].value = ValueForm[7].textContent;
}
document.querySelector(".hamburger").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".menu-section").classList.toggle("show");
})