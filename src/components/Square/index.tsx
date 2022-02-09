import React, { ChangeEvent } from "react";
import "./styles.css";

// type Board = ("O" | "X" | null)[];

interface Props {
  varient: "O" | "X" | null;
  squareIndex: number;
  makeAMove: (squareIndex: number) => void;
}

function Square(props: Props) {
  const { varient, squareIndex, makeAMove } = props;

  function handleClick(e: ChangeEvent<HTMLDivElement>) {
    e.preventDefault();
    makeAMove(squareIndex);
  }

  return <div onClick={() => handleClick}>{varient}</div>;
}

export default Square;
