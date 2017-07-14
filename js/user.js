window.addEventListener('load', function (){
  document.getElementById("sig-in").addEventListener('click', function (){
    var email= document.getElementById("input-email");
    var pass = document.getElementById("input-pass");
    findUser(email.value, pass.value);

});

});

var usuario_LS;
user= [{nombre: "miriam", apellido: "mendoza", correo: "admin", password: "123456"}]
if(!localStorage.getItem('usuario')){
  localStorage.setItem('usuario',JSON.stringify(user));
  usuario_LS = JSON.parse(localStorage.getItem('usuario'));
}
else{
  usuario_LS = JSON.parse(localStorage.getItem('usuario'));
}
