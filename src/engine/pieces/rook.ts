import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const availableMoves : Square[] = [];
        const currentPosition : Square = board.findPiece(this);

        for (let i = currentPosition.row - 1; i >= 0; i--) {
            if (board.getPiece(Square.at(i, currentPosition.col)) == undefined) {
                availableMoves.push(Square.at(i, currentPosition.col));
            }
            else {
                break;
            }
        }

        for (let i = currentPosition.row + 1; i < 8; i++) {
            if (board.getPiece(Square.at(i, currentPosition.col)) == undefined) {
                availableMoves.push(Square.at(i, currentPosition.col));
            }
            else {
                break;
            }
        }

        for (let i = currentPosition.col - 1; i >= 0; i--) {
            if (board.getPiece(Square.at(currentPosition.row, i)) == undefined) {
                availableMoves.push(Square.at(currentPosition.row, i));
            }
            else {
                break;
            }
        }

        for (let i = currentPosition.col + 1; i < 8; i++) {
            if (board.getPiece(Square.at(currentPosition.row, i)) == undefined) {
                availableMoves.push(Square.at(currentPosition.row, i));
            }
            else {
                break;
            }
        }
        return availableMoves;
    }
}
