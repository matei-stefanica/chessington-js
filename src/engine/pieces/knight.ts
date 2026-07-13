import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private knightMoves = [
        [1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]
    ]

    public getAvailableMoves(board: Board) {
        const availableMoves : Square[] = [];
        const currentPosition : Square = board.findPiece(this);

        for (const [verticalStep, horizontalStep] of this.knightMoves) {
            const pieceRow : number = currentPosition.row + verticalStep;
            const pieceCol : number = currentPosition.col + horizontalStep;
            if (this.checkBounds(pieceRow, pieceCol)) {
                const enemyPiece : Piece | undefined = board.getPiece(Square.at(pieceRow, pieceCol));
                if (enemyPiece == undefined) {
                    availableMoves.push(Square.at(pieceRow, pieceCol));
                }
                else {
                    if (enemyPiece != undefined && this.canTakePiece(enemyPiece)) {
                        availableMoves.push(Square.at(pieceRow, pieceCol));
                    }
                    return availableMoves;
                }
            }
        }

        return availableMoves;
    }
}
