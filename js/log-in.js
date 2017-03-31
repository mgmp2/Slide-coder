
function findUser(a,b){

  usuario_LS.filter(function (e){
    if(a ==e.correo && b== e.password){
      window.location = "post.html";
    } else {
      alert("No se encuentra registrado");
      console.log(a+"   "+b);
    }
  });
}
