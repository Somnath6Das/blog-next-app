import Link from 'next/link'
import styles from './card.module.css'
import Image from "next/image"
export default function Card() {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src='/blog.png' width={400} height={250} alt='img' />

            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023 - </span>
                    <span className={styles.category}>News</span>
                </div>
                <Link href="/" >
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                </Link>
                <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi totam veniam
                    numquam fuga distinctio
                </p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}