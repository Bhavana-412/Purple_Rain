function createRainDrop() {
    const drop = document.createElement("div");
    drop.classList.add("rain-drop");
    drop.style.left = `${Math.random() * 100}%`;
    drop.style.animationDuration = `${Math.random() * 2 + 1}s`;
    document.body.appendChild(drop);
  
    drop.addEventListener("animationend", () => {
      document.body.removeChild(drop);
    });
  }
  
  setInterval(createRainDrop, 100);
  