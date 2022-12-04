//Permite entrar o no a "my-profile.html" dependiendo de si estas logueado o no.
function profileValidity(){
    if(!localStorage.getItem("correo")){
     window.location = "index.html"
    }else{
        window.location = "my-profile.html"
    }
} 
        //Valida que los campos estén completos y los establece en el localStorage en el caso de que lo estén.
function submitBtn(){
    var nombre = document.getElementById("firstName").value
    var apellido = document.getElementById("lastName1").value  
    var correoE = document.getElementById("contactEmail").value

    if(nombre !== "" && apellido !== "" & correoE !== ""){
        localStorage.setItem("profileName", nombre)
        localStorage.setItem("ProfileLastName", apellido)  
    }else{
        alert("completa Todos los campos")
    }
};
