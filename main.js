(() => {
  const oneSquare = document.querySelector(".one-square");
  const faceButton = document.querySelector(".face-button");
  const digit = document.querySelector(".digit");

  oneSquare.classList.remove("exploded");
  oneSquare.classList.add("flagged");
  faceButton.classList.remove("face-button-dead");
  faceButton.classList.add("face-button-won");
  digit.src = "./img/display-digit-0.png";
})();
