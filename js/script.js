window.addEventListener("load", () => {

  const storybook = document.getElementById("storybook-scene");
  const mist = document.getElementById("mist-scene");
  const about = document.getElementById("about-scene");

  // SAFETY: start clean
  mist.classList.remove("active");
  about.classList.remove("active");

  // 1️⃣ Storybook stays visible initially
  storybook.classList.add("active");

  // 2️⃣ Mist enters (after book + text)
  setTimeout(() => {
    mist.classList.add("active");
  }, 8200);

  // 3️⃣ Hide storybook behind mist
  setTimeout(() => {
    storybook.classList.remove("active");
  }, 9500);

  // 4️⃣ Show About page
  setTimeout(() => {
    about.classList.add("active");
  }, 11000);

  // 5️⃣ Clear mist upward
  setTimeout(() => {
    document.querySelectorAll(".mist")
      .forEach(m => m.classList.add("clear"));
  }, 12500);

  // 6️⃣ Enable scrolling ONLY now
  setTimeout(() => {
    document.body.style.overflowY = "auto";
  }, 13000);

});
