function moveRandomEl(elm) {
    elm.style.position = "fixed"; // screen ke reference se
  
    const maxX = window.innerWidth - elm.offsetWidth;
    const maxY = window.innerHeight - elm.offsetHeight;
  
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
  
    elm.style.left = randomX + "px";
    elm.style.top = randomY + "px";
  }
  
  const moveRandom = document.querySelector("#move-random");
  
  moveRandom.addEventListener("mouseenter", (e) => {
    moveRandomEl(e.target);
  });