function validar(){
    var email = document.getElementById("mail").value;
    var contraseña = document.getElementById("contraseña").value;
    if(email=== "" || contraseña === ""){
        alert("complete todos los campos");
    }else{
        window.location = "mainPage.html"
    }
}
