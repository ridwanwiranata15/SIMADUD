document.querySelector(".content-mapel-body-header-button button").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(".modal-create-mapel").style.display = "block";

    document.querySelector(".modal-create-mapel-content-header span").addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(".modal-create-mapel").style.display = "none";
    })


    document.querySelector(".modal-create-mapel-footer button").addEventListener("click", function(e){
        e.preventDefault();
        const inputs = document.querySelectorAll(".create-mapel input");
        const selects = document.querySelectorAll('.create-mapel select');
        const messages = document.querySelectorAll('.message');
        const status = false;

        function ShowMessage(input){
            message = input.nextElementSibling;
            if(message && message.tagName === "P"){
                message.style.display = "block";
            }
        }
        function hideMessage(input){
            message = input.nextElementSibling;
            if(message && message.tagName === "P"){
                message.style.display = "none";
            }
        }

        inputs.forEach(function(input){
            if(input.value.trim() == ""){
                ShowMessage(input);
            }
            input.addEventListener("input", function(e){
                e.preventDefault();
                if(input.value.trim() !== ""){
                    hideMessage(input)
                }
            })
        })

        selects.forEach(function(select){
            if(select.value === "pilih"){
                ShowMessage(select)
            }
        
            select.addEventListener("change", function(){
                if (select.value !== "pilih") {
                    hideMessage(select);
                }
            });
        })

        if(status){
            messages.forEach(function(message){
                message.style.display = "block";
            });
        } else {
            console.log('Semua input sudah terisi');
            // Tambahkan logika untuk menyimpan data atau tindakan lainnya di sini
        }
    })
})

function UpdateDataMapel(id){
    document.querySelector('.modal-edit-mapel').style.display = "block";
    document.querySelector('.modal-edit-mapel-content-header span').addEventListener("click", function(e){
        e.preventDefault()
        document.querySelector('.modal-edit-mapel').style.display = "none";
    })

    const inputs = document.querySelectorAll(".edit-mapel input");
    const valuesEditClass = document.querySelectorAll("tr[data-id='"+id+"'] td");
    
    inputs[0].value = valuesEditClass[1].textContent;
    inputs[1].value = valuesEditClass[2].textContent;
    inputs[2].value = valuesEditClass[3].textContent;   
}