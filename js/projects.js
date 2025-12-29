/* =====================================================
   LINK AVAILABILITY HANDLING (IMPORTANT)
===================================================== */

document.querySelectorAll('.realm-links a').forEach(link => {
  const href = link.getAttribute('href');

  if (
    !href ||
    href.includes('LINK_HERE') ||
    href.includes('YOUTUBE_LINK_HERE') ||
    href.includes('#')
  ) {
    link.classList.add('disabled-link');
    link.setAttribute('aria-disabled', 'true');
    link.setAttribute('title', 'Link coming soon');

    // prevent navigation
    link.addEventListener('click', e => e.preventDefault());
  }
});

/* =====================================================
   REALM CLICK HANDLING
===================================================== */

document.querySelectorAll('.realm').forEach(realm => {
  realm.addEventListener('click', (e) => {
    // Ignore clicks on icons / links
    if (e.target.closest('.realm-links')) return;

    const yt = realm.dataset.youtube;
    const li = realm.dataset.linkedin;

    if (yt) {
      openVideo(yt);
    } else if (li) {
      window.open(li, '_blank');
    } else {
      sealRealm(realm);
    }
  });
});

function sealRealm(realm) {
  realm.classList.add('sealed');
  setTimeout(() => realm.classList.remove('sealed'), 600);
}

/* =====================================================
   VIDEO MODAL
===================================================== */

function openVideo(src) {
  const overlay = document.createElement('div');
  overlay.className = 'video-overlay';

  overlay.innerHTML = `
    <div class="video-frame">
      <iframe src="${src}" allowfullscreen></iframe>
      <button class="close" aria-label="Close video">✕</button>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.querySelector('.close').addEventListener('click', () => {
    overlay.remove();
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
}

/* =====================================================
   CURSOR SPARKLES (DESKTOP ONLY)
===================================================== */

const isTouch = window.matchMedia('(hover: none)').matches;
if (!isTouch) initSparkles();

function initSparkles() {
  const layer = document.createElement('div');
  layer.id = 'sparkle-layer';
  document.body.appendChild(layer);

  let lastTime = 0;

  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTime < 40) return;
    lastTime = now;

    createSparkle(e.clientX, e.clientY);
  });

  // Extra sparkle on Back to Home
  const backBtn = document.querySelector('footer a');
  if (backBtn) {
    backBtn.addEventListener('mouseenter', () => {
      burstSparkles(backBtn);
    });
  }
}

function createSparkle(x, y) {
  const sparkle = document.createElement('div');
  sparkle.className = 'sparkle';

  const size = Math.random() * 4 + 4;
  sparkle.style.width = `${size}px`;
  sparkle.style.height = `${size}px`;

  sparkle.style.left = `${x + rand(-6, 6)}px`;
  sparkle.style.top = `${y + rand(-6, 6)}px`;

  document.getElementById('sparkle-layer').appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 700);
}

function burstSparkles(el) {
  const rect = el.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  for (let i = 0; i < 12; i++) {
    setTimeout(() => {
      createSparkle(
        cx + rand(-20, 20),
        cy + rand(-20, 20)
      );
    }, i * 20);
  }
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}
