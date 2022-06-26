function themesToggle() {
    if (document.documentElement.getAttribute("themes") == "dark") {
        document.documentElement.setAttribute("themes", "light")
    } else {
        document.documentElement.setAttribute("themes", "dark")
    }
}