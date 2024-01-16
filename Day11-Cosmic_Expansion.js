const DATA = `................................#.......#......#.....#...........................#..........................................................
..........................................................#..........................................................#...........#..........
.....#.....................#.............................................................#..................................................
.............#..............................................................................................................................
.....................................................................................#....................#.................#...............
..................#..........................................#...................................#..............#...........................
...............................#....................................................................................................#.......
..........#..............#.............#................#...................#...............................................................
....#............................................................................#..........................................................
...............#................................#......................................................................#................#...
...................................#.............................#...............................................#..........#.....#.........
#...................................................................................#.....#.....#......#....................................
...............................#............................................................................................................
..........................................................#................#................................................................
.......#.......................................................................................................................#............
..#.........#.........................................................................#.....................................................
..........................................#........#.......................................#.......#..................#............#........
.................#..............#..............................#...............................................#..........................#.
...............................................................................................#........#...................................
......................#............................................#......................................................#.................
.....................................#.....................................#..........................................................#.....
......#......................#...................#......#...................................................................................
..........................................................................................................#.................................
......................................................................#.........................................#.............#.............
#............................................#.........................................#.................................................#..
.............................................................#.....................................#........................................
..............#..............................................................................................#....................#.........
.........#.........#...................................#....................................................................................
........................................#..............................#........................#......#.................#..................
......................................................................................#................................................#....
................#...........#...............................................................................................................
.....................................................#.........#............................................................................
....#.......#.......#.......................................................#.....................#.........................................
.....................................#...........#..............................................................#...........................
..........................................................................................................#.................................
.......................#.............................................#..........#...........................................................
#............................................................#...........................#.................................#.......#........
.............................#......................................................#.................................#.....................
.........................................#............#.................#......................#..............#................#.........#..
............................................................................................................................................
..........#.................................................................................................................................
..........................................................#.......................................#.........................................
#.....................#...............#..........#....................#.................................#...................#...............
............................................................................................................................................
.......#..........................#.........................................................................................................
.................#...............................................#..............................#.................................#.........
........................................................................................................................#...................
..............................#.................#.....#..............................#..........................#...........................
.....................................#.........................................#...........................#.........................#......
.............#.....................................................#............................................................#..........#
....#.........................................................#..................................#..........................................
............................................#...........................#..................................................#................
...............................#.........................................................................#..................................
............................................................................................................................................
.................#.........#....................#..........................#........................................................#.......
.......................................................#....................................#...............................................
............................................................................................................................................
...#...............................................................................#............................................#...........
..........#.....................#......................................................................#....................................
.........................................#..................................................................................................
.....................................................#.................#.............................................#..............#.......
......................#.......................#.............................................................................#...............
........#.............................#..........................#....................#.......................#.............................
.................#..........................................................................#.....#.............................#.........#.
............................................................................................................................................
.........................................................................#..................................................................
..............................................................#.............................................................................
..........................#.............#..........................#.......................................#..........#.....................
............................................................................................................................................
..............................#......................................................................#............#...............#.........
.............#..............................#.........#.................#...................................................................
.....................#............................................................#.......................................#.................
......................................#................................................#.................................................#..
.................#...............................#..........................................................#...............................
........#......................................................#...........#................................................................
.........................................#......................................#...........#.....................#.........................
.#.........................#................................................................................................................
................................................................................................#...................................#......#
...........................................................#............#.............#..................#..................................
..................................................#.........................................................................................
...........#................................#......................#................................................#..........#............
........................#.........#.........................................................................................................
.............................................................#.................................#...............#...........#................
................#............#.......................................................................#......................................
.#......................................................................#......#...........#................................................
........................................................#..................................................#................................
......................#...................#.....#..................#..............................#.........................................
............................................................................................................................................
...........#..........................#....................#............................................................#...................
...................#...................................................................#...............................................#....
...........................#...................................................................#.........#..................................
.....#...........................................#.........................................................................#................
......................#.............#......................................#......#.................#.......................................
...............#..............#...........................................................#.....................#...............#...........
...........................................................#.....#.........................................................................#
.......................................#...............................#....................................................................
.................................#..................#..................................................................................#....
...........................................#..................................#.........................#...................................
.........#..............................................................................#...................................................
................#.....#................................#.................................................................#..................
.................................................................................................#..........................................
#..............................................#........................#...........................................#................#......
..............................#...................................................#.......................#.................................
..................#.................................#......................................................................................#
..........#................................#..................................#...........#.................................................
.....................................................................#....................................................#.................
...............#.....................................................................................................#......................
#........................................................#......#..........................................#........................#.......
.......................#.........#......#...................................................................................................
.....#......................................................................................................................................
..................#...............................#....................................................................#....................
............................................#......................#........................................................................
.............#........................................#.........................#.........#........................#.....................#..
...................................................................................................#..............................#.........
..........................#.................................................................................................................
..#................#....................................................#.......................................#...........................
...........#.................................#.........................................#................................#.............#.....
......................................#.......................#.....#.....................................#.................................
.................................#...............................................................#..........................................
.................#..........#.............................................#.......#...............................#..........#..............
.......................................................#................................................................................#...
..#........................................................................................#................................................
............................................................................................................................................
...................................#..........................................#.............................................................
...........................................#........#...............................................#...........................#...........
................................................................#......#....................................................................
....#.................#.........................#...............................................................#...........................
............................#..............................................................................#................#.......#.......
........#................................#................#.............................#............................#......................
#....................................................#..................................................................................#...
............#........................................................#........................#.............................................
..................#................#.......................................#................................................................
...........................#...............#......#..........#..................#..................#.................................#.....#
..........................................................................................#......................#.........#................
.......................................#....................................................................#...............................
...............#..............#........................................#................................................................#...
..........#.................................................................#...............................................................
.....#...............................................#.....#.....................................#..................#.........#.............
...............................................#........................................................#...................................
.#....................#.............................................................#.................................................#.....`

const TEST_DATA = `...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`

function expandCosmos(cosmos) {
  const expandedCosmos = []

  for (let i = 0; i < cosmos.length; i++) {
    const row = cosmos[i]

    expandedCosmos.push(row.split(""))
    if (!row.includes("#")) {
      expandedCosmos.push(row.split(""))
    }
  }

  for (let x = 0; x < expandedCosmos[0].length; x++) {
    let isEmpty = true;

    for (let y = 0; y < expandedCosmos.length; y++) {
      const el = expandedCosmos[y][x];
      
      if(el === "#") {
        isEmpty = false
        break;
      }
    }
    
    if (isEmpty) {
      for (let y = 0; y < expandedCosmos.length; y++) {
        expandedCosmos[y].splice(x, 0, ".")
      }
      x++
    }
  }

  const galaxies = []

  for (let y = 0; y < expandedCosmos.length; y++) {
    const row = expandedCosmos[y];
    for (let x = 0; x < row.length; x++) {
      const el = row[x];
      if (el === "#") galaxies.push({x, y})
    }
  }

  let result = 0

  for (let i = 0; i < galaxies.length - 1; i++) {
    const {x: ax, y: ay} = galaxies[i];
    for (let j = 1 + i; j < galaxies.length; j++) {
      const {x: bx, y: by} = galaxies[j];
      
      result += Math.abs(ax - bx) + Math.abs(ay - by)
    }
  }

  return result
}

function cosmicExpansion(data) {
  const cosmos = data.split("\n")
  const expandedCosmos = expandCosmos(cosmos)
  

  return expandedCosmos
}

const response = cosmicExpansion(DATA)
console.log(response)