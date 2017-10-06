import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const baseWhitePawnLine : number = 1;
        const baseBlackPawnLine : number = 6;
        const availableMoves: Square[] = [];
        const currentPosition: Square = board.findPiece(this);
        
        switch (this.player) {
            case Player.WHITE:
                const normalWhitePawnMove : Square = Square.at(currentPosition.row + 1, currentPosition.col)
                const doubleInitialMoveWhite : Square | null = currentPosition.row == baseWhitePawnLine ? Square.at(currentPosition.row + 2, currentPosition.col) : null;
                if (board.getPiece(normalWhitePawnMove) == undefined) {
                    availableMoves.push(normalWhitePawnMove);
                }
                if (doubleInitialMoveWhite != null && board.getPiece(doubleInitialMoveWhite) == undefined && board.getPiece(normalWhitePawnMove) == undefined) {
                    availableMoves.push(doubleInitialMoveWhite);
                }
                break;
            case Player.BLACK:
                const normalBlackPawnMove : Square = Square.at(currentPosition.row - 1, currentPosition.col);
                const doubleInitialMoveBlack : Square | null = currentPosition.row == baseBlackPawnLine ? Square.at(currentPosition.row - 2, currentPosition.col) : null;
                
                if (board.getPiece(normalBlackPawnMove) == undefined) {
                    availableMoves.push(normalBlackPawnMove);
                }
                if (doubleInitialMoveBlack != null && board.getPiece(doubleInitialMoveBlack) == undefined && board.getPiece(normalBlackPawnMove) == undefined) {
                    availableMoves.push(doubleInitialMoveBlack);
                }
                break
            default:
                // maybe add error later
                break
        }
        return availableMoves;
    }
}