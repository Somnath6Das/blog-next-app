import React from "react"
import styles from "./footer.module.css"
import Image from "next/image"

export default function Footer() {
    return (
        <div className={styles.container}> <div className={styles.info}>
            <div className={styles.logo}>
                <Image src="/logo.png" alt="" width={50} height={50} />
                <h1 className={styles.logoText}>Beller Blog</h1>
            </div>
            <p className={styles.desc}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
                necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
                porro sequi, totam minima consequuntur, aspernatur deleniti vero
                repellendus dorales.
            </p>
            <div className={styles.icons}>
                <Image src="/facebook.png" alt="" width={18} height={18} />
                <Image src="/instagram.png" alt="" width={18} height={18} />
                <Image src="/tiktok.png" alt="" width={18} height={18} />
                <Image src="/youtube.png" alt="" width={18} height={18} />
            </div>
        </div></div>)
}