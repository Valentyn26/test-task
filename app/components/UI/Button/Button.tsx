import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type: "submit" | "reset" | "button";
    width?: string;
    children?: ReactNode;
}

export default function Button({ onClick, type, width, children }: ButtonProps) {
    return (
        <button onClick={onClick} type={type} className={styles.button} style={{ width }}>
            {children}
        </button>
    )
}