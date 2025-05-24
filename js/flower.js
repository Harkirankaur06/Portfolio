console.log("Flower script loaded");

const container = document.querySelector(".flower-container");

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.style.left = Math.random() * 100 + "vw";
  const duration = 4 + Math.random() * 3;
  flower.style.animationDuration = duration + "s";
  container.appendChild(flower);

  setTimeout(() => {
    flower.remove();
  }, duration * 1000 + 1000);
}

setInterval(() => {
  createFlower();
  console.log("flower created"); // Debug line
}, 500);
