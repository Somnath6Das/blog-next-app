import Image from 'next/image'
import styles from './searchPost.module.css'

export default function SearchPost() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>Search Post</div>
            <div className={styles.searchContainer}>
                <input type="text" placeholder="Latest news, tech etc..." className={styles.searchBox} />
                <div className={styles.searchIcon}><Image src="/search.png" width={28} height={28} alt="logo" /></div>

            </div>
        </div>
    )
}