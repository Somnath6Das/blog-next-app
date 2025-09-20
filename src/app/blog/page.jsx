import CardList from '@/components/cardList/CardList'
import styles from './blogPage.module.css'
import Menu from '@/components/menu/Menu'
import MenuCategories from '@/components/menuCategories/MenuCategories'

export default function BlogPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Categories Blog</h1>
            <div className={styles.content}>
                <MenuCategories />
                <CardList />
            </div>
        </div>
    )
}