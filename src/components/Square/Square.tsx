import styles from './Square.module.css'

type TSquareProps = {
    value : string | null,
    action : () => void;
}
const Square = (props : TSquareProps) => {
    const {value, action} = props
    return (
        <button
            className={value ? `${styles.button} ${styles.active}` : styles.button}
            style={value === "X" ? {color : "#f54d62"} : {color : "#87e43a"}}
            onClick={action}>
            {value === "O" && <img src={'./circle.svg'} alt={"O"}/>}
            {value === "X" && <img src={'./cross.svg'} alt={"X"}/>}
        </button>

    )
}

export default Square;