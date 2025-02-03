import { ReactNode } from "react";
import styles from "./Input.module.css";

type InputProps = {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type: string;
    value: string;
}

export default function Input({ onChange, type, value }: InputProps) {
    return (
        <input onChange={onChange} type={type} value={value} className={styles.input} />
    )
}