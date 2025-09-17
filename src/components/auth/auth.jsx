import Link from "next/link";
import styles from "./auth.module.css"

export default function Auth({ theme }) {
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
        }</>
    )
}