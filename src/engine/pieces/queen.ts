import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private queenMoves = [
        [0, 1], [1, 0], [-1, 0], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]
    ]
    private addAvailableMoves(board: Board, availableMoves: Square[], currentPosition: Square, stepVertical: number, stepHorizontal: number) : void {
        let blocked : boolean = false;
        for (let i = currentPosition.row + stepVertical, j = currentPosition.col + stepHorizontal; i >= this.lowerBoardBound && i < this.upperBoardBound
                 && j >= this.lowerBoardBound && j < this.upperBoardBound && !blocked; i += stepVertical, j += stepHorizontal) {
            if (board.getPiece(Square.at(i, j)) == undefined) {
                    availableMoves.push(Square.at(i, j));
            }
            else {
                blocked = true;
            }
        }
        
    }
    
    public getAvailableMoves(board: Board) {
        const availableMoves : Square[] = [];
        const currentPosition : Square = board.findPiece(this);

        for (const [verticalStep, horizontalStep] of this.queenMoves) {
            this.addAvailableMoves(board, availableMoves, currentPosition, verticalStep, horizontalStep)
        }
        return availableMoves;
    }
}
    

