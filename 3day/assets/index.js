const container = document.querySelector(".block");

const canvasWidth = container.getAttribute("data-canvas-width"),
    canvasHeight = container.getAttribute("data-canvas-height");

for (let i = 1; i <= canvasWidth * canvasHeight; i++) {
    const child = document.createElement("div");
    child.classList.add("item");
    container.appendChild(child);
}

const backgrounds = [
    "rgba(182, 255, 250, ",
    "rgba(152, 228, 255, ",
    "rgba(104, 126, 255, ",
    "rgba(255, 227, 187, ",
    "rgba(255, 210, 143, ",
    "rgba(159, 187, 115, ",
    "rgba(241, 235, 144, ",
    "rgba(236, 143, 94, ",
    "rgba(244, 80, 80, ",
    "rgba(255, 197, 197, ",
    "rgba(199, 220, 167, ",
];

const items = document.querySelectorAll(".item");
items.forEach((elem) => {
    elem.addEventListener("mouseover", ({ target }) => {
        const randomColor =
            backgrounds[Math.ceil(Math.random() * backgrounds.length + 1)];
        target.style.backgroundColor = randomColor + "1)";
        target.style.boxShadow = "0 0 5px " + randomColor + "1)";
        setTimeout(() => {
            target.style.backgroundColor = randomColor + "0.9)";
            target.style.boxShadow = "0 0 5px " + randomColor + "0.9)";
        }, 400);
        setTimeout(() => {
            target.style.backgroundColor = "transparent";
            target.style.boxShadow = "";
        }, 700);
    });
});
