import React, { useCallback, useEffect, useState } from "react";
import BoardComponent from "../Board";
import "./styles.scss";

export type Player = "o" | "x";
export type Board = (Player | null)[];

const initialBoardState: Board = Array(9).fill(null);

const POTENTIAL_MATCHES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Game() {
  const [board, setBoard] = useState(initialBoardState);
  const [currentPlayer, setCurrentPlayer] = useState<Player>("o");
  const [isPlaying, setIsPlaying] = useState(true);
  const [playerOScore, setPlayerOScore] = useState(0);
  const [playerXScore, setPlayerXScore] = useState(0);
  const [drawScore, setDrawScore] = useState(0);

  function resetGame() {
    setCurrentPlayer("o");
    setBoard(initialBoardState);
    setIsPlaying(true);
  }

  function makeAMove(squareIndex: number) {
    setBoard((old) =>
      old.map((square, index) =>
        squareIndex === index ? currentPlayer : square
      )
    );
    setCurrentPlayer((old) => (old === "o" ? "x" : "o"));
  }

  const checkPlayerWon = useCallback(
    (player: Player) => {
      return POTENTIAL_MATCHES.some((match) =>
        match.every((index) => board[index] === player)
      );
    },
    [board]
  );

  function checkForWinner() {
    const playerOWon = checkPlayerWon("o");
    const playerXWon = checkPlayerWon("x");

    if (playerOWon) {
      setPlayerOScore((old) => old + 1);
      setIsPlaying(false);
    } else if (playerXWon) {
      setPlayerXScore((old) => old + 1);
      setIsPlaying(false);
    } else if (!board.some((square) => square === null)) {
      setDrawScore((old) => old + 1);
      setIsPlaying(false);
    }

    return;
  }

  function handleClickBoard() {
    if (isPlaying) return;
    resetGame();
  }

  useEffect(checkForWinner, [board, checkPlayerWon]);

  return (
    <div className="layout">
      <div onClick={handleClickBoard}>
        <BoardComponent board={board} makeAMove={makeAMove} />
      </div>
      <div className="scores">
        <div className="score">
          Player 1 (O) <span>{playerOScore}</span>
        </div>
        <div className="score">
          Draw <span>{drawScore}</span>
        </div>
        <div className="score">
          Player 2 (X)<span>{playerXScore}</span>
        </div>
      </div>
    </div>
  );
}

export default Game;
