import React from "react"
import styles from "./categoryList.module.css"
import Link from "next/link";
import Image from "next/image";

export default function CategoryList() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Categories</h1>
            <div className={styles.categories}>
                <Link
                    href="/blog?cat=news"
                    className={styles.category}

                >

                    <Image
                        src='/newspaper.png'
                        alt=""
                        width={20}
                        height={20}
                        className={styles.image}
                    />

                    News
                </Link>
                <Link
                    href="/blog?cat=politics"
                    className={`${styles.category} ${styles.politics}`}

                >

                    <Image
                        src='/politics.png'
                        alt=""
                        width={20}
                        height={20}
                        className={styles.image}
                    />

                    Politics
                </Link>
                <Link
                    href="/blog?cat=Techonology"
                    className={`${styles.category} ${styles.Techonology}`}

                >

                    <Image
                        src='/computer.png'
                        alt=""
                        width={20}
                        height={20}
                        className={styles.image}
                    />

                    Techonology
                </Link>
                <Link
                    href="/blog?cat=economy"
                    className={`${styles.category} ${styles.economy}`}

                >

                    <Image
                        src='/economy.png'
                        alt=""
                        width={20}
                        height={20}
                        className={styles.image}
                    />

                    Economy
                </Link>
                <Link
                    href="/blog?cat=phones"
                    className={`${styles.category} ${styles.phones}`}

                >

                    <Image
                        src='/smartphone.png'
                        alt=""
                        width={20}
                        height={20}
                        className={styles.image}
                    />

                    Phones
                </Link>
                <Link
                    href="/blog?cat=nature"
                    className={`${styles.category} ${styles.nature}`}

                >

                    <Image
                        src='/nature.png'
                        alt=""
                        width={20}
                        height={20}
                        className={styles.image}
                    />

                    Nature
                </Link>

            </div>
        </div>
    );
}