document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.cursor');
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
