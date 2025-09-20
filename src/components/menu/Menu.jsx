import React from "react"
import styles from "./menu.module.css"
import MenuItem from "@/menuItem/MenuItem"
import MenuCategories from "../menuCategories/MenuCategories"

export default function Menu() {
    return (
        <div className={styles.container}>
            <h2 className={styles.subtitle}>{"What's hot"}</h2>
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuItem />
            <MenuCategories />
        </div>
    )
}