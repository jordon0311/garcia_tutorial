import { TurnPhase } from "../../App";
import "./PlayerDetails.scss";

export enum PlayerColor {
  WHITE = "WHITE",
  BLACK = "BLACK",
}

type Props = {
  color: PlayerColor;
  turn: PlayerColor;
  phase: TurnPhase;
};

const PlayerDetails = ({ color, turn, phase }: Props) => {
  const isTurn = color === turn;
  const bannerHeader = isTurn ? "It's your turn!" : "Please wait..";
  const otherColor =
    /** condition ? true : false */
    color === PlayerColor.WHITE ? PlayerColor.BLACK : PlayerColor.WHITE;

  const waitingDesc = `Tell ${otherColor} to hurry up!`;
  const playingDesc =
    phase === TurnPhase.MOVE // Condition
      ? "Select a position to move your piece to." // True result
      : "Select a piece to move"; // False result
  const bannerDesc = isTurn ? playingDesc : waitingDesc;

  return (
    <div className="detailsContainer">
      <div className="banner">
        <h1>{bannerHeader}</h1>
        <h2>{bannerDesc}</h2>
      </div>
      {color} Details
    </div>
  );
};

export default PlayerDetails;
