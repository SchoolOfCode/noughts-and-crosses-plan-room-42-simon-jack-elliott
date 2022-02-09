import React, { useState } from "react";
import BoardComponent from "../Board";
import "./styles.css";

type Player = "o" | "x";
type Board = (Player | null)[];

const initialBoardState: Board = Array(9).fill(null);

function Game() {
  const [board, setBoard] = useState(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("o");
  const [winner, setWinner] = useState<Player>();

  function makeAMove(squareIndex: number) {
    setBoard((old) =>
      old.map((square, index) =>
        squareIndex === index ? currentPlayer : square
      )
    );
    checkWinner();
  }

  function checkWinner() {
    const isWon = false;
    const newWinner = "x";

    if (isWon) {
      setWinner(newWinner);
    } else {
      setCurrentPlayer((old) => (old === "o" ? "x" : "o"));
    }

    return;
  }

  return <BoardComponent board={board} makeAMove={makeAMove} />;
}

export default Game;
