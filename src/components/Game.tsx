import * as React from "react";
import styled from "styled-components";
import { BoardState, useGameState, Value } from "./GameState";

type LayoutProps = {
  gap: number;
};

const Row = styled.div<LayoutProps>`
  display: flex;
  flex-direction: row;
  gap: ${(props) => props.gap}px;
`;

const Column = styled.div<LayoutProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap}px;
`;



type BoardProps = {
  board: BoardState;
  onClick: (square: number) => void;
};
function Board({ board, onClick }: BoardProps) {
  const createProps = (square: number): SquareProps => {
    return {
      value: board[square],
      onClick: () => onClick(square),
    };
  };
  return (

      <Column gap={0}>
        <Row gap={0}>
          <Square {...createProps(0)} />
          <Square {...createProps(1)} />
          <Square {...createProps(2)} />
        </Row>
        <Row gap={0}>
          <Square {...createProps(3)} />
          <Square {...createProps(4)} />
          <Square {...createProps(5)} />
        </Row>
        <Row gap={0}>
          <Square {...createProps(6)} />
          <Square {...createProps(7)} />
          <Square {...createProps(8)} />
        </Row>
      </Column>

  );
}

const StyledSquare = styled.button`
width: 300px;
height: 300px;
background: #fff;
border: 1px solid #999;
padding: 0;
font-family: Arial, Helvetica, sans-serif;
font-size: 200px;
font-weight: bold;
`;
type SquareProps = {
  value: Value;
  onClick: () => void;
};
function Square(props: SquareProps) {
  return <StyledSquare onClick={props.onClick}>{props.value}</StyledSquare>;
}

function Game() {
  const {
    gameState,
    current,
    xIsNext,
    jumpTo,
    winner,
    handleClick,
  } = useGameState();
  return (
    <Row gap={20}>
      <Column gap={20}>
        <div>
          {winner ? `winner ${winner}` : `Next Player ${xIsNext ? "X" : "O"}`}
        </div>
        <Board board={current} onClick={handleClick} />
      </Column>
      <Log history={gameState.history} jumpTo={jumpTo} />
    </Row>
  );
}

type LogProps = {
  history: BoardState[],
  jumpTo: (step: number) => void,
}
function Log(props: LogProps) {
  return (
    <ol>
      {props.history.map((_, index) => {
        return (
          <li key={index}>
            <button onClick={() => props.jumpTo(index)}>
              Go to {index === 0 ? 'start' : `move #${index}`}
            </button>
          </li>
        );
      })}
    </ol>
  )
}

export default Game;
