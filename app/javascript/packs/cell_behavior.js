function xCoord(mainId) {
  return mainId.match(/(\d{1,4})(?:,\d{1,4})/);
}

function yCoord(mainId) {
  return mainId.match(/(?:\d{1,4},)(\d{1,4})/);
}

function surroundingCells(coordMap) {
  let surroundXy = [];
  coordMap.forEach((x) => {
    surroundXy.push([
      [(x[0] + 0), (x[1] + 1)],
      [(x[0] + 0), (x[1] - 1)],
      [(x[0] + 1), (x[1] + 0)],
      [(x[0] - 1), (x[1] + 0)],
      [(x[0] - 1), (x[1] - 1)],
      [(x[0] - 1), (x[1] + 1)],
      [(x[0] + 1), (x[1] - 1)],
      [(x[0] + 1), (x[1] + 1)]
      ]);
  });
  return surroundXy;
}

function htmlOfCells(surroundCells) {
  let htmlOfAllCells = []
  let htmlOfCellsAroundOneLiving = []
  surroundCells.forEach((cells) => {
    cells.forEach((cell) => {
      htmlOfCellsAroundOneLiving.push(document.getElementById(cell));
    });
    htmlOfAllCells.push(htmlOfCellsAroundOneLiving);
    htmlOfCellsAroundOneLiving = [];
  });
  return htmlOfAllCells;
}

document.addEventListener('turbolinks:load', () => {
  const goButton = document.getElementById('go');
  goButton.addEventListener('click', (event) => {
    const cellAlive = document.querySelectorAll(".cell_alive");
    coordMap = [];
    coordCounter = 1;
    cellAlive.forEach((x) => {
      mainId = x.id
      coordMap.push([parseInt(xCoord(mainId)[1]), parseInt(yCoord(mainId)[1])]);
    });
    const surroundCells = surroundingCells(coordMap);
    htmlOfCells(surroundCells);
    // ainda precisa: (i) retornar status(classe de cada celula; e (ii)determinar o comportamento em relacao ao status verificado)
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
