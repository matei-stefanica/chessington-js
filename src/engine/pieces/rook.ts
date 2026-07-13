import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';
import King from './king';

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private rookVectors : number [][] = [
            [0, 1], [1, 0], [-1, 0], [0, -1]
        ]
    
    private addAvailableMoves(board: Board, availableMoves: Square[], currentPosition: Square, stepVertical: number, stepHorizontal: number) : Square[] {
        for (let i = currentPosition.row + stepVertical, j = currentPosition.col + stepHorizontal; this.checkBounds(i, j); i += stepVertical, j += stepHorizontal) {
            const enemyPiece : Piece | undefined = board.getPiece(Square.at(i, j));
            if (enemyPiece == undefined) {
                availableMoves.push(Square.at(i, j));
            }
            else {
                if (this.canTakePiece(enemyPiece)) {
                    availableMoves.push(Square.at(i, j));
                }
                return availableMoves
            }
        }
        return availableMoves
    }

    public getAvailableMoves(board: Board) {
        const availableMoves : Square[] = [];
        const currentPosition : Square = board.findPiece(this);

        for (const [verticalStep, horizontalStep] of this.rookVectors) {
            availableMoves.concat(this.addAvailableMoves(board, availableMoves, currentPosition, verticalStep, horizontalStep))
        }
        return availableMoves;
    }
}
