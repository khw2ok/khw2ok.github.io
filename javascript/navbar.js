var prevScrollpos = window.pageYOffset;
window.onscroll =headerbarToggle

function headerbarToggle() {
    var headerbar = document.getElementById("navbar");
    
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos < currentScrollPos - 200) {
        headerbar.style.opacity = 0.2;  
    } else {        
        headerbar.style.opacity = 1;   
    }
}