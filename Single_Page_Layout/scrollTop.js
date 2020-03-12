//Get the button
var topButton = document.getElementById("scrollTop");

// When the page loads, hide the back to top button.
window.onload = function () {
    this.topButton.opacity = 0;
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.opacity = 100;
        topButton.style.transition = ".2s";
    } else {
        topButton.style.opacity = 0;
        topButton.style.transition = ".2s";
    }
}