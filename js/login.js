function validar(){
var email = document.getElementById("mail").value;
var contraseña = document.getElementById("contraseña").value;
if (email === "" || contraseña === ""){
   alert("Complete todos los campos")
   return false;
    }
} 
function redirect(){
   if (email && contraseña === true) {
        window.location = "mainPage.html"
    }   
}
