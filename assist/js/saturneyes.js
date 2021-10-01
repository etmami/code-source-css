let link = document.getElementsByClassName("link");
let yourDomain;

for ( i = 0; i < link.length; i++){
  link[i].style.cursor = "pointer";
  link[i].onclick = function (){
    window.location.href = yourDomain;
  };
};