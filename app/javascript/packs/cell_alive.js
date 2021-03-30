document.addEventListener('turbolinks:load', () => {
  const cellAlive = document.querySelectorAll(".cell_alive");
  cellAlive.forEach((x) => {
    x.addEventListener('click', (event) => {
      x.classList.remove('cell_alive');
      x.classList.add('cell_dead');
    });
  });
});
