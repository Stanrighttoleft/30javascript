const bodyEl = document.querySelector(".omg");

bodyEl.addEventListener("mousemove", (event) => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;

  const spanEl = document.createElement("span");
  
  const size = Math.random() * 50 ; // Keep bubbles smaller if needed
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  // Set position
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";

  // Apply styles and append
  spanEl.classList.add("bubble");
  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 2000);
});