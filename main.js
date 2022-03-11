const navbar_button = document.getElementById("navbar_button");
const sideBarMenu = document.getElementById("navbar_sidePanel_container");
const close_navbar_button = document.getElementById("close_navbar_button");
const navbar_category_container = document.getElementById("navbar_category_container");
const navbar_subMenu = document.querySelectorAll('.navbar-subMenu');
const navbar_categoryOverlayConatainer = document.getElementById("navbar_categoryOverlayConatainer");
const navbar_subMenuImage = document.getElementById("navbar_subMenuImage");

navbar_button.addEventListener("click", function(){
    console.log("show sidebar menu");
    sideBarMenu.style = "transform: translateZ(0);";
});

close_navbar_button.addEventListener("click", function(){
    console.log("hide sidebar menu");
    sideBarMenu.style = "transform: translate3d(-100%, 0, 0);";
});

navbar_category_container.addEventListener("mouseleave", function(){
    console.log("hide submenu");
    navbar_categoryOverlayConatainer.classList.remove("navbar_categoryOverlayConatainer-open");
});


function showSubmenu(category) {
    navbar_categoryOverlayConatainer.classList.add("navbar_categoryOverlayConatainer-open");
    for(const element of navbar_subMenu){
        if (element.attributes.reference.value == category){
            element.style = "display: grid;"
            navbar_subMenuImage.style=`background-image: url(./src/images/categories/${category}.jpeg);`
        }
        else element.style = "display: none";
    }
}