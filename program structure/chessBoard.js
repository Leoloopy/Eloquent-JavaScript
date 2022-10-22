let chessBoard = [];
let chessGrid = 8;

for (let i = 1; i <= chessGrid; i++) {
  if (i % 2 == 1) {
    chessBoard.push(" ");
  } else if (i % 2 == 0) {
    chessBoard.push("#");
  }
}

let reversedChessBoard = [...chessBoard].reverse();

for (let i = 0; i < chessBoard.length; i++) {
  if (i % 2 == 0) console.log(chessBoard.join(" "));
  if (i % 2 == 1) console.log(reversedChessBoard.join(" "));
}
