function validar() {
    var email = document.getElementById("mail").value;
    var contraseña = document.getElementById("contraseña").value;
    var emailRegExp = /\S+@\S+\.\S+/;
    if (email === "" || contraseña.length < 7 || !emailRegExp.test(email)) {
        alert("Complete todos los campos correctamente");
    } else {
        window.location = "mainPage.html";
    }
}
