import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    private updatePawnMoves(board: Board, availableMoves : Square[], normalMove : Square, doubleMove: Square | null) {
        if (board.getPiece(normalMove) == undefined) {
            availableMoves.push(normalMove);
        }
        if (doubleMove != null && board.getPiece(doubleMove) == undefined && board.getPiece(normalMove) == undefined) {
            availableMoves.push(doubleMove);
        }
    }   

    public getAvailableMoves(board: Board) {
        const baseWhitePawnLine : number = 1;
        const baseBlackPawnLine : number = 6;
        const availableMoves: Square[] = [];
        const currentPosition: Square = board.findPiece(this);

        const normalWhitePawnMove : Square = Square.at(currentPosition.row + 1, currentPosition.col)
        const doubleInitialMoveWhite : Square | null = currentPosition.row == baseWhitePawnLine ? Square.at(currentPosition.row + 2, currentPosition.col) : null;
        
        const normalBlackPawnMove : Square = Square.at(currentPosition.row - 1, currentPosition.col);
        const doubleInitialMoveBlack : Square | null = currentPosition.row == baseBlackPawnLine ? Square.at(currentPosition.row - 2, currentPosition.col) : null;
        
        switch (this.player) {
            case Player.WHITE:
                this.updatePawnMoves(board, availableMoves, normalWhitePawnMove, doubleInitialMoveWhite);
                break;
            case Player.BLACK:
                this.updatePawnMoves(board, availableMoves, normalBlackPawnMove, doubleInitialMoveBlack);
                break
            default:
                // TODO: add error later
                break
        }
        return availableMoves;
    }
}