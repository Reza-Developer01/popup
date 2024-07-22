const getButtonPrimary = document.querySelector(".btn-primary");
const getCloseButton = document.querySelector(".close-btn");
const getOverlay = document.querySelector(".overlay");

getButtonPrimary.addEventListener("click", () =>
  getOverlay.classList.add("overlay--open")
);

getCloseButton.addEventListener("click", () =>
  getOverlay.classList.remove("overlay--open")
);
