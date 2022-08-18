import { useState } from "react";
import { Square } from "./Square";

export function Board (){
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isX, setIsX] = useState(true);
    const [status, setStatus] = useState(null);

    function handleClick (position: number) {
        const squaresCopy = [...squares];
        squaresCopy[position] = isX ? 'X' : 'O';
        setSquares(squaresCopy);
        setIsX(!isX);
    }

    function restartGame(){
        setSquares(Array(9).fill(null));
        setIsX(true);
        setStatus(null);
    }


    return (
        <div className="board">
            <div className="board-row">
                <Square value={squares[0]} onClick={() => handleClick(0)}/>
                <Square value={squares[1]} onClick={() => handleClick(1)}/>
                <Square value={squares[2]} onClick={() => handleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onClick={() => handleClick(3)}/>
                <Square value={squares[4]} onClick={() => handleClick(4)}/>
                <Square value={squares[5]} onClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onClick={() => handleClick(6)}/>
                <Square value={squares[7]} onClick={() => handleClick(7)}/>
                <Square value={squares[8]} onClick={() => handleClick(8)}/>
            </div>
            <div className="status">{status}</div>
            <button className="restart" onClick={restartGame}>Restart</button>
        </div>
    )
}
