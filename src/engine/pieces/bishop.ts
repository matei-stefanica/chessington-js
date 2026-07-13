import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private bishopVectors : number[][] = [
        [1, 1], [1, -1], [-1, 1], [-1, -1]
    ]
    

    private addAvailableMoves(board: Board, availableMoves: Square[], currentPosition: Square, stepVertical: number, stepHorizontal: number) : Square[] {
        for (let i = currentPosition.row + stepVertical, j = currentPosition.col + stepHorizontal; this.checkBounds(i, j); i += stepVertical, j += stepHorizontal) {
                if (board.getPiece(Square.at(i, j)) == undefined) {
                    availableMoves.push(Square.at(i, j));
                }
                else {
                    return availableMoves;
                }
        }
        return availableMoves;
    }

    public getAvailableMoves(board: Board) {
        const availableMoves : Square[] = [];
        const currentPosition : Square = board.findPiece(this);

        for (const [verticalStep, horizontalStep] of this.bishopVectors) {
            availableMoves.concat(this.addAvailableMoves(board, availableMoves, currentPosition, verticalStep, horizontalStep));
        }
        return availableMoves;
    }
}
