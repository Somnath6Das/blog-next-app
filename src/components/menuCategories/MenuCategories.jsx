import styles from './menuCategories.module.css'
import Link from "next/link";
import React from "react";

export default function MenuCategories() {
    return (
        <div className={styles.categoryList}>
            <Link
                href="/blog?cat=style"
                className={styles.categoryItem}
            >
                Style
            </Link>
            <Link href="/blog" className={styles.categoryItem}>
                Fashion
            </Link>
            <Link href="/blog" className={styles.categoryItem}>
                Food
            </Link>
            <Link href="/blog" className={styles.categoryItem}>
                Travel
            </Link>
            <Link href="/blog" className={styles.categoryItem}>
                Culture
            </Link>
            <Link href="/blog" className={styles.categoryItem}>
                Coding
            </Link>
        </div>
    )
}