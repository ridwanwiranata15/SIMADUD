document.querySelector(".content-class-body-header-button button").addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector('.modal-create-class').style.display = "block";
    document.querySelector('.modal-create-class-content-header span').addEventListener("click", function(e){
        e.preventDefault()
        document.querySelector('.modal-create-class').style.display = "none";
    })
    document.querySelector(".modal-create-class-footer button").addEventListener("click", function(e){
        e.preventDefault()
        const inputs = document.querySelectorAll(".create-class input");
        const messages = document.querySelectorAll(".message");
        let status = false;

        function showMessage(input){
            const message = input.nextElementSibling;
            if(message && message.tagName === "P"){
                message.style.display = "block";
            }
        }

        function hideMessage(input){
            const message = input.nextElementSibling;
            if(message && message.tagName === "P"){
                message.style.display = "none";
            }
        }

        inputs.forEach(function(input){
            if(input.value.trim() == ""){
                status = true;
                showMessage(input)
            }
            input.addEventListener("input", function(e){
                e.preventDefault()
                if(input.value.trim() !== ""){
                    hideMessage(input)
                }
            })
        })

        status ? messages.forEach(function(message){
            message.style.display = "block"
        }) : alert("semuanya sudah terisi");
    })
})

function UpdateDataClass(id){
    document.querySelector('.modal-edit-class').style.display = "block";
    document.querySelector('.modal-edit-class-content-header span').addEventListener("click", function(e){
        e.preventDefault()
        document.querySelector('.modal-edit-class').style.display = "none";
    })

    const inputs = document.querySelectorAll(".edit-class input");
    const valuesEditClass = document.querySelectorAll("tr[data-id='"+id+"'] td");
    
    inputs[0].value = valuesEditClass[1].textContent;
    inputs[1].value = valuesEditClass[2].textContent;
    inputs[2].value = valuesEditClass[3].textContent;   
}