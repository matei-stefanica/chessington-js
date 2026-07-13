import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private kingMoves = [
        [1, 0], [0, 1], [-1, 0], [0, -1], [-1, 1], [1, -1], [1, 1], [-1, -1]
    ]

    public getAvailableMoves(board: Board) {
        const availableMoves : Square[] = [];
        const currentPosition : Square = board.findPiece(this);

        for (const [verticalStep, horizontalStep] of this.kingMoves) {
            if (this.checkBounds(currentPosition.row + verticalStep, currentPosition.col + horizontalStep)) {
                availableMoves.push(Square.at(currentPosition.row + verticalStep, currentPosition.col + horizontalStep))
            }
        }

        return availableMoves;
    }
}
