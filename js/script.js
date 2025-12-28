window.addEventListener("load", () => {

  /* =========================
     SCENE SEQUENCING
  ========================= */

  const storybook = document.getElementById("storybook-scene");
  const mist = document.getElementById("mist-scene");
  const about = document.getElementById("about-scene");

  // Safety: start clean
  mist.classList.remove("active");
  about.classList.remove("active");

  // 1️⃣ Storybook visible initially
  storybook.classList.add("active");

  // 2️⃣ Mist enters
  setTimeout(() => {
    mist.classList.add("active");
  }, 7200);

  // 3️⃣ Hide storybook
  setTimeout(() => {
    storybook.classList.remove("active");
  }, 8500);

  // 4️⃣ Show About page
  setTimeout(() => {
    about.classList.add("active");
  }, 10000);

  // 5️⃣ Clear mist upward
  setTimeout(() => {
    document.querySelectorAll(".mist")
      .forEach(m => m.classList.add("clear"));
  }, 11500);

  // 6️⃣ Enable scrolling
  setTimeout(() => {
    document.body.style.overflowY = "auto";
  }, 12000);

  /* =========================
     SKILL CARD DECK (CORRECT)
  ========================= */

  const cards = Array.from(document.querySelectorAll(".skill-card"));
  let currentIndex = 0;

  function updateDeck() {
    cards.forEach((card, index) => {
      card.classList.remove("active", "behind-1", "behind-2");

      const offset = (index - currentIndex + cards.length) % cards.length;

      if (offset === 0) {
        card.classList.add("active");
      } else if (offset === 1) {
        card.classList.add("behind-1");
      } else if (offset === 2) {
        card.classList.add("behind-2");
      }
    });
  }

  // Initial deck state
  updateDeck();

  document.getElementById("nextCard")?.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cards.length;
    updateDeck();
  });

  document.getElementById("prevCard")?.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    updateDeck();
  });

  /* =========================
     SKILLS SECTION REVEAL
  ========================= */

  const skillsSection = document.getElementById("skills-section");

  window.addEventListener("scroll", () => {
    if (!skillsSection) return;

    const rect = skillsSection.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.75) {
      skillsSection.style.display = "flex";
      skillsSection.style.flexDirection = "column";
      skillsSection.style.alignItems = "center";
    }
  });

});
