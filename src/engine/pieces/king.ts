import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const availableMoves : Square[] = [];
        const currentPosition : Square = board.findPiece(this);

        const possibleMoves : number[][] = [[1, 1], [1, 0], [0, 1], [-1, 0], [-1, -1], [0, -1], [1, -1], [-1, 1]];
        for (let i = 0; i < possibleMoves.length; i++) {
            if (this.checkBounds(currentPosition.row + possibleMoves[i][0], currentPosition.col + possibleMoves[i][1])) {
                availableMoves.push(Square.at(currentPosition.row + possibleMoves[i][0], currentPosition.col + possibleMoves[i][1]))
            }
        }

        return availableMoves;
    }
}
