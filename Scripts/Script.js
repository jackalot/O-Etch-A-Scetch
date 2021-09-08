const container = document.createElement("div");
container.id = "container";
const body = document.querySelector("body");
body.append(container);
//Row 1
for(i=1; i <= 16; i++)
{
    let newdiv = document.createElement("div");
    newdiv.id = "1-" + i;
    container.appendChild(newdiv);  
}
    