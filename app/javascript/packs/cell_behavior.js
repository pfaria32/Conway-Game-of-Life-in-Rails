function xCoord(mainId) {
  return mainId.match(/(\d{1,4})(?:,\d{1,4})/);
}

function yCoord(mainId) {
  return mainId.match(/(?:\d{1,4},)(\d{1,4})/);
}

function htmlOfMainCells(coordMap) {
  htmlOfMainCells = [];
  coordMap.forEach((cell) => {
    htmlOfMainCells.push(document.getElementById(cell));
  });
  return htmlOfMainCells;
}

function surroundingCells(coordMap) {
  let surroundXy = [];
  coordMap.forEach((x) => {
    if (x[0] !== 40 && x[1] !== 40 || x[0] !== 40 || x[1] !== 40) {
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
    }
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

function htmlCellMapping(mainCells, htmlOfSurroundCells) {
  htmlCellMap = new Map;
  let indexCounter = 0
  mainCells.forEach((mainCell) => {
    otherCells = htmlOfSurroundCells[indexCounter];
    htmlCellMap.set(mainCell, otherCells)
    indexCounter += 1;
  })
  return htmlCellMap;
}

function checksurroundCellsLivingSituation(htmlCellMap) {
  cellLivingSituation = new Map;
  deadCellLivingSituation = new Map;
  htmlCellMap.forEach((value, key) => {
    cellAliveCounter = 0;
    value.forEach((cell) => {
      if (cell !== null) {
        if (cell.className === 'cell_alive') {
          cellAliveCounter += 1;
        }
      }
    })
    cellLivingSituation.set(key, cellAliveCounter);
  });
  return(cellLivingSituation);
}

function cellDies(cell) {
  dyingCell = document.getElementById(cell.id);
  dyingCell.classList.remove('cell_alive');
  dyingCell.classList.add('cell_dead');
}

function aliveCellsLiveOrDie(surroundCellsLivingSituation) {
  console.log(surroundCellsLivingSituation);
  surroundCellsLivingSituation.forEach((value, key) => {
    if (value < 2 || value > 3) {
      cellDies(key);
    }
  });
}

function deadCellProtocol(cellDead) {
  console.log(cellDead);
  surroundCells = surroundingCells(cellDead);
  htmlOfSurroundCells = htmlOfCells(surroundCells);
  htmlCellMap = htmlCellMapping(cellDead, htmlOfSurroundCells);
  deadCellLivingSituation = new Map;
  htmlCellMap.forEach((value, key) => {
    cellAliveCounter = 0;
    value.forEach((cell) => {
      if (cell !== null) {
        if (cell.className === 'cell_alive') {
          cellAliveCounter += 1;
        }
      }
    });
    deadCellLivingSituation.set(key, cellAliveCounter);
  });
  return deadCellLivingSituation;
}

function cellLives(cell) {
  livingCell = document.getElementById(cell.id);
  livingCell.classList.remove('cell_dead');
  livingCell.classList.add('cell_alive');
}

function deadCellsLiveOrDie(allDeadCellsLivingSituation) {
  allDeadCellsLivingSituation.forEach((value, key) => {
    if (value === 3) {
      cellLives(key);
    }
  });
}

document.addEventListener('turbolinks:load', () => {
  const goButton = document.getElementById('go');
  let xVar = true;
  goButton.addEventListener('click', (event) => {
    for (let step =0; step < 201; step++) {
      let cellAlive = document.querySelectorAll(".cell_alive");
      coordMap = [];
      coordCounter = 1;
      cellAlive.forEach((x) => {
        mainId = x.id
        coordMap.push([parseInt(xCoord(mainId)[1]), parseInt(yCoord(mainId)[1])]);
      });
      let mainCells = htmlOfMainCells(coordMap);
      let surroundCells = surroundingCells(coordMap);
      let htmlOfSurroundCells = htmlOfCells(surroundCells);
      let htmlCellMap = htmlCellMapping(mainCells, htmlOfSurroundCells);
      let surroundCellsLivingSituation = checksurroundCellsLivingSituation(htmlCellMap);
      aliveCellsLiveOrDie(surroundCellsLivingSituation);
      let cellDead = document.querySelectorAll(".cell_dead");
      let allDeadCellsLivingSituation = deadCellProtocol(cellDead);
      deadCellsLiveOrDie(allDeadCellsLivingSituation);
    };
  });
});




// Any live cell with fewer than two live neighbours dies, as if by underpopulation. ok
// Any live cell with two or three live neighbours lives on to the next generation. ok
// Any live cell with more than three live neighbours dies, as if by overpopulation.
// Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
// These rules, which compare the behavior of the automaton to real life, can be condensed into the following:

// Any live cell with two or three live neighbours survives.
// Any dead cell with three live neighbours becomes a live cell.
// All other live cells die in the next generation. Similarly, all other dead cells stay dead.


