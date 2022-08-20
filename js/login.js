function validar(){
var email = document.getElementById("mail").value;
var contraseña = document.getElementById("contraseña").value;
if (email === null || contraseña === null){
   alert("Complete todos los campos")
   return false;
    }
} 
