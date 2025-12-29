const lanterns = document.querySelectorAll('.lantern');
const leftBtn = document.querySelector('.nav.left');
const rightBtn = document.querySelector('.nav.right');

let index = 0;
let busy = false;

/*
  DESIGN GOAL:
  - Exit first
  - Pause
  - Enter next
  - Never overlap logic
*/

function show(next, direction) {
  if (busy) return;
  if (next < 0 || next >= lanterns.length) return;

  busy = true;

  const current = lanterns[index];
  const target = lanterns[next];

  // EXIT current lantern
  current.classList.remove('active');
  current.classList.add(
    direction === 'next' ? 'exit-right' : 'exit-left'
  );

  // PREPARE target (parked off-screen by CSS)
  target.classList.remove('exit-left', 'exit-right');

  // ENTER after a gentle pause
  setTimeout(() => {
    target.classList.add('active');
  }, 1200);

  // CLEANUP
  setTimeout(() => {
    current.classList.remove('exit-left', 'exit-right');
    index = next;
    busy = false;
  }, 3500);
}

/* NAVIGATION — SINGLE SOURCE OF TRUTH */

rightBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  show(index + 1, 'next');
});

leftBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  show(index - 1, 'prev');
});
