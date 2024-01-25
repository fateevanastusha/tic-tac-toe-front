import Square from "../Square/Square";
import {useState} from "react";
import styles from './Board.module.css'

const Board = () => {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isNext, setIsNext] = useState<boolean>(true);
    const handleClick = (i : number) => {
        if (squares[i] || calculateWinner()) {
            return
        }
        const nextSquares = squares.slice();
        if (isNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        setSquares(nextSquares);
        setIsNext(!isNext)
    }

    const calculateWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i ++) {
            const [a,b,c] = lines[i];
            if (
                squares[a] && squares[a] === squares[b] && squares[a] === squares[c]
            ) {
                return squares[a]
            }
        }
        return null
    }
    const winner = calculateWinner();
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {winner ?
                    <p>Winner is {winner === "X" ?
                        <img src={'./cross.svg'} alt={"X"}/> :
                        <img src={'./circle.svg'} alt={"O"}/>
                    }</p>
                    : <p>Next player is {isNext ?
                    <img src={'./cross.svg'} alt={"X"}/> :
                    <img src={'./circle.svg'} alt={"O"}/>}</p>}
                <div className={styles.board}>
                    {squares.map((item, index) => {
                        return (
                            <Square key={index} value={item} action={() => handleClick(index)}/>
                        )
                    })}
                </div>
                <button type={"submit"} className={styles.button} onClick={() => {window.location.reload();}}>Restart</button>
            </div>
        </div>
    )
}

export default Board