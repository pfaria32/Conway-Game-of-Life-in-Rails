document.addEventListener('turbolinks:load', () => {
  const cellDead = document.querySelectorAll(".cell_dead");
  cellDead.forEach((x) => {
    x.addEventListener('click', (event) => {
      x.classList.remove('cell_dead');
      x.classList.add('cell_alive');
    });
  });
});
