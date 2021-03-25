function xCoord(mainId) {
  return mainId.match(/(\d{1,4})(?:,\d{1,4})/);
}

function yCoord(mainId) {
  return mainId.match(/(?:\d{1,4},)(\d{1,4})/);
}

document.addEventListener('turbolinks:load', () => {
  const goButton = document.getElementById('go');
  goButton.addEventListener('click', (event) => {
    const cellAlive = document.querySelectorAll(".cell_alive");
    cellAlive.forEach((x) => {
      mainId = x.id;
      console.log(xCoord(mainId));
      console.log(yCoord(mainId));
    });
  });
});
