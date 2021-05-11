window.addEventListener("scroll", function(){
    var menubar = document.querySelector(".mainmenu-area");
    menubar.classList.toggle("sticky", window.scrollY > 0);
})


