import React from "react";
import Square from "../Square";
import "./styles.css";

type Board = ('o' | 'x' | null)[];
type eachSquare = ('o' | 'x' | null)

function BoardComponent({board, makeAMove} : {board: Board, makeAMove: (squareIndex: number)=> void}) {

  return( 
    <div>
    {board.map((each:eachSquare )=> {
      return <Square makeAMove={makeAMove}  />;
    }) }
    </div>

  )
  
  
}

export default BoardComponent;
