import React from "react";

import Row from "./Row";

const Board: React.FC = () => {
  let allRows: JSX.Element[] = [];

  // const generateBoard = (): void => {
  //   for (let i = 1; i <= 8; i++) {
  //     if (i % 2 === 0) {
  //       allRows.push(<Row key={i} isEven={true} rowNum={i} />)
  //     } else {
  //       allRows.push(<Row key={i} isEven={false} rowNum={i} />)
  //     }
  //   }
  // }

  return <div id="board">
    {allRows}
  </div>;
};

export default Board;
