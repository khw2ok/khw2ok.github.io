function themesTrigger() {
    if (document.documentElement.getAttribute("themes") == "dark") {
        document.documentElement.setAttribute("themes", "light")
        themeChangeEvent()
    }
    else {
        document.documentElement.setAttribute("themes", "dark")
        themeChangeEvent()
    }
}

function themeChangeEvent() {
    if (document.documentElement.getAttribute("themes") == "light") {
        document.getElementById("comments_light").style.display = "block"
        document.getElementById("comments_dark").style.display = "none"

        document.getElementById("light_mode").style.opacity = "0"
        document.getElementById("dark_mode").style.opacity = "1"
    }
    else {
        document.getElementById("comments_light").style.display = "none"
        document.getElementById("comments_dark").style.display = "block"

        document.getElementById("light_mode").style.opacity = "1"
        document.getElementById("dark_mode").style.opacity = "0"
    }
}