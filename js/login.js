function validar(){
    var email = document.getElementById("mail").value;
    var contraseña = document.getElementById("contraseña").value;
    if(email=== "" || contraseña.length<8){
        alert("complete todos los campos");
        
    }else{
        window.location = "mainPage.html"
    }
}

mail.addEventListener("focusout", function(){
   localStorage.setItem("correo", mail.value);
})
