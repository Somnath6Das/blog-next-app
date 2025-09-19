import NavBar from "@/components/navbar/Navbar";
import styles from "./homepage.module.css";
import Footer from "@/components/footer/Footer";
import CategoryList from "@/components/categoryList/CategoriList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import SearchPost from "@/components/searchPost/SearchPost";

export default function Home() {
  return <div className={styles.container}>
    <SearchPost />
    <CategoryList />
    <div className={styles.content}>
      <CardList />
      <Menu />
    </div>
  </div>;
}
