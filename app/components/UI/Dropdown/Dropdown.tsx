"use client";

import { ReactNode, useState } from "react";
import styles from "./Dropdown.module.css";
import Option from "./Option";

type DropdownProps = {
    title: string;
    width: string;
    children?: ReactNode;
}

export default function Dropdown({ title, width, children }: DropdownProps) {
    const [isOpened, setIsOpened] = useState(false);

    function handleOpen() {
        if (isOpened) {
            setIsOpened(false);
        } else {
            setIsOpened(true);
        }
    }

    return (
        <div className={`${styles.dropdown} ${isOpened ? styles.open : ""}`} style={{ width }}>
            <button onClick={handleOpen} type="button" className={styles.dropdown__title}>
                <div>{title}</div>
                <div className={styles.dropdown__arrow}>
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.265 1.26498L6.26499 6.26499C6.19467 6.33521 6.09936 6.37465 5.99998 6.37465C5.90061 6.37465 5.8053 6.33521 5.73498 6.26499L0.734984 1.26498C0.668744 1.1939 0.632683 1.09987 0.634397 1.00272C0.636111 0.905573 0.675467 0.81288 0.744173 0.744174C0.81288 0.675467 0.905572 0.636111 1.00272 0.634397C1.09987 0.632683 1.1939 0.668745 1.26498 0.734985L5.99998 5.46936L10.735 0.734985C10.8061 0.668745 10.9001 0.632683 10.9972 0.634397C11.0944 0.636111 11.1871 0.675467 11.2558 0.744174C11.3245 0.81288 11.3639 0.905573 11.3656 1.00272C11.3673 1.09987 11.3312 1.1939 11.265 1.26498Z" fill="#1B2438" />
                    </svg>
                </div>
            </button>
            <div className={styles.dropdown__body} style={{ width }}>
                {children}
            </div>
        </div>
    )
}