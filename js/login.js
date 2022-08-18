function validar(){
var email = document.getElementById("mail").value;
var contraseña = document.getElementById("contraseña").value;
if (email === "" || contraseña === ""){
   alert("Complete todos los campos")
   return false;
    }
} 
