function validar(){
var email = document.getElementById("mail").value;
var contraseña = document.getElementById("contraseña").value;
if (email === "" || contraseña === ""){
    alert("Complet todos los campos")
   return false;
   }else{
    redirect(email, contraseña)
   }
   
} 
function redirect(email, contraseña){
    if (email && contraseña === true) {
        location.replace = "mainPage.html"
    }   
}
