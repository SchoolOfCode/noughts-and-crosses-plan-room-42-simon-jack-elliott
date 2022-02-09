import React from "react";
import { Player } from "../Game";
import "./styles.scss";

interface Props {
  value: Player | null;
  index: number;
  makeAMove: (squareIndex: number) => void;
}

function Square(props: Props) {
  const { value, index, makeAMove } = props;

  function handleClick() {
    if (value) return;
    makeAMove(index);
  }

  return (
    <button className="button" onClick={handleClick}>
      <div className={`value ${value ? "animate" : ""}`}>{value}</div>
    </button>
  );
}

export default Square;
