import React, { useEffect, useState } from "react";

//COMPS
import Row from "./components/Row";
import Square from "./components/Square";

//DATA
import { initState, squareObj } from "./utils/initState";

const App: React.FC = () => {
  const [gameState, setGameState] = useState<squareObj[]>([]);

  const content: JSX.Element[] = [];

  for (let i = 1; i <= 8; i++) {
    let row: JSX.Element[] = [];
    for (let j = 1; j <= 8; j++) {
      const currentSquare: squareObj = initState[i - 1][j - 1];
      if (i % 2 === 1 && j % 2 === 1) {
        row.push(
          <Square
            key={currentSquare.name}
            id={currentSquare.name}
            currentPiece={currentSquare.piece}
            type="darkSquare"
          />
        );
      } else if (i % 2 === 1 && j % 2 === 0) {
        row.push(
          <Square
            key={currentSquare.name}
            id={currentSquare.name}
            currentPiece={currentSquare.piece}
            type="lightSquare"
          />
        );
      } else if (i % 2 === 0 && j % 2 === 1) {
        row.push(
          <Square
            key={currentSquare.name}
            id={currentSquare.name}
            currentPiece={currentSquare.piece}
            type="lightSquare"
          />
        );
      } else if (i % 2 === 0 && j % 2 === 0) {
        row.push(
          <Square
            key={currentSquare.name}
            id={currentSquare.name}
            currentPiece={currentSquare.piece}
            type="darkSquare"
          />
        );
      }
    }

    content.push(<Row key={`Row${i}`} squares={row} />);
  }

  return (
    <div id="board">
      {content}
    </div>
  );
};

export default App;
