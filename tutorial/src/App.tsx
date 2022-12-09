import { useState } from "react";
import "./App.scss";
import Game from "./components/Game/Game";
import PlayerDetails, {
  PlayerColor,
} from "./components/PlayerDetails/PlayerDetails";

export enum TurnPhase {
  SELECT = "SELECT",
  MOVE = "MOVE",
}

const App = () => {
  const [turn, setTurn] = useState<PlayerColor>(PlayerColor.WHITE);
  const [phase, setPhase] = useState<TurnPhase>(TurnPhase.SELECT);

  return (
    <div className="App">
      <PlayerDetails color={PlayerColor.WHITE} turn={turn} phase={phase} />
      <Game />
      <PlayerDetails color={PlayerColor.BLACK} turn={turn} phase={phase} />
    </div>
  );
};

export default App;
