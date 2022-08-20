function validar(){
var email = document.getElementById("mail").value;
var contraseña = document.getElementById("contraseña").value;
if (email === "" || contraseña === ""){
    alert("Complet todos los campos");
   return false;
   }else{
   window.location = "mainPage.html"
   }
} 
