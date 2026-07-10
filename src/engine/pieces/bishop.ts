import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const availableMoves : Square[] = [];
        const currentPosition : Square = board.findPiece(this);
        for (let i = currentPosition.row + 1, j = currentPosition.col + 1; i < 8 && j < 8; i += 1, j += 1) {
            if (board.getPiece(Square.at(i, j)) == undefined) {
                availableMoves.push(Square.at(i, j));
            }
            else {
                break;
            }
        }

        for (let i = currentPosition.row - 1, j = currentPosition.col + 1; i >= 0 && j < 8; i -= 1, j += 1) {
            if (board.getPiece(Square.at(i, j)) == undefined) {
                availableMoves.push(Square.at(i, j));
            }
            else {
                break;
            }
        }

        for (let i = currentPosition.row + 1, j = currentPosition.col - 1; i < 8 && j >= 0; i += 1, j -= 1) {
            if (board.getPiece(Square.at(i, j)) == undefined) {
                availableMoves.push(Square.at(i, j));
            }
            else {
                break;
            }
        }
        for (let i = currentPosition.row - 1, j = currentPosition.col - 1; i >= 0 && j >= 0; i -= 1, j -= 1) {
            if (board.getPiece(Square.at(i, j)) == undefined) {
                availableMoves.push(Square.at(i, j));
            }
            else {
                break;
            }
        }

        return availableMoves;
    }
}
