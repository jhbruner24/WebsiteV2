const navBarItems = ['nav-profile', 'nav-experiences', 'nav-projects', 'nav-contact'];

function showScroll() {
    var elmnt = document.getElementById("html");
    var y = elmnt.scrollTop;
    var navSelection = getCurrentNavSelection()
    for (const element of navBarItems) {
        if (element == navSelection) {
            document.getElementById(element).style.backgroundColor = "rgb(0, 110, 102)";
        } else {
            document.getElementById(element).style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
    }
}

window.addEventListener("scroll", function () {
    showScroll();
}, false);

function colorBackground(element) {
    document.getElementById(element).style.backgroundColor = "rgb(0, 110, 102)";
}

function resetBackground(element) {
    if (getCurrentNavSelection() != element) {
        document.getElementById(element).style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}

function getCurrentNavSelection() {
    var elmnt = document.getElementById("html");
    var y = elmnt.scrollTop;
    if (y < 120) {
        return ''
    }
    if (y > 120 && y < 1050) {
        return 'nav-profile';
    }
    if (y > 1050 && y < 2300) {
        return 'nav-experiences';
    }
    if (y > 2300 && y < 3740) {
        return 'nav-projects';
    }
    if (y > 3740) {
        return 'nav-contact';
    }
}