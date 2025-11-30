document.getElementById("title").textContent = "Welcome to the DOM World!";

let paras = document.getElementsByTagName("p");
for (let p of paras) {
  p.style.color = "blue";
}

let firstContainer = document.querySelector(".container");
firstContainer.style.backgroundColor = "yellow";
