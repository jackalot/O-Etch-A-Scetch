const container = document.createElement("div");
container.id = "container";
const body = document.querySelector("body");
body.append(container);
// 16*16 = 256
for(i=1; i <= 256; i++)
{
    let newdiv = document.createElement("div");
    newdiv.classList.add("box");
    container.appendChild(newdiv);
}
const boxes = document.querySelectorAll("div");
boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        box.classList.add("colored");
    })
})
function reset() {
    const coloredBoxes = document.querySelectorAll(".colored");
    coloredBoxes.forEach((box) => {
        box.classList.remove("colored");
    })
}
function newGrid() {
    let size = Number(window.prompt("How many slots do you want in your grid?", ""));
    let child = container.lastElementChild;
    while(child)
    {
        container.removeChild(child);
        child = container.lastElementChild;
    }
    for(i=1; i <= size; i++)
    {
        let newdiv = document.createElement("div");
        newdiv.classList.add("box");
        container.appendChild(newdiv);
    }
}