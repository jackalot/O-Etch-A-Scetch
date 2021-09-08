const container = document.createElement("div");
container.id = "container";
const body = document.querySelector("body");
body.append(container);
//16 * 16 = 256
/* 
To shorten the creation of the grid
--- = continues on
256 / 2 = 128
256 / 3 = 85.33---
Round down to 85
256 / 4 = 64
256 / 5 = 51.2
256 / 6 = 42.66---
Round up to 43
256 / 7 = 36.57---
Round up to 37
256 / 8 = 32
256 / 9 = 28.44---
Round down to 28
256 / 10 = 25.6
256 / 11 = 23.27---
Round down to 23
256 / 12 = 21.33---
Round down to 21
256 / 13 = 19.69---
Round up to 20
256 / 14 = 18.28---
Round up to 18
256 / 15 = 17.06---
Round up to 17
256 / 16 = 16
*/
//Row 1
for(i=1; i <= 16; i++)
{
    let newdiv = document.createElement("div");
    newdiv.id = "1-" + i;
    newdiv.classList.add("box");
    container.appendChild(newdiv);  
}
for(i=1; i <= 16; i++)
{
    let newdiv = document.createElement("div");
    newdiv.id = "2-" + i;
    newdiv.classList.add("box");
    container.appendChild(newdiv);  
}
for(i=1; i <= 16; i++)
{
    let newdiv = document.createElement("div");
    newdiv.id = "3-" + i;
    newdiv.classList.add("box");
    container.appendChild(newdiv);  
}
for(i=1; i <= 16; i++)
{
    let newdiv = document.createElement("div");
    newdiv.id = "4-" + i;
    newdiv.classList.add("box");
    container.appendChild(newdiv);  
}
for(i=1; i <= 16; i++)
{
    let newdiv = document.createElement("div");
    newdiv.id = "5-" + i;
    newdiv.classList.add("box");
    container.appendChild(newdiv);  
}
for(i=1; i <= 16; i++)
{
    let newdiv = document.createElement("div");
    newdiv.id = "6-" + i;
    newdiv.classList.add("box");
    container.appendChild(newdiv);  
}
for(i=1; i <= 16; i++)
{
    let newdiv = document.createElement("div");
    newdiv.id = "7-" + i;
    newdiv.classList.add("box");
    container.appendChild(newdiv);  
}
for(i=1; i <= 16; i++)
{
    let newdiv = document.createElement("div");
    newdiv.id = "8-" + i;
    newdiv.classList.add("box");
    container.appendChild(newdiv);  
}
for(i=1; i <= 16; i++)
{
    let newdiv = document.createElement("div");
    newdiv.id = "9-" + i;
    newdiv.classList.add("box");
    container.appendChild(newdiv);  
}
for(i=1; i <= 16; i++)
{
    let newdiv = document.createElement("div");
    newdiv.id = "10-" + i;
    newdiv.classList.add("box");
    container.appendChild(newdiv);  
}
for(i=1; i <= 16; i++)
{
    let newdiv = document.createElement("div");
    newdiv.id = "11-" + i;
    newdiv.classList.add("box");
    container.appendChild(newdiv);  
}
for(i=1; i <= 16; i++)
{
    let newdiv = document.createElement("div");
    newdiv.id = "12-" + i;
    newdiv.classList.add("box");
    container.appendChild(newdiv);  
}
for(i=1; i <= 16; i++)
{
    let newdiv = document.createElement("div");
    newdiv.id = "13-" + i;
    newdiv.classList.add("box");
    container.appendChild(newdiv);  
}
for(i=1; i <= 16; i++)
{
    let newdiv = document.createElement("div");
    newdiv.id = "14-" + i;
    newdiv.classList.add("box");
    container.appendChild(newdiv);  
}
for(i=1; i <= 16; i++)
{
    let newdiv = document.createElement("div");
    newdiv.id = "15-" + i;
    newdiv.classList.add("box");
    container.appendChild(newdiv);  
}
for(i=1; i <= 16; i++)
{
    let newdiv = document.createElement("div");
    newdiv.id = "16-" + i;
    newdiv.classList.add("box");
    container.appendChild(newdiv);  
}