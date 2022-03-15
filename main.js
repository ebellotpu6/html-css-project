const navbar_button = document.getElementById("navbar_button");
const sideBarMenu = document.getElementById("navbar_sidePanel_container");
const close_navbar_button = document.getElementById("close_navbar_button");
const navbar_category_container = document.getElementById("navbar_category_container");
const navbar_subMenu = document.querySelectorAll('.navbar-subMenu');
const navbar_categoryOverlayConatainer = document.getElementById("navbar_categoryOverlayConatainer");
const navbar_subMenuImage = document.getElementById("navbar_subMenuImage");

const product_carousels = document.querySelectorAll('.product-list');

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

for (let i = 0; i < product_carousels.length; i++){
    let itemWidth = product_carousels[i].querySelector('.product-listItem').clientWidth;
    product_carousels[i].nextElementSibling.querySelector("button.product-carousel-buttonLeft").addEventListener('click', function(){
        product_carousels[i].scrollBy({left: -itemWidth, top: 0, behavior: 'smooth'});
    });
    product_carousels[i].nextElementSibling.querySelector("button.product-carousel-buttonRight").addEventListener('click', function(){
        product_carousels[i].scrollBy({left: itemWidth, top: 0, behavior: 'smooth'});
    });
    product_carousels[i].onscroll = function () {
        let prevProductCarousel = product_carousels[i].nextElementSibling.querySelector("button.product-carousel-buttonLeft");
        let nextProductCarousel = product_carousels[i].nextElementSibling.querySelector("button.product-carousel-buttonRight");
        if(product_carousels[i].scrollLeft == 0) prevProductCarousel.classList.add('hide-content');
        else if(prevProductCarousel.classList.contains('hide-content')) prevProductCarousel.classList.remove('hide-content');
        if(product_carousels[i].scrollLeft == (product_carousels[i].scrollWidth - product_carousels[i].offsetWidth)) nextProductCarousel.classList.add('hide-content');
        else if(nextProductCarousel.classList.contains('hide-content')) nextProductCarousel.classList.remove('hide-content');
    }
}


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