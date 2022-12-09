import useGameState from "../../hooks/useGameState";
import Board from "../Board/Board";
import { GamePiece } from "../Square/Square";
import "./Game.scss";

const Game = () => {
  const initialState = [
    new Array(8).fill(GamePiece.BP),
    new Array(8).fill(GamePiece.BP),
    new Array(8).fill(null),
    new Array(8).fill(null),
    new Array(8).fill(null),
    new Array(8).fill(null),
    new Array(8).fill(GamePiece.WP),
    new Array(8).fill(GamePiece.WP),
  ];
  const [gameState, updateGameState] = useGameState(initialState);

  return (
    <div className="gameContainer">
      <Board />
    </div>
  );
};

export default Game;
