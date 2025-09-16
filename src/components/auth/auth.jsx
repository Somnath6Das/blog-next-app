import Link from "next/link";
import styles from "./auth.module.css"

export default function Auth() {
    const status = "authenticated";

    return (
        <>{
            status === "notauthenticated" ? (
                <Link href="/login" className={styles.link}>Login</Link>
            ) : (
                <div className={styles.authContainer}>
                    <Link href="/write" className={styles.writeBtn}>Write</Link>
                    <span className={styles.link}>Logout</span>
                </div>
            )
        }</>
    )
}