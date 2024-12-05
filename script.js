const gridContainer = document.querySelector("#grid-container");
const setGridButton = document.querySelector("#set-grid");

function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function handleHover(event) {
  event.target.style.backgroundColor = randomColor();
} 

function generateGrid(size) {
  for (let i = 0; i < (size * size); i++) {
    const item = document.createElement("div");
    item.setAttribute("id", "grid-item");
    item.classList.add("grid-item");
    item.style.setProperty("flex-basis", `calc(100% / ${size})`);
    item.addEventListener("mouseenter", handleHover);
    gridContainer.appendChild(item);
  }

  const gridItems = document.querySelectorAll("#grid-item");
  const resetGridButton = document.querySelector("#reset-grid");

  resetGridButton.addEventListener("click", () => {
    gridItems.forEach(item => {
      item.style.backgroundColor = "#ececec";
    })
  })
}

generateGrid(16);

function setGrid() {
  const userInput = Number(prompt("Enter grid size (grid size must be less than 100"))
  
  if (userInput > 100) return alert("input must be less than 100");
  if (isNaN(userInput)) return alert("input must be number");
  if (!userInput) return;

  gridContainer.textContent = "";
  generateGrid(userInput);
}

setGridButton.addEventListener("click", setGrid);