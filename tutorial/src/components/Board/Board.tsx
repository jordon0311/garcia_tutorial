import isEven from "../../util/isEven";
import { PlayerColor } from "../PlayerDetails/PlayerDetails";
import Square from "../Square/Square";
import "./Board.scss";

const arr = new Array(8).fill("");

const renderRow = (rowIndex: number) => {
  const row = arr.map((v, i) => {
    const squareKey = `${i} ${rowIndex}`;
    const squareColor = isEven(i + rowIndex)
      ? PlayerColor.WHITE
      : PlayerColor.BLACK;
    return <Square key={squareKey} x={i} y={rowIndex} color={squareColor} />;
  });

  return row;
};

type Props = {};

const Board = (props: Props) => {
  const board = arr.map((v, i) => {
    const rowKey = `r ${i}`;
    return (
      <div key={rowKey} className="boardRow">
        {renderRow(i)}
      </div>
    );
  });
  return <div className="board">{board}</div>;
};

export default Board;
