
//FOR ADD LINK TO HOME 

let link = document.getElementsByClassName("link");
let yourDomain;

for ( i = 0; i < link.length; i++){
  link[i].style.cursor = "pointer";
  link[i].onclick = function (){
    window.location.href = yourDomain;
  };
};


//FOR NAVBAR WITH RESPONSIVE
let navbar = document.querySelector(".navbar");

//nav list
let listNav = document.querySelector(".nav-navbar");

//icons
let respNav = document.querySelector(".resp-nav");

respNav.onclick = () => {
  listNav.classList.toggle("nav-open");
  respNav.children[0].classList.toggle("d-n");
  respNav.children[1].classList.toggle("d-n");
};