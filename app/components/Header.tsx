"use client";

import styles from "./Header.module.css";
import Button from "./UI/Button/Button";

export default function Header() {
    return (
        <header className={styles.header}>
            <Button type="button" width="200px">Edit Users</Button>
            <Button type="button" width="200px">Users</Button>
        </header>
    )
}