/**
 * 0 indicates an empty position
 * 1 indicates an occupied position
 * 2 indicates a blocked position
 */
class Board {
    constructor(rows, cols) {
        const board = [];

        for (let i = 0; i < rows; i += 1) {
            board[i] = Array(cols).fill(0);
        }

        this.rows = rows;
        this.cols = cols;

        this.minRowIndex = 0;
        this.maxRowIndex = rows - 1;

        this.minColIndex = 0;
        this.maxColIndex = cols - 1;

        this.row = 0;
        this.col = 0;

        this.board = board;
    }

    placeToken(row, col) {
        const position = this.board[row][col];

        if (position === 0) {

        }
    }

    hasLeft(col) {
        const column = col == null ? this.col : col;
        return column - 1 >= this.minColIndex;
    }

    hasRight(col) {
        const column = col == null ? this.col : col;
        return column + 1 <= this.maxColIndex;
    }

    hasUpper(row) {
        const r = row == null ? this.row : row;
        return r - 1 >= this.minRowIndex;
    }

    hasLower(row) {
        const r = row == null ? this.row : row;
        return rw + 1 <= this.maxRowIndex;
    }

    hasUpperLeft(row, col) {
        const r = row == null ? this.row : row;
        const column = col == null ? this.col : col;

        return this.hasUpper(r) && this.hasLeft(column);
    }

    hasUpperRight(row, col) {
        const r = row == null ? this.row : row;
        const column = col == null ? this.col : col;

        return this.hasUpper(r) && this.hasRight(column);
    }

    hasLowerLeft(row, col) {
        const r = row == null ? this.row : row;
        const column = col == null ? this.col : col;

        return this.hasLower(r) && this.hasLeft(column);
    }

    hasLowerRight(row, col) {
        const r = row == null ? this.row : row;
        const column = col == null ? this.col : col;

        return this.hasLower(r) && this.hasRight(column);
    }

    row(row) {
        this.row = row;
        return this;
    }

    col(col) {
        this.col = col;
        return this;
    }

    is(value, row, col) {
        const r = row == null ? this.row : row;
        const column = col == null ? this.col : col;

        return this.board[r][column] === value;
    }

    placeToken(row, col) {
        const r = row == null ? this.row : row;
        const column = col == null ? this.col : col;

        if (this.board.row(r).col(column).is(0)) {

        }
    }
}

const b = new Board(2, 10);
