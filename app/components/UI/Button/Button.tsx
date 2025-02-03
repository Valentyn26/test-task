import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
    type: "submit" | "reset" | "button";
    width?: string;
    children?: ReactNode;
}

export default function Button({ type, width, children }: ButtonProps) {
    return (
        <button type={type} className={styles.button} style={{ width }}>
            {children}
        </button>
    )
}