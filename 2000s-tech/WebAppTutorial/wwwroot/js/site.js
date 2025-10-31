 // Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

//Adds hover effect to heading that makes it expand when you hover

//finds magenta-heading and put it in variable "heading"

var heading = document.querySelector(".magenta-heading");

//on hover
heading.onmouseover = function () {
    //styling as such (expands)
    heading.style.transform = "scale(1.2)";
    heading.style.transition = "transform 0.3s ease";
};
//off hover, font shrinks.
heading.onmouseout = function () {
    heading.style.transform = "scale(1)";
};