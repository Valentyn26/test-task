"use client";

import { useState } from "react";
import styles from "./Header.module.css";
import Button from "./UI/Button/Button";

import Link from "next/link";

export default function Header() {
    const [activeButton, setActiveButton] = useState('users');

    return (
        <header className={styles.header}>
            <Link href="/edit-user">
                <Button onClick={() => setActiveButton('edit')} type="button" width="200px" isActiveButton={activeButton === 'edit' ? true : false}>Edit Users</Button>
            </Link>
            <Link href="/">
                <Button onClick={() => setActiveButton('users')} type="button" width="200px" isActiveButton={activeButton === 'edit' ? false : true}>Users</Button>
            </Link>
        </header >
    )
}