// const navDiv = document.getElementById("nav-div");
// const nav = document.getElementById("nav-li");
//
//
// const burger = document.getElementById("burger");
// const bar1 = document.getElementById("bar1");
// const bar2 = document.getElementById("bar2");
// const bar3 = document.getElementById("bar3");
const sec = document.getElementById("about-me");
const h1 = document.getElementById("h1");


// function toggleNav() {

//     navDiv.classList.toggle("nav-div-toggle");
//     nav.classList.toggle("nav-toggle");

//     bar1.classList.toggle("bar1")
//     bar2.classList.toggle("bar2")
//     bar3.classList.toggle("bar3")
//
//     }
//
// // Look for .hamburger
// var hamburger = document.querySelector(".hamburger");
// // On click
// hamburger.addEventListener("click", function () {
//     // Toggle class "is-active"
//     hamburger.classList.toggle("is-active");
//     // Do something else, like open/close menu
//     navDiv.classList.toggle("nav-div-toggle");
//     nav.classList.toggle("nav-toggle");
// });


$(window).scroll(function () {
    var hT = $('#my-skills').offset().top,
        hH = $('#my-skills').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();

    if (wS > (hT + hH - wH - 200)) {
        $("#html").addClass("html");
        $("#css").addClass("css");
        $("#bootstrap").addClass("bootstrap");
        $("#js").addClass("js");
        $("#jq").addClass("jq");
        $("#py").addClass("py");
        $("#django").addClass("django");
        $("#flask").addClass("flask");
    }

});