import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Piece {
    public player: Player;

    protected lowerBoardBound = 0;
    protected upperBoardBound = 8;

    public constructor(player: Player) {
        this.player = player;
    }

    protected checkBounds(row : number, col : number) : boolean {
        if (row < this.upperBoardBound && row >= this.lowerBoardBound && col < this.upperBoardBound && col >= this.lowerBoardBound) {
            return true;
        }
        return false;
    }

    public getAvailableMoves(board: Board) {
        throw new Error('This method must be implemented, and return a list of available moves');
    }

    public moveTo(board: Board, newSquare: Square) {
        const currentSquare = board.findPiece(this);
        board.movePiece(currentSquare, newSquare);
    }
}
