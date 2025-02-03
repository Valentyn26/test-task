import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    isActiveButton?: boolean;
    type: "submit" | "reset" | "button";
    width?: string;
    children?: ReactNode;
}

export default function Button({ onClick, isActiveButton, type, width, children }: ButtonProps) {
    return (
        <button onClick={onClick} type={type} className={`${styles.button} ${isActiveButton ? styles.active : ""}`} style={{ width }}>
            {children}
        </button>
    )
}