window.addEventListener("load", () => {

  // Mist rises
  setTimeout(() => {
    document.getElementById("mist-scene").classList.add("active");
  }, 8200);

  // About Me appears behind mist
  setTimeout(() => {
    const about = document.getElementById("about-scene");
    about.classList.add("active");
    about.style.opacity = "1";
  }, 9800);

  // About text fades/moves in
  setTimeout(() => {
    const aboutContent = document.querySelector(".about-content");
    if (aboutContent) {
      aboutContent.classList.add("animate");
    }
  }, 10800);

  // Mist clears upward
  setTimeout(() => {
    document.querySelectorAll(".mist")
      .forEach(m => m.classList.add("clear"));
  }, 12500);

});
