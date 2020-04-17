/*
 * BRIEF
 *
 * Given the position of two queens on a chess board, indicate whether or not they are positioned so that they can attack each other.
 * In the game of chess, a queen can attack pieces which are on the same row, column, or diagonal.
 * A chessboard can be represented by an 8 by 8 array.
 * So if you're told the white queen is at (2, 3) and the black queen at (5, 6), then you'd know you've got a set-up like so:
 * _ _ _ _ _ _ _ _
 * _ _ _ _ _ _ _ _
 * _ _ _ W _ _ _ _
 * _ _ _ _ _ _ _ _
 * _ _ _ _ _ _ _ _
 * _ _ _ _ _ _ B _
 * _ _ _ _ _ _ _ _
 * _ _ _ _ _ _ _ _
 * You'd also be able to answer whether the queens can attack each other. In this case, that answer would be yes, they can, because both pieces share a diagonal.
 *
 */
type Positions = {
  white: number[],
  black: number[]
}

function inSamePlace(a: number[], b: number[]): boolean {
  if (a === b) return true;
  if (a == null || b == null || a.length != b.length) return false;
  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

function initBoard(size: number): string[][] {
  return [...Array(size)].map(() => {
    const arr = Array(size).fill('_ ');
    arr[size - 1] = '_';
    return arr;
  });
}

export default class QueenAttack {
  public white: number[];
  public black: number[];

  constructor(positions: Positions) {
    if (inSamePlace(positions.white, positions.black)) throw "Queens cannot share the same space";
    this.white = positions.white;
    this.black = positions.black;
  }

  canAttack(): boolean {
    if (this.white[0] === this.black[0]) return true;
    if (this.white[1] === this.black[1]) return true;
    return false;
  }

  toString(): string {
    const boardSize = 8; // 8x8A
    const board = initBoard(boardSize);
    board[this.white[0]][this.white[1]] = (this.white[1] == boardSize) ? 'W' : 'W ';
    board[this.black[0]][this.black[1]] = (this.black[1] == boardSize) ? 'B' : 'B ';
    return board.map(e => e.join('')).join('\n') + '\n'; 
  }
}

