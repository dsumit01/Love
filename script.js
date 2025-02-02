// function moveRandomEl(elm) {
//     elm.style.position = "absolute";
//     elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
//     elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
// }

// const moveRandom = document.querySelector("#move-random");

// moveRandom.addEventListener("mouseenter", function(e) {
//     moveRandomEl(e.target);
// });



function moveRandomEl(elm) {
    elm.style.position = "absolute";

    // Get viewport dimensions
    const maxX = window.innerWidth - elm.offsetWidth;
    const maxY = window.innerHeight - elm.offsetHeight;

    // Set random positions within screen limits
    elm.style.left = Math.floor(Math.random() * maxX) + "px";
    elm.style.top = Math.floor(Math.random() * maxY) + "px";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e) {
    moveRandomEl(e.target);
});
