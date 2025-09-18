"use client";
import Link from "next/link";
import styles from "./auth.module.css"
import { useState } from "react";

export default function Auth({ theme }) {
    const [open, setOpen] = useState(false);
    const status = "notauthenticated";
    return (
        <>{
            status === "authenticated" ? (
                <Link href="/login" className={theme === "dark" ? styles.darkLink : styles.link}>Login</Link>
            ) : (
                <div className={styles.authContainer}>
                    <Link href="/write" className={theme === "dark" ? styles.darkWriteBtn : styles.writeBtn} >Write</Link>
                    <span className={theme === "dark" ? styles.darkLink : styles.link}>Logout</span>
                </div>
            )
        }   <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {open && (
                <div className={styles.responsiveMenu}>
                    <Link href="/">Homepage</Link>
                    <Link href="/">About</Link>
                    <Link href="/">Contact</Link>
                    {status === "authenticated" ? (
                        <Link href="/login" className={theme === "dark" ? styles.smallDarkLink : styles.smallLink}>Login</Link>
                    ) : (
                        <>
                            <Link href="/write" className={theme === "dark" ? styles.smallDarkWriteBtn : styles.smallWriteBtn} >Write</Link>
                            <span className={theme === "dark" ? styles.smallDarkLink : styles.smallLink}>Logout</span>
                        </>
                    )}
                </div>
            )}</>
    )
}