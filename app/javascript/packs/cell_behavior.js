function xCoord(mainId) {
  return mainId.match(/(\d{1,4})(?:,\d{1,4})/);
}

function yCoord(mainId) {
  return mainId.match(/(?:\d{1,4},)(\d{1,4})/);
}

function cellBehavior(coordMapX, coordMapY) {
  // const Cell1 = [[x+0],[y+1]];
  // const Cell2 = [[x+0],[y-1]];
  // const Cell3 = [[x+1],[y+0]];
  // const Cell4 = [[x-1],[y+0]];
  // const Cell5 = [[x-1],[y-1]];
  // const Cell6 = [[x-1],[y+1]];
  // const Cell7 = [[x+1],[y-1]];
  // const Cell8 = [[x+1],[y+1]];
  // em relacao a cada celula viva, qual é o status das 8 células acima??
  console.log(coordMapX);
  console.log(coordMapY);
  let surroundX = [];
  let surroundY = [];
  coordMapX.forEach((x) => {
    surroundX.push([[(x + 0)], [(x + 0)], [(x + 1)], [(x - 1)], [(x - 1)], [(x - 1)], [(x + 1)], [(x + 1)]]);
  })
  coordMapY.forEach((y) => {
    surroudY.push([[(y + 1)], [(y - 1)], [(y + 0)], [(y + 0)], [(y - 1)], [(y + 1)], [(y - 1)], [(y + 1)]]);
  })
}

document.addEventListener('turbolinks:load', () => {
  const goButton = document.getElementById('go');
  goButton.addEventListener('click', (event) => {
    const cellAlive = document.querySelectorAll(".cell_alive");
    coordMapX = new Map ();
    coordMapY = new Map ();
    coordCounter = 1;
    cellAlive.forEach((x) => {
      mainId = x.id
      coordMapX.set(coordCounter, xCoord(mainId));
      coordMapY.set(coordCounter, yCoord(mainId));
      coordCounter += 1;
    });
    cellBehavior(coordMapX, coordMapY);
  });
});



// Any live cell with fewer than two live neighbours dies, as if by underpopulation.
// Any live cell with two or three live neighbours lives on to the next generation.
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
// These rules, which compare the behavior of the automaton to real life, can be condensed into the following:

// Any live cell with two or three live neighbours survives.
// Any dead cell with three live neighbours becomes a live cell.
// All other live cells die in the next generation. Similarly, all other dead cells stay dead.
