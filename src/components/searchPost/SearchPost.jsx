"use client";
import Image from 'next/image'
import styles from './searchPost.module.css'
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

export default function SearchPost() {
    const { toggle, theme } = useContext(ThemeContext);
    return (
        <div className={styles.container}>
            <div className={theme === 'dark' ? styles.title_dark : styles.title}>Search Posts</div>
            <div style={{ display: "flex", gap: "8px" }}>
                <div className={styles.searchContainer}>
                    <input type="text" placeholder="Latest news, tech etc..." className={theme === 'dark' ? styles.searchBoxDark : styles.searchBox} />
                </div>
                <div className={theme === 'dark' ? styles.searchIconDark : styles.searchIcon}>
                    <Image
                        src={"/search.png"}
                        width={30}
                        height={30}
                        alt="logo"
                    /></div>
            </div>
        </div>
    )
}