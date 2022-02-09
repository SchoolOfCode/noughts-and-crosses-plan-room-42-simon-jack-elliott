import React from "react";
import { Board } from "../Game";
import Square from "../Square";
import "./styles.scss";

interface Props {
  board: Board;
  makeAMove: (squareIndex: number) => void;
}

function BoardComponent(props: Props) {
  const { board, makeAMove } = props;

  return (
    <div className="board">
      {board.map((square, index) => {
        return (
          <Square
            key={index}
            makeAMove={makeAMove}
            index={index}
            value={square}
          />
        );
      })}
    </div>
  );
}

export default BoardComponent;
