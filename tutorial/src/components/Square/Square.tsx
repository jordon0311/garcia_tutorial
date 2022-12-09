import { PlayerColor } from "../PlayerDetails/PlayerDetails";
import "./Square.scss";

export enum GamePiece {
  BK = "BK",
  BP = "BP",
  WK = "WK",
  WP = "WP",
}

type Props = {
  gamePiece: GamePiece | null;
  x: number;
  y: number;
  color: PlayerColor;
};

const Square = ({ gamePiece, x, y, color }: Props) => {
  const className = color === PlayerColor.WHITE ? "whiteSquare" : "blackSquare";
  const hasGamePiece = !!gamePiece;

  const getCheckerClass = () => {
    switch (gamePiece) {
      case GamePiece.BK:
        return "blackKing";
      case GamePiece.BP:
        return "blackPawn";
      case GamePiece.WK:
        return "whiteKing";
      case GamePiece.WP:
        return "whitePawn";
      default:
        return;
    }
  };
  const checkerClassName = getCheckerClass();

  return (
    <div className={className}>
      {hasGamePiece && <div className={checkerClassName} />}
    </div>
  );
};

export default Square;
