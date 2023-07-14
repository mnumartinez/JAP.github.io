function validar(){
    var email = document.getElementById("mail").value;
    var contraseña = document.getElementById("contraseña").value;

    if (!email || !contraseña) {
        alert("complete ambos campos");
        return false;
    }   
    if(email.length < 6 || email.length > 20 ){
        alert("Ingrese un mail válido");
        return false;
    }
    if (contraseña.length < 6 || contraseña.length > 20 ) {
        alert("Ingrese una contraseña válida");
        return false;
    }
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        alert("El mail debe contener '@' y un '.'");    
        return false;
    }else{
        window.location = "mainPage.html"
    }
}
mail.addEventListener("focusout", function(){
   localStorage.setItem("correo", mail.value);
})
