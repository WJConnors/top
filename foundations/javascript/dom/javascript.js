const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const para = document.createElement("p");
para.textContent = "Hey I'm red";
para.style.color =  "red";
container.appendChild(para);

const h3 = document.createElement("h3");
h3.textContent = "Hey I'm blue";
h3.style.color =  "blue";
container.appendChild(h3);

const div = document.createElement("div");
div.setAttribute("style", "background:pink; border-style: solid; border-color: black");
container.appendChild(div);

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const p2 = document.createElement("p");
p2.textContent = "ME TOO!"
div.appendChild(p2);