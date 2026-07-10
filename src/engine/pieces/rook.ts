import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const availableMoves : Square[] = [];
        const currentPosition : Square = board.findPiece(this);
        for (let i = 0; i < 8; i++) {
            if (i != currentPosition.col) {
                availableMoves.push(Square.at(currentPosition.row, i))
            }
        }
        for (let i = 0; i < 8; i++) {
            if (i != currentPosition.row) {
                availableMoves.push(Square.at(i, currentPosition.col))
            }
        }
        return availableMoves;
    }
}
