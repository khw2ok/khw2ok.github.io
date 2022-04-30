var prevScrollpos = window.pageYOffset;
window.onscroll = headerbarToggle

function headerbarToggle() {
    var btnbar = document.getElementById("btnbar")
    var ftrbar = document.getElementById("ftrbar")

    var currentScrollPos = window.pageYOffset
    if (prevScrollpos < currentScrollPos - 400) {
        btnbar.style.opacity = 0.1
    }
    else if (prevScrollpos < currentScrollPos - 375) {
        btnbar.style.opacity = 0.2
    }
    else if (prevScrollpos < currentScrollPos - 350) {
        btnbar.style.opacity = 0.3
    }
    else if (prevScrollpos < currentScrollPos - 325) {
        btnbar.style.opacity = 0.4
    }
    else if (prevScrollpos < currentScrollPos - 300) {
        btnbar.style.opacity = 0.5
    }
    else if (prevScrollpos < currentScrollPos - 275) {
        btnbar.style.opacity = 0.6
    }
    else if (prevScrollpos < currentScrollPos - 250) {
        btnbar.style.opacity = 0.7
    }
    else if (prevScrollpos < currentScrollPos - 225) {
        btnbar.style.opacity = 0.8
    }
    else if (prevScrollpos < currentScrollPos - 200) {
        btnbar.style.opacity = 0.9
    }
    else {
        btnbar.style.opacity = 1
    }

    if (prevScrollpos < currentScrollPos - 225) {
        ftrbar.style.opacity = 0.1
    }
    else if (prevScrollpos < currentScrollPos - 200) {
        ftrbar.style.opacity = 0.2
    }
    else if (prevScrollpos < currentScrollPos - 175) {
        ftrbar.style.opacity = 0.3
    }
    else if (prevScrollpos < currentScrollPos - 150) {
        ftrbar.style.opacity = 0.4
    }
    else if (prevScrollpos < currentScrollPos - 125) {
        ftrbar.style.opacity = 0.5
    }
    else if (prevScrollpos < currentScrollPos - 100) {
        ftrbar.style.opacity = 0.6
    }
    else if (prevScrollpos < currentScrollPos - 75) {
        ftrbar.style.opacity = 0.7
    }
    else if (prevScrollpos < currentScrollPos - 50) {
        ftrbar.style.opacity = 0.8
    }
    else if (prevScrollpos < currentScrollPos - 25) {
        ftrbar.style.opacity = 0.9
    }
    else {
        ftrbar.style.opacity = 1
    }
}