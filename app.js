const nameInput = document.getElementById("name");
const edadInput = document.getElementById("edad");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

function saveData() {
    if (nameInput.value == "" || edadInput.value == ""|| emailInput.value == "" || phoneInput.value == "" || messageInput.value == "") {
        alert("Llena todos los datos, por favor");
    } else if(parseInt(edadInput.value) < 18){
        alert("Solo usuarios mayores de 18 años");
    }else{
        alert(`            Nombre Completo: ${nameInput.value}
            Edad: ${edadInput.value}
            Email: ${emailInput.value}
            Teléfono: ${phoneInput.value}
            Encribe tu consulta : ${messageInput.value}`)
    }
}