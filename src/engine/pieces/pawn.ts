import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private baseWhitePawnLine : number = 1;
    private baseBlackPawnLine : number = 6;

    private updatePawnMoves(board: Board, currentPosition: Square, availableMoves : Square[], moveVector : number, baseLine : number) : Square[] {
        const normalMove : Square = Square.at(currentPosition.row + moveVector, currentPosition.col);
        const doubleMove : Square | null = currentPosition.row == baseLine ? Square.at(currentPosition.row + 2 * moveVector, currentPosition.col) : null;
        const canDoubleMove : boolean = doubleMove == null ? false : true;

        if (board.getPiece(normalMove) == undefined) {
            availableMoves.push(normalMove);
        }
        if (canDoubleMove && doubleMove && board.getPiece(doubleMove) == undefined && board.getPiece(normalMove) == undefined) {
            availableMoves.push(doubleMove);
        }
        return availableMoves;
    }   

    public getAvailableMoves(board: Board) {
        
        const availableMoves: Square[] = [];
        const currentPosition: Square = board.findPiece(this);
        
        switch (this.player) {
            case Player.WHITE:
                availableMoves.concat(this.updatePawnMoves(board, currentPosition, availableMoves, 1, this.baseWhitePawnLine));
                break;
            case Player.BLACK:
                availableMoves.concat(this.updatePawnMoves(board, currentPosition, availableMoves, -1, this.baseBlackPawnLine));
                break
            default:
                // TODO: add error later
                break
        }
        return availableMoves;
    }
}
