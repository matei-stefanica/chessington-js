import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const availableMoves: Square[] = [];
        const currentPosition: Square = board.findPiece(this);
        switch (this.player) {
            case Player.WHITE:
                const normalWhitePawnMove : Square = Square.at(currentPosition.row + 1, currentPosition.col)
                if (board.getPiece(normalWhitePawnMove) == null) {
                    availableMoves.push(normalWhitePawnMove);
                }
                break;
            case Player.BLACK:
                const normalBlackPawnMove : Square = Square.at(currentPosition.row - 1, currentPosition.col)
                if (board.getPiece(normalBlackPawnMove) == null) {
                    availableMoves.push(normalBlackPawnMove);
                }
                break
            default:
                // maybe add error later
                console.log("Unkown player!")
                break
        }
        return availableMoves;
    }
}