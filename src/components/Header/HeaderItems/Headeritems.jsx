import React from "react";
import styles from './headerItems.module.css'

function HeaderItems(){
    return (
        <div className={styles.NavigationItem}>
            <ul>
                <li><a href="App">Build Controls</a></li>
                <li><a href="App">Checkout</a></li>
            </ul>
        </div>
    )
}

export default HeaderItems;