import { useState } from "react";
import { GamePiece } from "../components/Square/Square";

type GameStateRow = (GamePiece | null)[];
type GameState = GameStateRow[];

export type SquareCoordinates = {
  x: number;
  y: number;
};

const useGameState: (
  initialState: GameState
) => [
  GameState,
  (prevSquare: SquareCoordinates, currSquare: SquareCoordinates) => void
] = (initialState) => {
  const [gameState, setGameState] = useState<GameState>(initialState);

  const updateGameState = (
    prevSquare: SquareCoordinates,
    currSquare: SquareCoordinates
  ) => {
    const prevPositions = gameState;
    /** this is the piece that is being moved */
    const movingPiece = gameState[prevSquare.y][prevSquare.x];
    const newRowArray: GameState = [];

    /** for the board, we want to update each row */
    prevPositions.forEach((row, yCoord) => {
      const newSquareArray: GameStateRow = [];
      /** for each row, we want to update the squares */
      row.forEach((square, xCoord) => {
        const isPreviousLocation =
          yCoord === prevSquare.y && xCoord === prevSquare.x;
        const isNewLocation =
          yCoord === currSquare.y && xCoord === currSquare.x;

        if (isPreviousLocation) {
          newSquareArray.push(null);
        } else if (isNewLocation) {
          newSquareArray.push(movingPiece);
        } else newSquareArray.push(square);
      });

      newRowArray.push(newSquareArray);
    });

    setGameState(newRowArray);
  };

  return [gameState, updateGameState];
};

export default useGameState;
