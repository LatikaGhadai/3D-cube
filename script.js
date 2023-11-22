let cube = document.querySelector(".image-cube");
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");

let pos = 0;

btnNext.addEventListener("click", () => {
    pos += 90; // Increase the rotation angle for "next"
    cube.style.transform = `rotateY(${pos}deg)`;
});

btnPrev.addEventListener("click", () => {
    pos -= 90; // Decrease the rotation angle for "prev"
    cube.style.transform = `rotateY(${pos}deg)`;
});
