const navbar_button = document.getElementById("navbar_button");
const sideBarMenu = document.getElementById("navbar_sidePanel_container");
const close_navbar_button = document.getElementById("close_navbar_button");

navbar_button.addEventListener("click", function(){
    console.log("show sidebar menu");
    sideBarMenu.style = "transform: translateZ(0);";
});

close_navbar_button.addEventListener("click", function(){
    console.log("hide sidebar menu");
    sideBarMenu.style = "transform: translate3d(-100%, 0, 0);";
});


