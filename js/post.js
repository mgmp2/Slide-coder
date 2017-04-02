// document.getElementsByClassName('post-content).classList.remove("active");
// document.getElementsByClassName('post-content).classList.toggle("active");

var share = document.getElementById("post-content");
document.getElementById("publicar").addEventListener("click", function(e)
{
  e.preventDefault();
  var area = document.getElementById("area").value;
  var user = document.getElementById("user").value;
  if(user && area){
    share.classList.add('active');
    createPanel(document.createTextNode(user), document.createTextNode(area));
  } else{
   alert("Don't exist content");
}
});

function createPanel(user, area){
  var cdf = document.createDocumentFragment();
  var firstChild = share.firstElementChild;
  var shareContent = document.createElement("div");
  var boxArea = document.createElement("span");
  var boxUser = document.createElement("p");
  shareContent.classList.add("div-share");

  boxArea.appendChild(area);
  boxUser.appendChild(user);
  cdf.appendChild(boxArea);
  cdf.appendChild(boxUser);
  shareContent.appendChild(cdf);
  share.appendChild(shareContent);
   share.insertBefore(shareContent, firstChild);

}
