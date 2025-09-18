"use client";

import React from "react"
import styles from "./navbar.module.css"
import Image from "next/image"
import Link from "next/link"
import Auth from "../auth/auth"
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function NavBar() {
    const { toggle, theme } = useContext(ThemeContext);
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                <div className={styles.logoImage} style={theme === "dark" ? { border: "1px solid #b4bdff" } : { border: "1px solid #de642e" }}>
                    <Image src="/letter.png" width={28} height={28} alt="logo" />
                </div>
                <div className={theme === "dark" ? styles.darkTitle : styles.title} >Better Blog</div>
            </Link>
            <div className={styles.themeCont}>
                <div
                    className={styles.themeBtn}
                    onClick={toggle}
                    style={
                        theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#de642e" }
                    }
                >

                    <div
                        className={styles.ball}
                        style={
                            theme === "dark"
                                ? { left: 1, background: "#0f172a" }
                                : { right: 1, background: "white" }
                        }
                    ></div>

                </div>
                <div className={styles.links}>
                    <Link href="/" className={theme === "dark" ? styles.darkLinkText : styles.linkText} >Home</Link>
                    <Link href="/" className={theme === "dark" ? styles.darkLinkText : styles.linkText} >Contact</Link>
                    <Link href="/" className={theme === "dark" ? styles.darkLinkText : styles.linkText} >About</Link>

                </div>
            </div>
            <Auth theme={theme} />
        </div>
    )
}