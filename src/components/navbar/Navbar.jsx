import React from "react"
import styles from "./navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import Auth from "../auth/auth"
import ToggleTheme from "../toggleTheme/ToggleTheme"

export default function NavBar() {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                <Image src="/logo1.png" width={30} height={30} alt="logo" />
                <div className={styles.title}>Better Blog</div>
            </Link>

            <div className={styles.links}>
                <ToggleTheme />
                <Link href="/" className={styles.linkText}>Home</Link>
                <Link href="/" className={styles.linkText}>Contact</Link>
                <Link href="/" className={styles.linkText}>About</Link>
                <Auth />
            </div>
        </div>
    )
}