const container = document.createElement("div");
container.id = "container";
const body = document.querySelector("body");
body.append(container);
//Row 1
for(i = 1; i < 16; i++)
{
    const div = document.createAttribute("div");
    div.id = "1-" + i;
    div.classList.add('box');
    container.append(div);
}